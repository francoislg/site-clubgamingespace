<script lang="ts" context="module">
	export type IconName = 'external' | 'map' | 'gamepad' | 'vr' | 'email' | 'star' | 'headset';
</script>

<script lang="ts">
	let { name, class: classes } = $props<{
		name: IconName;
		class?: string;
	}>();

	/** @type {Map<IconName, string>} */
	const map = {
		external: 'fa-solid fa-arrow-up-right-from-square',
		map: 'fa-regular fa-map',
		gamepad: 'fa-solid fa-gamepad',
		vr: 'fa-solid fa-vr-cardboard',
		email: 'fa-regular fa-envelope',
		star: 'fa-regular fa-star',
		headset: 'fa-solid fa-headset'
	};
</script>

<i class="{map[name]} {classes}"></i>
