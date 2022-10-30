import '../css/app.css';
// core version + navigation, pagination modules:
import Swiper from 'swiper/bundle';
// import Swiper and modules styles
import(/* webpackChunkName: "myModule", webpackPrefetch: true */ './dynamic_import').then((module) => module.default());

console.log('Hello from app.js');

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    '@0.00': {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    '@0.75': {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    '@1.00': {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    '@1.50': {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
});
