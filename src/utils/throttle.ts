export const dcThrottle = (fn: () => void, delay: number) => {
	let timer: number = 0

	function throttleFn() {
		if (timer) {
			clearTimeout(timer)
		}
		timer = setTimeout(() => {
			fn()
		}, delay)
	}

	return throttleFn
}
