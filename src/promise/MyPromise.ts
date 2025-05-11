// 自定义 Promise

const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

type Executor<T> = (
	resolve: (value: T | MyPromise<T>) => void,
	reject: (reason?: any) => void
) => void;

type OnResolved<T, R> = (value: T) => R | MyPromise<R>;
type OnRejected<R> = (reason: any) => R | MyPromise<R>;

type Callback<T, R> = {
	onResolved: OnResolved<T, R>;
	onRejected: OnRejected<R>;
};

export class MyPromise<T> {
	private status: 'pending' | 'resolved' | 'rejected' = PENDING;
	private data: any;
	private callbacks: Callback<any, any>[] = [];

	constructor(executor: Executor<T>) {
		const resolve: any = (value: T | MyPromise<T>) => {
			if (this.status !== PENDING) return;
			if (value instanceof MyPromise) {
				return value.then(resolve, reject);
			}
			this.status = RESOLVED;
			this.data = value;
			queueMicrotask(() => {
				this.callbacks.forEach((cb) => cb.onResolved(this.data));
			});
		};

		const reject = (reason: any) => {
			if (this.status !== PENDING) return;
			this.status = REJECTED;
			this.data = reason;
			queueMicrotask(() => {
				this.callbacks.forEach((cb) => cb.onRejected(this.data));
			});
		};

		try {
			executor(resolve, reject);
		} catch (err) {
			reject(err);
		}
	}

	then<R = T>(
		onResolved?: OnResolved<T, R>,
		onRejected?: OnRejected<R>
	): MyPromise<R> {
		onResolved =
			typeof onResolved === 'function'
				? onResolved
				: (value) => value as unknown as R;
		onRejected =
			typeof onRejected === 'function'
				? onRejected
				: (reason) => {
						throw reason;
				  };

		return new MyPromise<R>((resolve, reject) => {
			const handle = (callback: Function) => {
				try {
					const result = callback(this.data);
					if (result instanceof MyPromise) {
						result.then(resolve, reject);
					} else {
						resolve(result);
					}
				} catch (error) {
					reject(error);
				}
			};

			if (this.status === PENDING) {
				this.callbacks.push({
					onResolved: (value) => handle(onResolved!),
					onRejected: (reason) => handle(onRejected!),
				});
			} else if (this.status === RESOLVED) {
				queueMicrotask(() => handle(onResolved!));
			} else {
				queueMicrotask(() => handle(onRejected!));
			}
		});
	}

	catch<R = never>(onRejected: OnRejected<R>): MyPromise<R> {
		return this.then(undefined, onRejected);
	}

	static resolve<U>(value: U | MyPromise<U>): MyPromise<U> {
		return new MyPromise<U>((resolve, reject) => {
			if (value instanceof MyPromise) {
				value.then(resolve, reject);
			} else {
				resolve(value);
			}
		});
	}

	static reject<U = never>(reason: any): MyPromise<U> {
		return new MyPromise<U>((_, reject) => reject(reason));
	}

	static all<T>(promises: Array<T | MyPromise<T>>): MyPromise<T[]> {
		return new MyPromise<T[]>((resolve, reject) => {
			const results: T[] = [];
			let count = 0;

			promises.forEach((promise, index) => {
				MyPromise.resolve(promise).then(
					(value) => {
						results[index] = value;
						count++;
						if (count === promises.length) {
							resolve(results);
						}
					},
					(reason) => reject(reason)
				);
			});
		});
	}

	static race<T>(promises: Array<T | MyPromise<T>>): MyPromise<T> {
		return new MyPromise<T>((resolve, reject) => {
			promises.forEach((p) => {
				MyPromise.resolve(p).then(resolve, reject);
			});
		});
	}

	static resolveDelay<T>(value: T | MyPromise<T>, time: number): MyPromise<T> {
		return new MyPromise<T>((resolve) => {
			setTimeout(() => {
				MyPromise.resolve(value).then(resolve);
			}, time);
		});
	}

	static rejectDelay(reason: any, time: number): MyPromise<never> {
		return new MyPromise((_, reject) => {
			setTimeout(() => reject(reason), time);
		});
	}
}
