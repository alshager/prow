import '../css/app.css';
// core version + navigation, pagination modules:
import Swiper from 'swiper/bundle';
// import Swiper and modules styles
import(/* webpackChunkName: "myModule", webpackPrefetch: true */ './dynamic_import').then((module) => module.default());

console.log('Hello from app.js');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

const swiper = new Swiper('.mySwiper', {
  loop: true,
  freeMode: true,
  spaceBetween: 0,
  grabCursor: true,
  slidesPerView: 6,
  loop: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  freeMode: true,
  speed: 10000,
  freeModeMomentum: false,
  spaceBetween: 10,
});

const icons = document.querySelectorAll('.icon');
icons.forEach((icon) => {
  icon.addEventListener('click', (event) => {
    icon.classList.toggle('open');
  });
});
