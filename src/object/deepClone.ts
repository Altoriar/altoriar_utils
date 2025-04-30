/**
 * 深克隆
 */

export function deepClone<T>(target: T, map = new Map()): T {
	// 只处理数组和对象结构
	if (
		Array.isArray(target) ||
		(target !== null && typeof target === 'object')
	) {
		// map中存在对应的克隆对象，直接返回其结果
		let cloneTarget = map.get(target);
		if (cloneTarget) {
			return cloneTarget; // 不要对同一个对象进行多次克隆
		}

		// 创建克隆数组/对象
		if (Array.isArray(target)) {
			cloneTarget = [];
			// 保存克隆对象到map容器中
			map.set(target, cloneTarget);
			target.forEach((item, index) => {
				cloneTarget[index] = deepClone(item, map);
			});
		} else {
			cloneTarget = {};
			// 保存克隆对象到map容器中
			map.set(target, cloneTarget);
			for (const key in target) {
				// 只查找自身而不用遍历原型链
				if (Object.hasOwnProperty.call(target, key)) {
					const value = target[key];
					cloneTarget[key] = deepClone(value, map);
				}
			}
		}

		return cloneTarget;
	}

	return target;
}
