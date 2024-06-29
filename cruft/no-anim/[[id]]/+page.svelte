<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { pushState } from '$app/navigation';
	import Bg from '$lib/bg.svelte';
	import Tile from '$lib/tile.svelte';
	import { article, content, layouts, slugs } from '$lib';

	const locationNOK = false;
	const pixPath = locationNOK ? 'blurry-pix' : 'transp-text';
	$article = $page.params.id || '';
	// let layout = content.includes(id) ? layouts[content.indexOf(id)] : layouts[content.length];
	// $: layout = content.includes(id) ? layouts[content.indexOf(id)] : layouts[content.length];
	let layout = $slugs.includes($article)
		? $layouts[$slugs.indexOf($article)]
		: $layouts[$layouts.length - 1];
	// $: console.log('layout', layout);
	// $: console.log(' article ', $article);
	let hideContent = true,
		ready = true;

	export async function handleClick(n: String, i: Number) {
		// console.log(n, i);
		if (ready && n !== $page.state.showArticle) {
			layout = $layouts[i];
			pushState(`/royko/${n}`, {
				showArticle: n
			});
		} else {
			layout = $layouts[$layouts.length - 1];
			pushState(`/royko/`, {
				showArticle: 'none'
			});
		}
	}
	// $: timesUp && handleClick($page.state.showArticle, $layouts.length);
</script>

<Bg {locationNOK} />
<div class="grid" style="grid-template-areas: {layout};">
	{#each Object.entries($content) as [k, v], i}
		<article
			on:click={ready ? () => handleClick(k, i) : ''}
			class="box article-{i}"
			class:active={($page.state.showArticle || $article) === k && ready}
			style="cursor: {ready ? 'pointer' : ''}; grid-area: {k}; "
		>
			<div class="child">
				<!-- {#if ready} -->
				<div class="text-images">
					{#if locationNOK}
						<p class="locnok">
							Due to licensing issues, the text can only <br />be viewed on site. Come visit!
						</p>
					{/if}
					{#each v.pages as page}
						<img
							src="{base}/{pixPath}/991625758805867_ord_f_548.52_r684_1999_{page}.webp"
							alt="page of text written by Mike Royko"
						/>
					{/each}
				</div>
				{#if ($page.state.showArticle || $article) !== k}<Tile title={v.title} idx={i} />{/if}
				<!-- {/if} -->
			</div>
		</article>
	{/each}
</div>

<style>
	.locnok {
		position: sticky;
		top: 0;
		font-size: 3vh;

		text-align: center;
		background: rgba(255, 255, 255, 0.87);
		padding: 11px 33px;
		z-index: 10001;
		border: 1px solid rgba(0, 0, 0, 0.5);
		/* animation: 30s text-color-shift infinite; */
	}

	:global(body) {
		overflow: hidden;
		--color-1: #3498ff;
		--color-2: #56bfff;
		--color-3: #76e1ff;
		--color-4: #357aab;
		--color-5: #1050ab;
		--color-6: #7d119c;
		--color-7: #0e1d24;
		--color-8: #182635;
    --color-9: #ad3533;
	}
	.box:not(.active) .text-images,
	.box.active .title {
		width: 1px;
		height: 1px;
		overflow: hidden;
		opacity: 0.001;
		& img {
			max-width: 1px;
			max-height: 1px;
		}
	}

	.active .text-images {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		opacity: 0.99;
		gap: 11px;
		& img {
			max-width: 90%;
			max-height: 100%;
			object-fit: contain;
		}
	}
	:global(body) {
		font-family: 'Anton', sans-serif;
		font-weight: 400;
		font-style: normal;
		--gap: 3px;
		--mini: calc(var(--maxi) / 3);
		--mini-height: calc(var(--mini) - ((var(--gap) / 3) * 2));
		--maxi: min(90vh, 90vw);
		--maxi-height: calc(var(--maxi) + var(--gap) + var(--gap));
	}

	:global(*) {
		box-sizing: border-box;
	}

	.grid {
		height: 96dvh;
		width: 100%;
		/* position: fixed; */
		/* top: 2dvh; */
		/* right: 0; */
		/* bottom: 2dvh; */
		/* left: 0; */
		margin: var(--gap) auto;
		display: grid;
		/* place-content: center; */
		grid-template-columns: repeat(1, 200px 1fr);
		grid-template-rows: repeat(8, 1fr);
		gap: var(--gap);
		z-index: 1000;
	}
	article,
	.child {
		transition: all 0.5s;
	}
	.flexi {
		display: flex;
		flex-direction: column;
		justify-content: stretch;
		align-items: stretch;
		/* background: #333; */
	}
	article.active {
		max-height: 95dvh;
		& .child {
			overflow: scroll;
		}
	}
	article:not(.active) {
		& .child {
			overflow: hidden;
			/* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ); */
			backdrop-filter: blur(6px);
			/* border-radius: 10px; */
			border: 1px solid rgba(255, 255, 255, 0.18);
			border: 1px solid rgba(0, 0, 0, 0.87);
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: cover;
		}
	}
	article {
		padding: var(--gap);
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		z-index: 1000;
	}
	.child {
		position: relative;
		padding: 3%;
		width: min(100%, 50vw);
		height: min(100%, 77vh);
		max-height: min(100%, 77vh);
		background: rgba(255, 255, 255, 0.87);
		/* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ); */
		backdrop-filter: blur(6px);
		border-radius: 6px;
		border: 1px solid rgba(255, 255, 255, 1);
	}
</style>
