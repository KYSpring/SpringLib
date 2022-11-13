import { openBlock, createElementBlock, renderSlot, createElementVNode, Fragment, renderList, normalizeClass } from 'vue';

const _hoisted_1 = { class: "iwan_swiper_nav" };
const _hoisted_2 = ["onClick"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    class: "iwan_swiper",
    onMouseover: _cache[0] || (_cache[0] = $event => (_ctx.handleMouseOver())),
    onMouseleave: _cache[1] || (_cache[1] = $event => (_ctx.handleMouseLeave()))
  }, [
    renderSlot(_ctx.$slots, "swiper-content"),
    createElementVNode("div", _hoisted_1, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.dotList, (it) => {
        return (openBlock(), createElementBlock("div", {
          key: it,
          class: normalizeClass(["iwan_swiper_nav_dot", {active_dot:it === _ctx.currentIndex}]),
          onClick: $event => (_ctx.selectSlide(it))
        }, null, 10 /* CLASS, PROPS */, _hoisted_2))
      }), 128 /* KEYED_FRAGMENT */))
    ])
  ], 32 /* HYDRATE_EVENTS */))
}

export { render };
