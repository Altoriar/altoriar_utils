/**
 * 返回数组中所有真元素组成的数组
 */

export function compact<T>(array: T[]) {
	return array.filter((item) => item);
}
