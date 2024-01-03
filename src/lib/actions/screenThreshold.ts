import { browser } from '$app/environment';
import type { Action } from 'svelte/action';

interface BelowScreenThresholdOptions {
	setIsBelow: (value: boolean) => void;
	/** Should be better 0 and 1, defaults to .5, as in "half the screen" */
	ratio?: number;
}

export const screenThreshold: Action<HTMLElement, BelowScreenThresholdOptions> = (
	node,
	options
) => {
	let isBelow = false;

	function onScroll() {
		const { top } = node.getBoundingClientRect();

		isBelow = top < window.innerHeight * (typeof options?.ratio === 'number' ? options.ratio : 0.5);

		update();
	}

	function update() {
		options?.setIsBelow(isBelow);
	}

	window.addEventListener('scroll', onScroll);
	window.addEventListener('resize', onScroll);

	if (browser) {
		onScroll();
	}

	return {
		update() {
			onScroll();
		},
		destroy() {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
		}
	};
};
