/**
 * 数组扁平化
 */

type NestedArray<T> = T | NestedArray<T>[];
export function flatten<T>(array: NestedArray<T>[]): T[] {
	return array.reduce<T[]>((prev, next) => {
		if (Array.isArray(next)) {
			prev.push(...flatten(next));
		} else {
			prev.push(next);
		}
		return prev;
	}, []);
}
