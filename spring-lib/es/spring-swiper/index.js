import './src/iwan-swiper.vue.js';
import script from './src/iwan-swiper.vue_vue_type_script_lang.vue.js';
export { default } from './src/iwan-swiper.vue_vue_type_script_lang.vue.js';

script.install = (Vue) => {
  Vue.component(script.name, script);
};
