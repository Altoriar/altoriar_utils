/**
 * 将所有不在指定数组中的数组元素合并到指定的数组当中
 */

export function merge<T>(array: T[], ...arrs: T[][]) {
	const newArray = [...array];

	if (arrs.length === 0) {
		return newArray;
	}

	arrs.forEach((arr) => {
		arr.forEach((item) => {
			if (!newArray.includes(item)) {
				newArray.push(item);
			}
		});
	});

	return newArray;
}
