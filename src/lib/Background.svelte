<script lang="ts">
	import Popup from '$lib/Popup.svelte';
	import Icon from '$lib/Icon.svelte';
</script>

<div class="pointer-events-none opacity-45">
	<Popup origin={{ x: -20, y: -40 }} class="left-[2px] top-[200px]">
		<Icon name="gamepad" />
	</Popup>
	<Popup origin={{ x: -50, y: -10, deg: -90 }} class="left-[16px] top-[360px]">
		<Icon name="headset" />
	</Popup>
	<Popup origin={{ x: 20, y: -10, deg: 90 }} class="right-[8px] top-[300px]">
		<Icon name="vr" />
	</Popup>
	<Popup origin={{ x: 15, y: -30, deg: -90 }} class="right-[36px] top-[660px]">
		<Icon name="star" />
	</Popup>
</div>
