export const PubSub = {
	id: 1,
	callback: {
		// pay: {
		//     token_1: fn,
		//     token_2: fn,
		// }
	},

	// subscribe(channel, callback) {
	// 	let token = `token_${this.id++}`;

	// 	if (this.callback[channel]) {
	// 		this.callback[channel][token] = callback;
	// 	} else {
	// 		this.callback[channel] = {
	// 			[token]: callback,
	// 		};
	// 	}
	// 	return token;
	// },

	// publish(channel, data) {
	// 	if (this.callback[channel]) {
	// 		Object.values(this.callback[channel]).forEach((fn) => {
	// 			fn(data);
	// 		});
	// 	}
	// },

	// unsubscribe(flag) {
	// 	if (flag === undefined) {
	// 		this.callback = {};
	// 	} else if (flag.indexof('taken_') !== -1) {
	// 		const callbackObj = Object.values(this.callback).find((obj) =>
	// 			obj.hasOwnProperty(flag)
	// 		);
	// 		delete callbackObj[flag];
	// 	} else {
	// 		delete this.callback[flag];
	// 	}
	// },
};
