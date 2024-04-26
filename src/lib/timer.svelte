<script lang="ts">
	import { pushState } from '$app/navigation';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	export let layout: String;
	const starterNumbers = {
		starterIdle: 15,
		starterIncrement: 5,
		starterFinal: 10
	};
	let finalCountdown = starterNumbers.starterFinal;
	let finalTimer: ReturnType<typeof setTimeout>;
	let idleCountdown = starterNumbers.starterIdle;
	let idleTimer: ReturnType<typeof setTimeout>;
	let idleInterval = starterNumbers.starterIncrement * 1000;

	let showCountdown = false;

	function resetTimers(): void {
		showCountdown = false;
		idleCountdown = starterNumbers.starterIdle;
		finalCountdown = starterNumbers.starterFinal;

		if (idleTimer) clearTimeout(idleTimer);
		if (finalTimer) clearTimeout(finalTimer);

		idleTimer = setInterval(() => {
			idleCountdown -= starterNumbers.starterIncrement;
			if (idleCountdown === finalCountdown) {
				clearTimeout(idleTimer);

				startCountdown();
			}
		}, idleInterval); // idleInterval
	}
	function startCountdown(): void {
		showCountdown = true;
		if (finalTimer) clearTimeout(finalTimer);

		finalTimer = setInterval(() => {
			finalCountdown--;
			if (finalCountdown === 0) {
				layout = 'new layout';
				resetTimers();
			}
		}, 1000);
	}
	$: idleCountdown < finalCountdown && browser && startCountdown();
	onMount(() => {
		console.log('go');
		resetTimers();
	});
</script>

<svelte:window
	on:scroll={resetTimers}
	on:mousemove={resetTimers}
	on:keypress={resetTimers}
	on:touchstart={resetTimers}
	on:touchmove={resetTimers}
	on:touchend={resetTimers}
/>
{#if showCountdown}
	<p>
		Due to an extended period of inactivity, this page will return to the home screen in {finalCountdown}
		seconds.
	</p>
{/if}

<style>
	p {
		position: fixed;
		top: 0;
		width: 50vw;
		margin: auto;
		font-size: 3vh;
	}
</style>
