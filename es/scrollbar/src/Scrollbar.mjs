import { h, defineComponent, ref } from 'vue';
import { NScrollbar } from "../../_internal/index.mjs";
import { useTheme } from "../../_mixins/index.mjs";
export const scrollbarProps = Object.assign(Object.assign({}, useTheme.props), {
  trigger: String,
  xScrollable: Boolean,
  onScroll: Function,
  size: Number
});
const Scrollbar = defineComponent({
  name: 'Scrollbar',
  props: scrollbarProps,
  setup() {
    const scrollbarInstRef = ref(null);
    const exposedMethods = {
      scrollTo: (...args) => {
        var _a;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        (_a = scrollbarInstRef.value) === null || _a === void 0 ? void 0 : _a.scrollTo(args[0], args[1]);
      },
      scrollBy: (...args) => {
        var _a;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        (_a = scrollbarInstRef.value) === null || _a === void 0 ? void 0 : _a.scrollBy(args[0], args[1]);
      }
    };
    return Object.assign(Object.assign({}, exposedMethods), {
      scrollbarInstRef
    });
  },
  render() {
    return h(NScrollbar, Object.assign({
      ref: "scrollbarInstRef"
    }, this.$props), this.$slots);
  }
});
export default Scrollbar;