<script lang="ts">
	export let title: String,
		idx: Number,
		locationNOK = false;
	const grads = [5, 1, 2, 5, 0, 8, 0];
	let duration = 16;
	let delay = Math.round(duration / 8);
</script>

<div class="tile">
	<!-- {#each grads as  i, idx} -->
	<!--   <div class="color-{i} layer" style="z-index: {grads.length - idx}; opacity: 0.01; background-image: linear-gradient(to bottom, var(--color-{i}-1) , var(--color-{i}-2) ); animation-delay:  {(idx * 4) - 2}s; animation-duration: {grads.length * 4}s;"></div> -->
	<!-- {/each} -->

	<div class="tile-text">
		<h2 style="--duration: {duration}s; --delay: -{delay * idx}s;">{title}</h2>
	</div>
</div>

<style>
	.tile-text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		/* margin: 33px auto; */
		/* z-index: 1000; */
		& h2 {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;

			height: 100%;
			width: 100%;
			background-image: linear-gradient(45deg, var(--color-4), var(--color-8), var(--color-4)), url('/royko/city-with-color-sm.png');
			/* background-image: linear-gradient(45deg, var(--color-9), var(--color-4), var(--color-8), var(--color-4), var(--color-9) ), url('/royko/city-with-color-sm.png'); */
			position: relative;
			background-size: 200vh 100%;
			background-clip: text;
			-webkit-background-clip: text;
			color: transparent;
			padding: 0;
			margin: 0;
			animation: bgmove var(--duration) var(--delay) ease infinite;
		}
		/* opacity: 0.001; */
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;

		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}

	@keyframes bgmove {
		0% {
			background-position: 0 0;
		}
		100% {
			background-position: 100% 100%;
		}
	}
</style>
