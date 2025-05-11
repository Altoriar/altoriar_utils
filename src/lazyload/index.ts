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
