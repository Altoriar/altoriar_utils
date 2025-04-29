/**
 * 删除数组中的前N个元素
 */

export function drop<T>(array: T[], count: number) {
	if (count > array.length) {
		return [];
	}
	return array.slice(count);
}

/**
 * 删除数组中的后N个元素
 */
export function dropRight<T>(array: T[], count: number) {
	if (count > array.length) {
		return [];
	}
	return array.slice(0, array.length - count);
}
