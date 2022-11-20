import Vue from 'vue';

var script = Vue.extend({
  name: 'IwanSwiperSlide',
  inject: ['getCurrentId'],
  props: {
    // 支持消费方决定当前轮播卡片的执行顺序
    slideId: {
      type: Number | String,
      required: true,
    },
  },
  data() {
    return {
      getCurrentId: this.getCurrentId,
    };
  },
  computed: {
    isShowSlide() {
      return this.getCurrentId() === Number(this.slideId);
    },
  },
});

export { script as default };
