<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	export let timesUp: Boolean;
	const starterNumbers = {
		starterIdle: 1 * 60 + 4,
		starterIncrement: 2,
		starterFinal: 1 * 60
	};
	let finalCountdown = starterNumbers.starterFinal;
	let finalTimer: ReturnType<typeof setTimeout>;
	let idleCountdown = starterNumbers.starterIdle;
	let idleTimer: ReturnType<typeof setTimeout>;
	let idleInterval = starterNumbers.starterIncrement * 1000;

	let showCountdown = false;

	function resetTimers(): void {
		// console.log($page.state.showArticle);
		// if ($page.state.showArticle && $page.state.showArticle !== 'none') {
		// console.log('starting timers');
		showCountdown = false;
		idleCountdown = starterNumbers.starterIdle;
		finalCountdown = starterNumbers.starterFinal;

		if (idleTimer) clearTimeout(idleTimer);
		if (finalTimer) clearTimeout(finalTimer);

		idleTimer = setInterval(() => {
			idleCountdown -= starterNumbers.starterIncrement;
			console.log('idle time remaining: ', idleCountdown);
			if (idleCountdown === finalCountdown) {
				clearTimeout(idleTimer);

				startCountdown();
			}
		}, idleInterval); // idleInterval
		// }
	}
	function startCountdown(): void {
		showCountdown = true;
		if (finalTimer) clearTimeout(finalTimer);

		finalTimer = setInterval(() => {
			finalCountdown--;
			if (finalCountdown === 0) {
				timesUp = true;
				resetTimers();
			}
		}, 1000);
	}
	$: idleCountdown < finalCountdown && browser && startCountdown();
	onMount(() => {
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
		right: 0;
		left: 0;
		/* height: 333px; */
		text-align: center;
		z-index: 100000;
		font-size: 3vh;
		background: rgba(255, 255, 255, 0.87);
		padding: 11px 33px;
		border: 1px solid rgba(0, 0, 0, 0.5);
	}
</style>
