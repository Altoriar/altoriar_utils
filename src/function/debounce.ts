/* 防抖 */

type TimerFunction<T extends (...args: any[]) => void> = T & {
	timerId?: ReturnType<typeof setTimeout>;
};

export function debounce<T extends (...args: any[]) => void>(
	callback: T,
	delay: number
) {
	const cb: TimerFunction<T> = callback;

	return function (this: any, ...args: Parameters<T>) {
		if (cb.hasOwnProperty('timerId')) {
			clearTimeout(cb.timerId);
		}

		cb.timerId = setTimeout(() => {
			callback.call(this, args);
			delete cb.timerId;
		}, delay);
	};
}
