/**
 * 自定义 instanceof 函数
 */

export function myInstanceof<T>(obj: T, Type: Function): boolean {
	if (obj === null || obj === undefined) {
		return false;
	}

	// 得到obj的第一个圆形对象
	let proto = Object.getPrototypeOf(obj);

	while (proto) {
		// 是否是Type的原型对象
		if (proto === Type.prototype) {
			return true;
		}
		// 取出下一层的原型对象
		proto = Object.getPrototypeOf(proto);
	}

	// 没有找到，返回false
	return false;
}
