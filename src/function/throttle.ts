/* 节流 */

export function throttle<T extends (...args: any[]) => any>(
	callback: T,
	delay: number
) {
	let pre = 0;
	return function (this: any, ...args: Parameters<T>) {
		const now = Date.now();
		if (now - pre >= delay) {
			callback.apply(this, args);
			pre = now;
		}
	};
}
