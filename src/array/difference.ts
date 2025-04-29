/**
 * 得到当前数组中所有不在指定数组中的元素所组成的数组（不改变原数组）
 */

export function difference<T>(array: T[], values: T[]): T[] {
	if (array.length === 0) {
		return [];
	}

	if (values.length === 0) {
		return [...array];
	}

	return array.filter((item) => !values.includes(item));
}

/**
 * 扩展：处理在后续多个数组中的情况
 */

export function differences<T>(array: T[], ...arrs: T[][]): T[] {
	if (array.length === 0) {
		return [];
	}

	return array.filter((item) => {
		let result = true;
		for (let index = 0; index < arrs.length; index++) {
			const arr = arrs[index];
			if (arr.includes(item)) {
				result = false;
				break;
			}
		}
		return result;
	});
}
