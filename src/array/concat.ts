/**
 * 将N个数组或值与当前的数组进行合并产生一个新的数组，原始数组不会改变
 */

export function concat<T>(array: T[], ...values: (T | T[])[]): T[] {
	const arr = [...array];

	values.forEach((value) => {
		if (Array.isArray(value)) {
			arr.push(...value);
		} else {
			arr.push(value);
		}
	});

	return arr;
}
