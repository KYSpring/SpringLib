import { openBlock, createBlock, Transition, withCtx, createElementBlock, renderSlot, createCommentVNode } from 'vue';

const _hoisted_1 = {
  key: 0,
  class: "iwan_swiper_slide"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(Transition, { name: "iwan_slide" }, {
    default: withCtx(() => [
      (_ctx.isShowSlide)
        ? (openBlock(), createElementBlock("div", _hoisted_1, [
            renderSlot(_ctx.$slots, "default")
          ]))
        : createCommentVNode("v-if", true)
    ]),
    _: 3 /* FORWARDED */
  }))
}

export { render };
