<script>
import Bg from '$lib/bg.svelte';
import Sidebar from '$lib/sidebar.svelte';
</script>

<Bg />
<main>
  <Sidebar />
  <section>
    <article>
      <p>
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint
        ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur
        officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate
        dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea
        nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat
        officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
        officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
        Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
      </p>
      <p>
        <img src="image.png" alt="image" />
      </p>
      <p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
      <p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
      <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, consequatur. Tempora sunt
      quis at quos impedit vero rem. Iusto sed accusamus, similique ipsum nesciunt quo reprehenderit
      officia laudantium soluta accusantium?
    </article>
  </section>
</main>

<style>
:global(body) {
  --light: #ac7ff4cc;
  --dark: #151934cc;
  margin: 0;
  padding: 0;
  /* background-image: radial-gradient(at top left, var(--light), var(--dark)); */
  height: 100dvh;
  /* animation: bgcolor 4s infinite; */
}
img {
  width: 100%;
  object-fit: contain;
}
main {
  font-family: sans-serif;
  height: 100%;
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  backdrop-filter: blur(16px);
}
section {
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 100;
}
article {
  width: 50vw;
  height: 77vh;
  padding: 3vw;
  overflow: scroll;
  background: rgba( 255, 255, 255, 0.6 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 6px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
}
</style>
