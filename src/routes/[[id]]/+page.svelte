<script lang="ts">
import { onMount } from 'svelte';
import { base } from '$app/paths';
import { page } from '$app/stores';
import { pushState } from '$app/navigation';
import Bg from '$lib/bg.svelte';
import { content } from '$lib';
console.log($page.params.id)
let activeSlug = $state($page.params.id) 
$inspect( activeSlug)
// if ($page.params.id !== ""){
//   activeSlug = $page.params.id
// }
 function nav(slug){
  if (slug !== activeSlug) {
    pushState(`/royko/${slug}`);
    activeSlug = slug
  } else {
    pushState(`/royko`);
    activeSlug = undefined
  }
} 

	const locationNOK = false;
	const pixPath = locationNOK ? 'blurry-pix' : 'transp-text';

	let duration = 16;
	let delay = Math.round(duration / 8);
</script>

<Bg />
<div class="wrapper">
  <div class="menu">
    {#each Object.entries(content) as [slug, v], idx}
      <div class="menu-tile-wrapper"  style="--duration: {duration}s; --delay: -{delay * idx}s;">
      <button class="menu-tile" on:click={()=>nav(slug)}>
        {v.title}
      </button>
      </div>
    {/each}
  </div>
  <div class="content">
    {#if activeSlug}
      <div class="gallery">
        {#each content[activeSlug].pages as p}
						<img
							src="{base}/{pixPath}/991625758805867_ord_f_548.52_r684_1999_{p}.webp"
							alt="page of text written by Mike Royko"
						/>
{/each}
      </div>
{/if}
  </div>
</div>

<style>
.wrapper {
  top: 0;
  lefT: 0;
  width: 100dvw;
  height: 100dvh;
  display:flex;
  position: relative;
  z-index: 1000;
}
.menu {
  /* height: 100%; */
  padding: 1rem;
  /* flex:1; */
  flex-basis: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
}
.content {
  flex: 4;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 11px;
}
.menu-tile-wrapper {
  flex: 1;
    cursor: pointer;
    box-sizing: border-box;
  border: 1px solid var(--the-red);
  border-radius: 3px;
  background: #fff;
  /* border: 5px solid oklch(47.5%, 45.5%, 24.667%); */
  /* border-width: 10px; */
  /* border-style: solid; */

  width: 100%;
  transition: 200ms;
  &:hover  {
    background: color-mix( in oklab, var(--the-red) 5%, #fff) ;
    & button {
      background-clip: border-box;
      color: #fff;
    }
  }
}

.menu-tile {
  border: 0;
  font-family: 'Anton', sans-serif;
  font-size: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(45deg,var(--color-4),var(--color-8),var(--color-4));
    position: relative;
    background-size: 200vh 100%;
    background-clip: text;
    color: transparent;
    padding: 0;
    margin: 0;
    animation: bgmove var(--duration) var(--delay) ease infinite;
  /* position: relative; */
}
.content {
  margin-block: 76px;
}
.gallery {
  overflow: scroll;
  padding: 33px;
  background: #fff;
  border: 1px solid var(--the-red);
  border-radius: 3px;
  width: min(600px, 90vw);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  & img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
}
:global(body){
    --the-red: oklab(47.5% 41.25% 19%);
  --lab: lab(37.215%, 46.136%, 29.357%);
  --okch: oklch(47.5%, 45.5%, 24.667%);
  margin: 0;
  padding: 0;
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

	@keyframes bgmove {
		0% {
			background-position: 0 0;
		}
		100% {
			background-position: 100% 100%;
		}
	}
</style>
