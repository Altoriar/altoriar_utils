export function mySetInterval(
	fn: Function,
	delay: number
): {
	cancel: () => void;
} {
	let timerId: ReturnType<typeof setTimeout>;

	const loop = () => {
		timerId = setTimeout(() => {
			fn();
			loop();
		}, delay);
	};

	loop();

	return {
		cancel: () => {
			clearTimeout(timerId);
		},
	};
}
