export function call<T extends (...args: any[]) => any>(
	fn: T,
	obj: object | null | undefined,
	...args: Parameters<T>
): ReturnType<T> {
	if (obj === null || obj === undefined) {
		obj = window;
	}
	const tempObj = obj as Record<string, any>;
	tempObj.temFn = fn;
	const result = tempObj.temFn(...args);
	delete tempObj.temFn;
	return result;
}
