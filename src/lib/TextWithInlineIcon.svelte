<script lang="ts">
	import type { Snippet } from 'svelte';
	import Icon, { type IconName } from './Icon.svelte';

	let { children, icon } = $props<{
		icon: IconName;
		children: Snippet;
	}>();
</script>

<!-- &#65279; is like &nbsp; but doesn't have any width, which allows us to "stick" the last word to the provided icon -->
<span class="inline">
	{@render children()}<span class="inline whitespace-nowrap">&#65279; <Icon name={icon} /></span>
</span>
