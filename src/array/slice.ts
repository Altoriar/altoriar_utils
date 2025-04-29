/**
 * 返回一个由 begin 和 end 觉得的原数组的浅拷贝，原始数组不会发生改变
 */

export function slice<T>(array: T[], begin: number, end: number): T[] {
	const arr: T[] = [];

	if (array.length === 0) {
		return [];
	}

	begin = begin || 0;
	end = end || array.length;

	if (begin < 0) {
		begin = 0;
	}

	if (end > array.length) {
		end = array.length;
	}

	if (begin > end) {
		let temp = begin;
		begin = end;
		end = temp;
	}

	for (let index = begin; index < end; index++) {
		arr.push(array[index]);
	}

	return arr;
}
