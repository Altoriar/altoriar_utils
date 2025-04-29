/* JS数组原生方法 */

/* 遍历 */
export function map<T, U>(
	array: T[],
	callback: (item: T, index: number, items: T[]) => U
): U[] {
	const arr: U[] = [];
	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		const result = callback(element, index, array);
		arr.push(result);
	}
	return arr;
}

/* 统计 */
export function reduce<T, U>(
	array: T[],
	callback: (total: U, item: T, index: number, items: T[]) => U,
	initialValue: U
): U {
	let total = initialValue;
	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		total = callback(total, element, index, array);
	}
	return total;
}

/* 过滤 */
export function filter<T>(
	array: T[],
	callback: (item: T, index: number, items: T[]) => boolean
): T[] {
	const arr: T[] = [];
	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		const condition = callback(element, index, array);
		condition && arr.push(element);
	}
	return arr;
}

/* 查找 */
export function find<T>(
	array: T[],
	callback: (item: T, index: number, items: T[]) => boolean
): T | boolean {
	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		const condition = callback(element, index, array);
		if (condition) {
			return element;
		}
	}
	return false;
}

/* 查找索引 */
export function findIndex<T>(
	array: T[],
	callback: (item: T, index: number, items: T[]) => boolean
): number | boolean {
	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		const condition = callback(element, index, array);
		if (condition) {
			return index;
		}
	}
	return false;
}

export function every<T>(
	array: T[],
	callback: (item: T, index: number, items: T[]) => boolean
): boolean {
	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		const condition = callback(element, index, array);
		// 有一个条件为 false，则返回 false
		if (!condition) {
			return false;
		}
	}
	return true;
}

export function some<T>(
	array: T[],
	callback: (item: T, index: number, array: T[]) => boolean
): boolean {
	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		const condition = callback(element, index, array);
		// 有一个条件为 true，则返回 true
		if (condition) {
			return true;
		}
	}
	return false;
}
