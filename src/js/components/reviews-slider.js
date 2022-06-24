import Swiper, { Navigation, Thumbs, Autoplay } from 'swiper';
import _vars from "../_vars";

Swiper.use([Navigation, Thumbs, Autoplay]);
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
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    461: {
      slidesPerView: 'auto',
    }
  },
  autoplay: {
    delay: 10000,
  },
});
