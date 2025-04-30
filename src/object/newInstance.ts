/**
 * 自定义new工具函数
 */

// 使原型对象是空的Object对象那个，且constructor属性为Fn
/*   
    obj.__proto__ = {}
    obj.__proto__.constructor = Fn   
    问题：创建的每一个实例对象的原型对象不是同一个（实际要求是同一个）

*/

export function newInstance<T extends object>(
	Fn: new (...args: any[]) => T,
	...args: T[]
): object {
	// 创建空对象
	const obj = {};

	// 设置原型链
	Object.setPrototypeOf(obj, Fn.prototype);

	// 执行构造函数Fn，且改变this指向
	const result = Fn.apply(obj, args);

	// 判断构造函数的返回值是否为对象，如果是对象则返回该对象，否则返回obj
	return typeof result === 'object' && result! == null ? result : obj;
}
