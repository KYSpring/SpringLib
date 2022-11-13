import IwanSwiper from './src/iwan-swiper.vue';
import IwanSwiperSlide from './src/iwan-swiper-slide.vue'

IwanSwiper.install = (Vue) => {
  Vue.component(IwanSwiper.name, IwanSwiper);
};
IwanSwiperSlide.install = (Vue) => {
  Vue.component(IwanSwiperSlide.name, IwanSwiperSlide);
};

export default {
  IwanSwiper,
  IwanSwiperSlide
};
