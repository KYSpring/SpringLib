import Vue from 'vue';

var script = Vue.extend({
  name: 'IwanSwiper',
  provide() {
    // 使用函数形式可访问this
    return {
      getCurrentId: this.getCurrentId,
    };
  },
  props: {
    slidesNum: {
      type: Number,
      required: true,
    },
    slideDuration: {
      type: Number,
      default: 3000,
    },
  },
  data() {
    return {
      currentIndex: 0,
      slideTimer: null,
    };
  },
  computed: {
    dotList() {
      const res = [];
      for (let i = 0;i < this.slidesNum;i++) {
        res.push(i);
      }
      return res;
    },
  },
  mounted() {
    this.setAnimationTimer();
  },
  beforeDestroy() {
    // 销毁dom时清除定时器
    this.clearAnimationTimer();
  },
  methods: {
    getCurrentId() {
      return this.currentIndex;
    },
    selectSlide(it) {
      this.currentIndex = it;
    },
    setAnimationTimer() {
      if (!this.slideTimer) {
        this.slideTimer = setInterval(() => {
          if (this.currentIndex >= this.slidesNum - 1) {
            this.currentIndex = 0;
            return;
          }
          this.currentIndex += 1;
        }, this.slideDuration);
      }
    },
    clearAnimationTimer() {
      clearInterval(this.slideTimer);
      this.slideTimer = null;
    },
    handleMouseOver() {
      if (this.slideTimer) {
        this.clearAnimationTimer();
      }
    },
    handleMouseLeave() {
      this.setAnimationTimer();
    },
  },
});

export { script as default };
