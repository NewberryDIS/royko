<script>

	// import Bg from '$lib/bg.svelte';
	import Bg from '$lib/bg3-2.svelte';
	import Bg2 from '$lib/bg2.svelte';
	import Bg3 from '$lib/bg3.svelte';
	import Bg4 from '$lib/bg4.svelte';
import { page } from '$app/stores';
import { pushState } from '$app/navigation';
import { createFlip } from '$lib/flip'

let { id } = $page.params || 'nonce'
$: ( { id } = $page.params )
// const content = [1,2,3,4,5,6,7,8]
const content = ['intro','b','c','d','e','f','g']

let layouts = [...content.map(n => {
  let layoutArray = []
  for (let l in content){
    if (n !== content[l]){
      layoutArray.push(`"${content[l]} ${n}"`)
    }
  }
  console.log(layoutArray.join(' '))
  return layoutArray.join(' ')
}), '"intro nonce" "b nonce" "c nonce" "d nonce" "e nonce" "f nonce" "g nonce"']

let layout = content.includes(id) ? layouts[content.indexOf(id)] : layouts[content.length]
$: layout = content.includes(id) ? layouts[content.indexOf(id)] : layouts[content.length]

let hideContent = true
let ready = true 
  let background = 1

async function handleClick(i, n) {
  console.log(i, n)
  if (ready && n !== $page.state.showArticle) {
    background = i
    ready = false
    layout = layouts[i]
    const flipInstance = createFlip('.box', { duration: 1000 });
    ready = await flipInstance.flip();
    pushState(`/article/${content[i]}`, {
      showArticle: content[i]
    });

  } else {
    ready = false
    layout = layouts[content.length]
    const flipInstance = createFlip('.box', { duration: 1000 });
    ready = await flipInstance.flip();
    pushState(`/article/`, {
      showArticle: 'nonce'
    });
    }

}

const borderColors = ' border: 3px solid oklch(77% 0.2 {Math.round(300 / content.length) * i});'
const colors = [ 20, 200, 230, 320 ]
//      on:click={( $page.state.showArticle || id ) === n ? () => handleClick(i, n) : ''} 
//      on:click={() => handleClick(i, n)} 
$: console.log("background", background)

</script>
{#if background === 1 }
  <Bg />
{:else if background === 2}
  <Bg2 />
{:else if background === 3}
  <Bg3 color="light" />
{:else if background === 4}
  <Bg3 color="dark" />
{:else if background === 5}
  <Bg4 />
{:else}
<Bg />
{/if}
<div class="grid" style="grid-template-areas: {layout}; --content-length: {content.length}">
  {#each content as n, i}
    <article 
      on:click={ready ? () => handleClick(i, n) : '' }
      class="box article-{i}"
      class:active={( $page.state.showArticle || id ) === n && ready}
      style="cursor: { ready? 'pointer': '' }; grid-area: {n}; "
    >
      <div class="child">
        <h2>{ content[i].length === 1 ? "article"  : ''} {content[i]}</h2>
      </div>
    </article>
  {/each}
</div>

<style>

:global(body){
  --gap: 3px;
  --mini: calc(var(--maxi) / 3);
  --mini-height: calc( var(--mini) - ( ( var(--gap) / 3 ) * 2) );
  --maxi: min( 90vh, 90vw );
  --maxi-height: calc( var(--maxi) + var(--gap) + var(--gap));
}

:global(*) {
  box-sizing: border-box;
}

.grid {
  height: 95dvh;
  width: 100%;
  /* position: relative; */
  margin: var(--gap) auto;
  display: grid;
  /* place-content: center; */
  grid-template-columns: repeat(1, 200px 1fr);
  /* grid-template-rows: repeat(var(--content-length),  1fr); */
  align-items: stretch;
justify-items: stretch;
  justify-content: stretch;
  gap: var(--gap);
}
h2{
  padding: 0;
  margin: 0;
  /* margin: 33px auto; */
}
article, .child {
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

  & .child {
  overflow: scroll;
  }
}
article:not(.active) {
  & .child {
    overflow: hidden;
  /* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ); */
  backdrop-filter: blur( 6px );
  /* border-radius: 10px; */
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  border: 1px solid rgba( 0,0,0, 0.77 );
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
  padding: 3%;
  width: min(100%, 50vw);
  height: min(100%, 77vh);
  max-height: min(100%, 77vh);
  background: rgba( 255, 255, 255, 0.6 );
  /* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ); */
  backdrop-filter: blur( 6px );
  border-radius: 6px;
  border: 1px solid rgba( 255, 255, 255, 0.77 );
}
.child h2 {

  font-family: 'Monaspace Argon Light';
  font-family: sans-serif;


}
</style>
