/**
 * 数组去重
 */

export function unique<T>(array: T[]): T[] {
	const result: T[] = [];

	array.forEach((item) => {
		if (!result.includes(item)) {
			result.push(item);
		}
	});

	return result;
}

/**
 * 使用 Set 去重
 */
export function uniqueBySet<T>(array: T[]): T[] {
	return Array.from(new Set(array));
}
