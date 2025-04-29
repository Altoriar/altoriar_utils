/* 手写apply */

export function apply<T extends (...args: any[]) => any>(
	fn: T,
	obj: object | null | undefined,
	args: Parameters<T>
): ReturnType<T> {
	// 处理obj为null和undefined的情况
	if (obj === null || obj === undefined) {
		obj = window;
	}
	// 给obj添加一个方法：temFn：this
	// 使用类型断言
	const tempObj = obj as Record<string, any>;
	tempObj.temFn = fn;
	// 调用obj的temFn方法，传入args参数，得到返回值
	const result = tempObj.temFn(...args);
	// 删除obj上的temFn方法
	delete tempObj.temFn;
	// 返回方法的返回值
	return result;
}
