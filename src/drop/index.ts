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
