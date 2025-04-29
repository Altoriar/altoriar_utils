export function bind<T extends (...args: any[]) => any>(
	fn: T,
	obj: object | null | undefined,
	...args: Parameters<T>
) {
	return function (...args2: Parameters<T>) {
		if (obj === undefined || obj === null) {
			obj = window;
		}
		const tempObj = obj as Record<string, any>;
		tempObj.tempFn = fn;
		const result = tempObj.tempFn(...args, ...args2);
		delete tempObj.tempFn;
		return result;
	};
}
