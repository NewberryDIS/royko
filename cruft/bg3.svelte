<script>
export let color
</script>
<div class="bg bg-grad-01"></div>

<div class="bg bg-grad-02"></div>
<div class="bg bg-grad-03"></div>
<div class="bg bg-grad-04"></div>

<div class="bg bg-overlay"></div>

<div class="bg bg-image {color}"></div>

<!-- <div class="bg-grad-test"></div> -->

<style>
	.bg {
		/* background-color: #fff; */
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;

		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;

	}
	.bg-grad-01 {
		opacity: 0.001;
		z-index: 1;
		/* pinkish */
		--colr: #e2a781;
		background-image: radial-gradient(at top right, var(--colr), #0000);
		animation: 8s bgmove infinite;
		animation-delay: 6s;
	}
	.bg-grad-02 {
		opacity: 0.001;
		z-index: 2;
		/* brown */
		--colr: #622c07;
		background-image: radial-gradient(at bottom right, var(--colr), #0000);
		animation: 8s bgmove infinite;
		animation-delay: 4s;
	}
	.bg-grad-03 {
		opacity: 0.001;
		z-index: 3;
		/* blue */
		--colr: #233b5f;
		background-image: radial-gradient(at bottom left, var(--colr), #0000);
		animation: 8s bgmove infinite;
		animation-delay: 2s;
	}
	.bg-grad-04 {
		opacity: 0.001;
		z-index: 4;
		/* green */
		--colr: #3c5413;
		background-image: radial-gradient(at top left, var(--colr), #0000);
		animation: 8s bgmove infinite;
	}
	.bg-overlay {
		background-image: url('/royko-branding-transparent-wide.png');
		z-index: 6;
	}
	.bg-image {
		/* background-image: url('/royko-thinking.webp'); */
		/* background-image: url('/wave-color.png'); */
		/* background-image: url('/chicago-skyline-3.png'); */
		/* background-image: url('/chicagosuntimes-notext-2.png'); */
		z-index: 5;
	}
  .bg-image.light {
    opacity:  0.8;
		background-image: url('/city-white.png');
  }
  .bg-image.dark {
    opacity:  0.6;
		background-image: url('/city-black.png');
  }
	@keyframes bgmove {
		0% {
			opacity: 0.001;
		}
		50% {
			opacity: 0.99;
		}
		100% {
			opacity: 0.001;
		}
	}
</style>
