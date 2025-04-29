/**
 * 删除数组中指定的元素，并返回删除的元素
 */

export function pull<T>(array: T[], ...values: T[]) {
	const result = [];

	for (let index = 0; index < array.length; index++) {
		const item = array[index];
		// 如果在要删除的数组中存在
		if (values.includes(item)) {
			// 删除数组元素
			array.splice(index, 1);
			// 将删除元素保存起来
			result.push(item);
		}
	}

	return result;
}

/**
 *删除数组中指定的元素，并返回删除元素，与pull的区别是指定要删除的元素需要传递数组
 */
export function pullAll<T>(array: T[], values: T[]) {
	return pull(array, ...values);
}
