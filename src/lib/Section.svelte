<script lang="ts">
	import type { Snippet } from 'svelte';
	import { sHeaders } from './styles/headers';
	import { sSectionContainer } from './styles/container';

	let { class: c, children, image, title } = $props<{ class?: string, children: Snippet; image?: Snippet; title: Snippet }>();
</script>

<div
	class="flex flex-col justify-center {sSectionContainer()} w-full {c}"
>
	<h3 class="{sHeaders.h3()} p-4 text-center">
		{@render title()}
	</h3>
	<div class="flex h-full w-full justify-between flex-wrap gap-8 sm:flex-nowrap">
		<div class="flex flex-col gap-2 w-full flex-1">
			{@render children()}
		</div>
		{#if image}
			<div class="flex justify-center items-center shrink-0 w-full sm:w-auto">
				{@render image()}
			</div>
		{/if}
	</div>
</div>