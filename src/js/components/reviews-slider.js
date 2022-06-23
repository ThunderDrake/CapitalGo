import Swiper, { Navigation, Thumbs } from 'swiper';
import _vars from "../_vars";

Swiper.use([Navigation, Thumbs]);
const swiperBullet = new Swiper(_vars.reviewSliderPagination, {
  slidesPerView: 'auto',
  spaceBetween: 10,
  freeMode: true,
  watchSlidesProgress: true,
})
const swiper = new Swiper(_vars.reviewSlider, {
  slidesPerView: 'auto',
  spaceBetween: -55,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: swiperBullet,
  },
});
