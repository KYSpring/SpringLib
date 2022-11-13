'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Vue__default = /*#__PURE__*/_interopDefaultLegacy(Vue);

var script$1 = Vue__default["default"].extend({
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

const _hoisted_1$1 = { class: "iwan_swiper_nav" };
const _hoisted_2 = ["onClick"];

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (Vue.openBlock(), Vue.createElementBlock("div", {
    class: "iwan_swiper",
    onMouseover: _cache[0] || (_cache[0] = $event => (_ctx.handleMouseOver())),
    onMouseleave: _cache[1] || (_cache[1] = $event => (_ctx.handleMouseLeave()))
  }, [
    Vue.renderSlot(_ctx.$slots, "swiper-content"),
    Vue.createElementVNode("div", _hoisted_1$1, [
      (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(_ctx.dotList, (it) => {
        return (Vue.openBlock(), Vue.createElementBlock("div", {
          key: it,
          class: Vue.normalizeClass(["iwan_swiper_nav_dot", {active_dot:it === _ctx.currentIndex}]),
          onClick: $event => (_ctx.selectSlide(it))
        }, null, 10 /* CLASS, PROPS */, _hoisted_2))
      }), 128 /* KEYED_FRAGMENT */))
    ])
  ], 32 /* HYDRATE_EVENTS */))
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = ".iwan_swiper[data-v-43b57aec] {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 100%;\n  overflow: hidden; }\n  .iwan_swiper[data-v-43b57aec]_nav[data-v-43b57aec] {\n    position: absolute;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    width: 100%;\n    height: 10px;\n    bottom: 0px; }\n    .iwan_swiper[data-v-43b57aec]_nav[data-v-43b57aec]_dot[data-v-43b57aec] {\n      position: relative;\n      width: 4px;\n      height: 4px;\n      border-radius: 50%;\n      background: rgba(255, 255, 255, 0.5);\n      margin: 2px;\n      cursor: pointer; }\n\n.active_dot[data-v-43b57aec] {\n  background: white; }\n";
styleInject(css_248z$1);

script$1.render = render$1;
script$1.__scopeId = "data-v-43b57aec";
script$1.__file = "spring-swiper/src/iwan-swiper.vue";

var script = Vue__default["default"].extend({
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

const _hoisted_1 = {
  key: 0,
  class: "iwan_swiper_slide"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Vue.openBlock(), Vue.createBlock(Vue.Transition, { name: "iwan_slide" }, {
    default: Vue.withCtx(() => [
      (_ctx.isShowSlide)
        ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1, [
            Vue.renderSlot(_ctx.$slots, "default")
          ]))
        : Vue.createCommentVNode("v-if", true)
    ]),
    _: 3 /* FORWARDED */
  }))
}

var css_248z = ".iwan_swiper_slide[data-v-0cac36a4] {\n  position: relative;\n  color: black;\n  width: 100%;\n  height: 100%; }\n\n.iwan_slide-enter .iwan_slide-leave-to[data-v-0cac36a4] {\n  opacity: 0; }\n\n.iwan_slide-enter-to .iwan_slide-leave[data-v-0cac36a4] {\n  opacity: 1; }\n\n.iwan_slide-enter-active[data-v-0cac36a4] {\n  animation: slide-in-0cac36a4 .5s; }\n\n@keyframes slide-in-0cac36a4 {\n  0% {\n    transform: translateX(100%); }\n  100% {\n    transform: translateX(0%); } }\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-0cac36a4";
script.__file = "spring-swiper/src/iwan-swiper-slide.vue";

script$1.install = (Vue) => {
  Vue.component(script$1.name, script$1);
};
script.install = (Vue) => {
  Vue.component(script.name, script);
};

var index = {
  IwanSwiper: script$1,
  IwanSwiperSlide: script
};

exports.SpringSwiper = index;
