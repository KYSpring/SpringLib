<template>
  <div
    class="iwan_swiper"
    @mouseover="handleMouseOver()"
    @mouseleave="handleMouseLeave()"
  >
    <slot name="swiper-content" />
    <div class="iwan_swiper_nav">
      <div
        v-for="it in dotList"
        :key="it"
        class="iwan_swiper_nav_dot"
        :class="{active_dot:it === currentIndex}"
        @click="selectSlide(it)"
      />
    </div>
  </div>
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
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
</script>

<style lang="scss" scoped>
.iwan_swiper {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    overflow: hidden;
    &_nav {
        position: absolute;
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        height: 10px;
        bottom: 0px;
        &_dot {
            position: relative;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            margin: 2px;
            cursor: pointer;
        }

    }
}
.active_dot {
    background: white;
}
</style>
