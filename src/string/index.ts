/**
 * 字符串反转
 */
export function reverseString(str: string): string {
	return str.split('').reverse().join('');
}

/**
 * 判断字符串是否是回文
 */
export function palindrome(str: string): boolean {
	return str === reverseString(str);
}

/**
 * 截取字符串，如果超出指定长度展示...  否则原样返回
 */
export function truncate(str: string, num: number): string {
	return str.length > num ? str.substring(0, num) + '...' : str;
}
