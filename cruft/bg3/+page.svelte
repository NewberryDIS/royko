<script>
	import Bg from '$lib/bg3.svelte';
	import Sidebar from '$lib/sidebar.svelte';
</script>

<Bg color="dark"/>
<main>
	<Sidebar />
	<section></section>
</main>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		height: 100dvh;
	}
	main {
		font-family: sans-serif;
		height: 100%;
		position: relative;
		z-index: 2;
		display: flex;
		justify-content: stretch;
		align-items: stretch;
		background: rgba(255, 255, 255, 0.5);
	}
</style>
