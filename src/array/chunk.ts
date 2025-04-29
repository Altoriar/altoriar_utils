/**
 * 将数组拆分成多个size长度的区块，每个区块数组成小数组，整体组成一个二位数组
 */

export function chunk<T>(array: T[], size: number): T[][] {
	const bigArr: T[][] = [];
	let smallArr: T[] = [];

	if (size === 0) {
		return bigArr;
	}
	if (size > array.length) {
		size = array.length;
	}
	array.forEach((item) => {
		smallArr.push(item);

		// 当smallArr的长度等于size时，将smallArr添加到bigArr中，并重置smallArr
		if (smallArr.length === size) {
			bigArr.push(smallArr);
			smallArr = [];
		}
	});

	return bigArr;
}
