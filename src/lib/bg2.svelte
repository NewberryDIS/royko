<div class="bg bg-grad-01"></div>

<div class="bg bg-grad-02"></div>
<div class="bg bg-grad-03"></div>
<div class="bg bg-grad-04"></div>

<div class="bg bg-overlay"></div>

<div class="bg bg-image"></div>

<!-- <div class="bg-grad-test"></div> -->

<style>
	.bg-overlay {
		background-image: url('royko-branding-transparent-reverse-wide.png');
		z-index: 4;
	}
	.bg-image {
		background-image: url('royko-thinking.webp');
		background-image: url('wave-color.png');
		background-image: url('chicago-skyline-3.png');
		/* background-image: url('chicagosuntimes-notext-2.png'); */
		/* background-image: url('city-black.png'); */
		/* background-image: url('city-white.png'); */
		z-index: 0;
	}
	.bg {
		/* background-color: #fff; */
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;

		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 200px;
	}
	.bg-grad-01 {
		opacity: 0.001;
		z-index: 1;
		/* pinkish */
		--colr: #e2a781aa;
		background-image: radial-gradient(at top right, var(--colr), #0000);
		animation: 8s bgmove infinite;
		animation-delay: 6s;
	}
	.bg-grad-02 {
		opacity: 0.001;
		z-index: 2;
		/* brown */
		--colr: #622c07aa;
		background-image: radial-gradient(at bottom right, var(--colr), #0000);
		animation: 8s bgmove infinite;
		animation-delay: 4s;
	}
	.bg-grad-03 {
		opacity: 0.001;
		z-index: 3;
		/* blue */
		--colr: #233b5faa;
		background-image: radial-gradient(at bottom left, var(--colr), #0000);
		animation: 8s bgmove infinite;
		animation-delay: 2s;
	}
	.bg-grad-04 {
		opacity: 0.001;
		z-index: 4;
		/* green */
		--colr: #3c5413aa;
		background-image: radial-gradient(at top left, var(--colr), #0000);
		animation: 8s bgmove infinite;
	}
	@keyframes bgmove {
		0% {
			opacity: 0.001;
		}
		25% {
			opacity: 0.99;
		}
		50% {
			opacity: 0.001;
		}
		100% {
			opacity: 0.001;
		}
	}
</style>
