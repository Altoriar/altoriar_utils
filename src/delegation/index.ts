const container = document.getElementById('container');

container?.addEventListener('click', function (e) {
	const target = e.target as HTMLElement;

	if (target.tagName === 'BUTTON') {
		const id = target.getAttribute('data-id');
		console.log(`Button ${id} clicked`);
	}
});
