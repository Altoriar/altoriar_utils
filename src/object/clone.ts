/**
 * 浅克隆
 */

export function clone<T extends object>(target: T): T {
	if (target instanceof Array) {
		return [...target] as T;
	} else if (target !== null && typeof target === 'object') {
		return { ...target };
	} else {
		return target;
	}
}
