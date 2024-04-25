<script>
	import Bg from '$lib/bg.svelte';
	import Sidebar from '$lib/sidebar.svelte';
</script>

<Bg />
<main>
	<Sidebar />
	<section></section>
</main>

<style>
	:global(body) {
		--light: #ac7ff4cc;
		--dark: #151934cc;
		margin: 0;
		padding: 0;
		/* background-image: radial-gradient(at top left, var(--light), var(--dark)); */
		height: 100dvh;
		/* animation: bgcolor 4s infinite; */
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
	/* @keyframes bgcolor {
0% {   background-image: radial-gradient(at top left, var(--light), var(--dark)) }
25% {  background-image: radial-gradient(at top right, var(--light), var(--dark)) }
50% {  background-image: radial-gradient(at bottom right, var(--light), var(--dark)) }
75% {  background-image: radial-gradient(at bottom left, var(--light), var(--dark)) }
100% { background-image: radial-gradient(at top left, var(--light), var(--dark)) }
} */
</style>
