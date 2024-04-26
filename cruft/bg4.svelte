<div class="bg-wrapper">
<!-- <img id="day" src="/chicago-day.png" alt="" /> -->
<!-- <img id="night" src="/chicago-night-darkened.png" alt="" /> -->
<!-- <img id="overlay" src="/royko-branding-transparent-reverse-wide.png" alt="" /> -->
<div class="img" id="day" src="/chicago-day.png" alt="" />
<div class="img" id="night" src="/chicago-night-darkened.png" alt="" />
<div class="img" id="overlay" src="/royko-branding-transparent-reverse-wide.png" alt="" />
</div>
<style>

.bg-wrapper {
  position: fixed;
  
}
.bg-wrapper, .img {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100vw;

}
.img:not(#overlay) {
animation-name: fade;
animation-duration: 20s;
animation-timing-function: linear;
animation-iteration-count: infinite;
animation-direction: normal;
animation-fill-mode: none;
animation-play-state: running;
}
.img {
  position: absolute;
  object-fit: cover;
  background-size: cover;
  background-position: center;
  object-position: center;
}
#night {
  background-image: url("/chicago-night-darkened.png");
  opacity: 0.999;
  animation-delay: -10s;
}
#day {
background-image: url("/chicago-day.png");
  opacity: 0.001;
  animation-delay: 0s;
  z-index: 100;
}
#overlay {
background-image: url("/royko-branding-transparent-reverse-wide.png");
  opacity: 1;
z-index: 999;
}
@keyframes fade {
0% { opacity: 0.001;}
50% { opacity: 0.99;}
100% { opacity: 0.001;}
}
</style>
