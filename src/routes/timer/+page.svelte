<script>
	import Timer from '$lib/timer.svelte';
	let layout = 'afaf';
	$: console.log(layout);
</script>

<Timer bind:layout />

<style>
	:global(body) {
		background: #333;
		color: #ccc;
	}
</style>
