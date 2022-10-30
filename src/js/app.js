import '../css/app.css';
// core version + navigation, pagination modules:
import Swiper from 'swiper/bundle';
// import Swiper and modules styles
import(/* webpackChunkName: "myModule", webpackPrefetch: true */ './dynamic_import').then((module) => module.default());

console.log('Hello from app.js');

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
