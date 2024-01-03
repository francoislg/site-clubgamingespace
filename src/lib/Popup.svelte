<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fly } from 'svelte/transition';

	let {
		class: classes,
		origin,
		children
	} = $props<{
		class: string;
		origin: {
			x: number;
			y: number;
			deg?: number;
		};
		children: Snippet;
	}>();

	let show = $state(false);
	$effect(() => {
		show = true;
	});
</script>

{#if show}
	<div
		style:--origin-x="{origin.x}px"
		style:--origin-y="{origin.y}px"
		style:--deg="{origin.deg || 180}deg"
		class="absolute animation fa-2xl text-green-800 {classes} z-0"
	>
		{@render children()}
	</div>
{/if}

<style>
	@keyframes straightLine {
		0% {
			opacity: 0;
			transform: rotate(var(--deg)) translate3D(var(--origin-x), var(--origin-y), 0);
		}
		50% {
			opacity: 1;
			transform: translate3D(var(--origin-x), var(--origin-y), 0);
		}
		100% {
			transform: translate3D(0px, 0px, 0);
		}
	}

	.animation {
		animation: straightLine 1s cubic-bezier(0.3, 0.27, 0.07, 1.64);
	}
</style>
