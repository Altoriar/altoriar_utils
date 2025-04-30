/**
 * 合并对象，如果不存在key则添加，如果存在，则合并其value
 */

export function mergeObject(...objs: any[]): Record<string, any> {
	const result: Record<string, any> = {};

	objs.forEach((obj) => {
		Object.keys(obj).forEach((key) => {
			const value = obj[key];

			if (result.hasOwnProperty(key)) {
				result[key] = []?.concat(result[key], value);
			} else {
				result[key] = value;
			}
		});
	});

	return result;
}
