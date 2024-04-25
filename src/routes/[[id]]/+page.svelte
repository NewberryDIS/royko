<script>

	import Bg from '$lib/bg3-2.svelte';
import { page } from '$app/stores';
import { pushState } from '$app/navigation';
import { createFlip } from '$lib/flip'

let { id } = $page.params || 'cover'
$: ( { id } = $page.params )
// const content = [1,2,3,4,5,6,7,8]
const content = ['cover','millions-in-his-firing-squad','lets-all-drink-to-billy-goat','daley-always-a-quota-man','daley-embodied-chicago','give-washington-a-break','system-a-big-0','it-was-wrigley']
const contentt = {
  "cover": {title: "Mike Royko", pages:  ["cover"] },
"millions-in-his-firing-squad": {title: 'Millions in His Firing Squad', pages:  ["pg_027","pg_028","pg_029", ]},
"lets-all-drink-to-billy-goat": {title: 'Lets All Drink to Billy Goat', pages:  ["pg_057","pg_058","pg_059", ]},
"daley-always-a-quota-man":     {title: 'Daley Always a Quota Man', pages:  ["pg_093","pg_094","pg_095", ]},
"daley-embodied-chicago":       {title: 'Daley Embodied Chicago', pages:  ["pg_102","pg_103","pg_104","pg_105", ]},
"give-washington-a-break":      {title: 'Give Washington a Break', pages:  ["pg_166","pg_167","pg_168","pg_169", ]},
"system-a-big-0":               {title: 'System a Big 0', pages:  ["pg_182","pg_183","pg_184", ]},
"it-was-wrigley":               {title: 'It Was Wrigley', pages:  ["pg_273","pg_274","pg_275" ]}
  }
let layouts = [...content.map(n => {
  let layoutArray = []
  for (let l in content){
    if (n !== content[l]){
      layoutArray.push(`"${content[l]} ${n}"`)
    }
  }
  // console.log(layoutArray.join(' '))
  return layoutArray.join(' ')
})]

let layout = content.includes(id) ? layouts[content.indexOf(id)] : layouts[0]
$: layout = content.includes(id) ? layouts[content.indexOf(id)] : layouts[0]
$: console.log(contentt)
let hideContent = true, ready = true

async function handleClick(i, n) {
  console.log(i, n)
  if (ready && n !== $page.state.showArticle) {
    ready = false
    layout = layouts[i]
    const flipInstance = createFlip('.box', { duration: 1000 });
    ready = await flipInstance.flip();
    pushState(`/${content[i]}`, {
      showArticle: content[i]
    });

  } else if (n !== 'cover') {
    ready = false
    layout = layouts[0]
    const flipInstance = createFlip('.box', { duration: 1000 });
    ready = await flipInstance.flip();
    pushState(`/`, {
      showArticle: 'cover'
    });
    } else {
      console.log("pathname",$page.url.pathname)
    }

}

const borderColors = ' border: 3px solid oklch(77% 0.2 {Math.round(300 / content.length) * i});'
const colors = [ 20, 200, 230, 320 ]
//      on:click={( $page.state.showArticle || id ) === n ? () => handleClick(i, n) : ''} 
//      on:click={() => handleClick(i, n)} 

</script>

<Bg />

<div class="grid" style="grid-template-areas: {layout}; --content-length: {content.length}">

  {#each content as n, i}
    <article 
      on:click={ready ? () => handleClick(i, n) : '' }
      class="box article-{i}"
      class:active={( $page.state.showArticle || id ) === n && ready}
      style="cursor: { ready? 'pointer': '' }; grid-area: {n}; "
    >
      <div class="child">
        <div class="text-images">
          {#each contentt[n].pages as page}
          <img src="/transp-text/991625758805867_ord_f_548.52_r684_1999_{page}.webp" alt="page of text written by Mike Royko" />
          {/each}
        </div>
        <h2 class="title">{contentt[n].title }</h2>
      </div>
    </article>
  {/each}

</div>

<style>
:global(body){
  overflow: hidden;
}
.box:not(.active) .text-images, .box.active .title {
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
:global(body){
  font-family: "Anton", sans-serif;
  font-weight: 400;
  font-style: normal;
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
  /* grid-template-rows: repeat(var(--content-length),  1fr); */
  gap: var(--gap);
  z-index: 1000;
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
max-height: 95dvh;
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
  border: 1px solid rgba( 0,0,0, 0.87 );
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
  padding: 3%;
  width: min(100%, 50vw);
  height: min(100%, 77vh);
  max-height: min(100%, 77vh);
  background: rgba( 255, 255, 255, 0.87 );
  /* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ); */
  backdrop-filter: blur( 6px );
  border-radius: 6px;
  border: 1px solid rgba( 255, 255, 255, 1 );
}
.child h2 {

  font-family: 'Monaspace Argon Light';
  font-family: sans-serif;


}
</style>
