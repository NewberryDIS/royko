<script>
export let color = ''
const colors = ['dark', 'dark-inv', 'light', 'light-inv']
function swap(){
  const curColor = colors.indexOf(color)
  const newColor = curColor + 1 > colors.length ? 0 : curColor + 1
  console.log(curColor)
  color = colors[newColor]
}
const grads = [ 5, 1, 2, 5, 0, 8 , 0 ]
const directions = ['', 'left center', 'left top', 'center', 'right top', 'right center', 'right bottom', 'bottom', 'left bottom']
$: console.log("color", color)
</script>
<!-- <h1 style="z-index: 100000; position: fixed; top: 0; left: 0;">{color}</h1> -->
<div class="bg bg-overlay" on:click={swap}></div>
<div class="bg bg-image {color}" ></div>
{#each grads as  i, idx}
  <div class="color-{i} test-bg" style="z-index: {grads.length - idx}; opacity: 0.01; background-image: linear-gradient(to bottom, var(--color-{i}-1) , var(--color-{i}-2) ); animation-delay:  {(idx * 4) - 2}s; animation-duration: {grads.length * 4}s;"></div>
{/each}

<style>
:global(body){

--color-0-1: #222647;
--color-0-2: #7d119c;

--color-1-1: #3498ff;
--color-1-2: #c092ff;
--color-2-1: #56bfff;
--color-2-2: #96bcff;
--color-3-1: #76e1ff;
--color-3-2: #73e0ff;
--color-4-1: #357aab;
--color-4-2: #7b77b1;
--color-5-1: #1050ab;
--color-5-2: #be4ab1;
--color-6-1: #7d119c;
--color-6-2: #c81c64;
--color-7-1: #0e1d24;
--color-7-2: #181d38;
--color-8-1: #182635;
--color-8-2: #222647;
}
.test-bg {
    opacity: 0.001;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;

animation-name: bgfade;
animation-duration: 20s;
animation-timing-function: ease;
animation-iteration-count: infinite;
animation-direction: normal;
animation-fill-mode: none;
animation-play-state: running;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
}

@keyframes bgfade2 {
0% { opacity: 0.99;}
10% { opacity: 0.99;}
30% { opacity: 0.001;}
90% { opacity: 0.001;}
100% { opacity: 0.99;}
}
@keyframes bgfade {
0% { opacity: 0.001;}
10% { opacity: 0.99;}
20% { opacity: 0.99;}
40% { opacity: 0.001;}
100% { opacity: 0.001;}
}
	.bg {
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;

		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;

	}
	.bg-overlay {
		background-image: url('/royko-branding-transparent-wide.png');
  /* filter: invert(1); */
		background-image: url('/royko-branding-transparent-reverse-wide.png');
		z-index: 11;
	}
	.bg-image {
  opacity: 0.7;
		/* background-image: url('/chicago-skyline-3.png'); */
		/* background-image: url('/city-white.png'); */
	/* background-image: url('/city-black-clear-sky.png'); */
	background-image: url('/city-with-color.png');
  /* filter: grayscale(1); */
		z-index: 10;
	}
.bg-image::before {
  content: "";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
backdrop-filter: grayscale(1);
animation-name: bgmove;
  animation-duration: 20s;
animation-timing-function: ease;
animation-iteration-count: infinite;
animation-direction: normal;
animation-fill-mode: none;
animation-play-state: running;
}
.light {
	background-image: url('/chicago-above-white.png');
	background-image: url('/city-white.png');
}
.light-inv {
	background-image: url('/chicago-above-white.png');
	background-image: url('/city-white-clear-sky.png');
  /* filter: invert(1); */
}
.dark {
	background-image: url('/chicago-above-black.png');
	background-image: url('/city-black.png');
}
.dark-inv {
	background-image: url('/chicago-above-black.png');
	background-image: url('/city-black-clear-sky.png');
  /* filter: invert(1); */
}
@keyframes desat {
0% { filter: grayscale(1); }
75% { filter: grayscale(0); }
100% { filter: grayscale(1); }
}
	@keyframes bgmove {
		0% {
			opacity: 0.99;
		}
		75% {
			opacity: 0.001;
		}
		100% {
			opacity: 0.99;
		}
	}
</style>
