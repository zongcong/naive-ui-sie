import { h, defineComponent, provide } from 'vue';
import { useRtl } from "../../_mixins/use-rtl.mjs";
import { useConfig, useStyle } from "../../_mixins/index.mjs";
import { buttonGroupInjectionKey } from "./context.mjs";
import style from "./styles/index.cssr.mjs";
export const buttonGroupProps = {
  size: {
    type: String,
    default: undefined
  },
  vertical: Boolean
};
export default defineComponent({
  name: 'ButtonGroup',
  props: buttonGroupProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      mergedRtlRef
    } = useConfig(props);
    useStyle('-button-group', style, mergedClsPrefixRef);
    provide(buttonGroupInjectionKey, props);
    const rtlEnabledRef = useRtl('ButtonGroup', mergedRtlRef, mergedClsPrefixRef);
    return {
      rtlEnabled: rtlEnabledRef,
      mergedClsPrefix: mergedClsPrefixRef
    };
  },
  render() {
    const {
      mergedClsPrefix
    } = this;
    return h("div", {
      class: [`${mergedClsPrefix}-button-group`, this.rtlEnabled && `${mergedClsPrefix}-button-group--rtl`, this.vertical && `${mergedClsPrefix}-button-group--vertical`],
      role: "group"
    }, this.$slots);
  }
});