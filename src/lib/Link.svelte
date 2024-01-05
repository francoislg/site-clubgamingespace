<script lang="ts">
	import type { Snippet } from 'svelte';
	import TextWithInlineIcon from './TextWithInlineIcon.svelte';
	import type { IconName } from './Icon.svelte';

	let {
		href,
		class: classes,
		children,
		icon = 'external'
	} = $props<{
		href: string;
		class?: string;
		icon?: IconName;
		children: Snippet;
	}>();
</script>

<a {href} class="{classes} text-green-900 hover:text-green-700" target="_blank">
	<TextWithInlineIcon {icon}>
		<span class="underline">{@render children()}</span>
	</TextWithInlineIcon>
</a>
