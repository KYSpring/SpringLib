<template>
  <transition name="iwan_slide">
    <div
      v-if="isShowSlide"
      class="iwan_swiper_slide"
    >
      <slot />
    </div>
  </transition>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'IwanSwiperSlide',
  inject: ['getCurrentId'],
  props: {
    // 支持消费方决定当前轮播卡片的执行顺序
    slideId: {
      type: Number,
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
      return this.getCurrentId() === this.slideId;
    },
  },
});
</script>

  <style lang="scss" scoped>
  .iwan_swiper_slide {
    position: relative;
    color: black;
    width: 100%;
    height: 100%;
  }
  .iwan_slide-enter .iwan_slide-leave-to{
    opacity: 0;
  }
  .iwan_slide-enter-to .iwan_slide-leave{
    opacity: 1;
  }
  .iwan_slide-enter-active {
    animation: slide-in .5s;
  }
  @keyframes slide-in {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
  </style>
