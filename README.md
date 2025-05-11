### 实现防抖和节流
防抖：在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时
节流：在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则不执行回调


### 实现一个拖拽
```ts
const box = document.getElementById('box');
let dragging = false;
let postion: number[] = [];

box?.addEventListener('mousedown', function (e) {
	console.log('start');
	dragging = true;
	postion = [e.clientX, e.clientY];
});

box?.addEventListener('mousemove', function (e) {
	if (!dragging || !box) return null;
	console.log('drapping');

	const x = e.clientX;
	const y = e.clientY;
	const deltaX = x - postion[0];
	const deltaY = y - postion[1];
	const left = parseFloat(box.style.left || '0');
	const top = parseFloat(box.style.top || '0');

	box.style.left = `${left + deltaX}px`;
	box.style.top = `${top + deltaY}px`;
	postion = [x, y];
});

document.addEventListener('mouseup', function () {
	console.log('end');
	dragging = false;
});

```

### 预加载和懒加载
预加载：提前加载图片，当用户需要查看时可以直接从本地缓存中获取
懒加载：延迟加载图片甚至不加载，主要目的是服务器性能优化，减少请求数


### 实现懒加载
```ts
const images = document.querySelectorAll('img[data-src]');

const observer = new IntersectionObserver((entries, obs) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			const img = entry.target as HTMLImageElement;
			const realSrc = img.getAttribute('data-src');
			if (realSrc) {
				img.src = realSrc;
				img.removeAttribute('data-src');
			}
			obs.unobserve(img); // 加载后停止观察
		}
	});
});

images.forEach((img) => {
	observer.observe(img);
});

```

### 事件流
HTML中的js交互事通过事件驱动来实现的，比如鼠标的点击事件click，页面的滚动事件scroll等，可以向文档或者文档中的元素添加事件监听来预定事件。
事件流分为，捕获阶段，目标阶段，冒泡阶段
事件捕获：从文档根节点开始，向目标节点传播的过程
事件目标：事件的实际目标
事件冒泡：从目标节点开始，向文档根节点传播的过程
addEventListener：方法可以添加事件监听，接受三个参数，事件类型，事件处理函数，是否在捕获阶段触发
```ts
document.addEventListener('click', (e) => {}, false)
```

### 事件委托
事件委托是一种利用事件冒泡的机制，将事件监听添加到父元素上，通过事件对象的target属性来判断事件的目标元素，从而实现对多个子元素的统一处理。

### mouseover 和 mouseenter 的区别
mouseover: 当戍边移入元素或其他子元素都会触发，所以有一个重复触发，冒泡的过程，对应的移出事件是mouseout
mouseenter：当鼠标移出元素本身（不包含元素的子元素）会触发事件，也就是不会冒泡，对应的移出事件是mouseleave

### js的new操作符做了哪些事情
new操作符新建一个空的对象，这个对象原型只想构造函数的prototype属性，执行构造函数后返回这个对象

### 改变函数内部this指针的指向区别（call、apply、bind）
通过 call 和 apply 改变函数的 this 指向，他们两个的区别是 call 传递的是参数列表，而 apply 传递的是参数数组
通过 bind 改变 this 的指向，会返回一个新的函数，这个函数不会立刻执行

### 实现call、apply、bind

### js的各种位置，clientHeight、offsetHeight、scrollHeight、clientWidth、offsetWidth、scrollWidth的区别
clientHeight: 元素的可视高度，不包括滚动条和边框
offsetHeight: 元素的高度，包括滚动条和边框
scrollHeight: 所有区域的高度，包含因为滚动而隐藏的部分
clientWidth: 元素的可视宽度，不包括滚动条和边框
offsetWidth: 元素的宽度，包括滚动条和边框
scrollWidth: 所有区域的宽度，包含因为滚动而隐藏的部分

### 用 setTimeout 实现 setInterval

### http和https的基本概念
http：超文本传输协议，是互联网应用中最为广泛的一种网络概念，是一个客户端和服务器请求和应答的标准，用于从WWW服务器传输超文本到本地浏览器的传输歇息，他可以使浏览器更佳搞笑，使用网络传输减少。
https：是以安全为目标的http通道，简单讲是http的安全版本，在http下加入了ssl层，https的安全基础是ssl，因此加密的详细信息就需要ssl。

### http和https的区别
http传输的数据都是未加密的，也就是明文的，网景公司设置了ssl协议来对http协议传输进行加密处理，简单的说https和ssl协议构建的可进行加密传输和身份认证的网络协议，比http协议的安全性更高，

### tcp三次握手
首先是客户端发送请求给服务器，要求建立连接
第一次握手，服务器只确认自己可以接收客户端发送的报文段
第二次握手，客户端可以确认服务器收到了自己发送的报文段，并确认自己可以接收服务器的发送的报文段
第三次握手，服务器确认客户端收到了自己发送的报文段

### tcp四次挥手
首先是客户端发送请求给服务器，要求断开连接
第一次挥手（FIN）：客户端发送一个FIN报文，表示他要关闭连接，此时客户端不再发送数据，但可以接收
第二次挥手（ACK）：服务器收到FIN后，回复一个ACK报文，表示自己收到客户端断开请求，此时服务器仍可以继续发送数据给客户端
第三次挥手（FIN）：服务器准备关闭连接，发送一个FIN报文，此时服务器不再发送数据，准备断开
第四次挥手（ACK）：客户端收到服务器发送的FIN后，发送一个ACK确认，连接彻底关闭，此时客户端会进入 TIME_WAIT 等待一段时间后真正关闭
