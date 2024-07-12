import { type PropType, type CSSProperties, type VNode } from 'vue';
import { type FollowerPlacement } from 'vueuc';
import type { PopoverTrigger } from './interface';
export declare const popoverBodyProps: {
    to: {
        type: PropType<string | boolean | HTMLElement>;
        default: undefined;
    };
    show: BooleanConstructor;
    trigger: PropType<PopoverTrigger>;
    showArrow: BooleanConstructor;
    delay: NumberConstructor;
    duration: NumberConstructor;
    raw: BooleanConstructor;
    arrowPointToCenter: BooleanConstructor;
    arrowClass: StringConstructor;
    arrowStyle: PropType<string | CSSProperties>;
    arrowWrapperClass: StringConstructor;
    arrowWrapperStyle: PropType<string | CSSProperties>;
    displayDirective: PropType<"show" | "if">;
    x: NumberConstructor;
    y: NumberConstructor;
    flip: BooleanConstructor;
    overlap: BooleanConstructor;
    placement: PropType<FollowerPlacement>;
    width: PropType<number | "trigger">;
    keepAliveOnHover: BooleanConstructor;
    scrollable: BooleanConstructor;
    contentClass: StringConstructor;
    contentStyle: PropType<string | CSSProperties>;
    headerClass: StringConstructor;
    headerStyle: PropType<string | CSSProperties>;
    footerClass: StringConstructor;
    footerStyle: PropType<string | CSSProperties>;
    internalDeactivateImmediately: BooleanConstructor;
    animated: BooleanConstructor;
    onClickoutside: PropType<(e: MouseEvent) => void>;
    internalTrapFocus: BooleanConstructor;
    internalOnAfterLeave: PropType<() => void>;
    minWidth: NumberConstructor;
    maxWidth: NumberConstructor;
    theme: PropType<import("../../_mixins").Theme<"Popover", {
        fontSize: string;
        borderRadius: string;
        color: string;
        dividerColor: string;
        textColor: string;
        boxShadow: string;
        space: string;
        spaceArrow: string;
        arrowOffset: string;
        arrowOffsetVertical: string;
        arrowHeight: string;
        padding: string;
    }, any>>;
    themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Popover", {
        fontSize: string;
        borderRadius: string;
        color: string;
        dividerColor: string;
        textColor: string;
        boxShadow: string;
        space: string;
        spaceArrow: string;
        arrowOffset: string;
        arrowOffsetVertical: string;
        arrowHeight: string;
        padding: string;
    }, any>>>;
    builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Popover", {
        fontSize: string;
        borderRadius: string;
        color: string;
        dividerColor: string;
        textColor: string;
        boxShadow: string;
        space: string;
        spaceArrow: string;
        arrowOffset: string;
        arrowOffsetVertical: string;
        arrowHeight: string;
        padding: string;
    }, any>>>;
};
interface RenderArrowProps {
    arrowClass: string | undefined;
    arrowStyle: string | CSSProperties | undefined;
    arrowWrapperClass: string | undefined;
    arrowWrapperStyle: string | CSSProperties | undefined;
    clsPrefix: string;
}
export declare const renderArrow: ({ arrowClass, arrowStyle, arrowWrapperClass, arrowWrapperStyle, clsPrefix }: RenderArrowProps) => VNode | null;
declare const _default: import("vue").DefineComponent<{
    to: {
        type: PropType<string | boolean | HTMLElement>;
        default: undefined;
    };
    show: BooleanConstructor;
    trigger: PropType<PopoverTrigger>;
    showArrow: BooleanConstructor;
    delay: NumberConstructor;
    duration: NumberConstructor;
    raw: BooleanConstructor;
    arrowPointToCenter: BooleanConstructor;
    arrowClass: StringConstructor;
    arrowStyle: PropType<string | CSSProperties>;
    arrowWrapperClass: StringConstructor;
    arrowWrapperStyle: PropType<string | CSSProperties>;
    displayDirective: PropType<"show" | "if">;
    x: NumberConstructor;
    y: NumberConstructor;
    flip: BooleanConstructor;
    overlap: BooleanConstructor;
    placement: PropType<FollowerPlacement>;
    width: PropType<number | "trigger">;
    keepAliveOnHover: BooleanConstructor;
    scrollable: BooleanConstructor;
    contentClass: StringConstructor;
    contentStyle: PropType<string | CSSProperties>;
    headerClass: StringConstructor;
    headerStyle: PropType<string | CSSProperties>;
    footerClass: StringConstructor;
    footerStyle: PropType<string | CSSProperties>;
    internalDeactivateImmediately: BooleanConstructor;
    animated: BooleanConstructor;
    onClickoutside: PropType<(e: MouseEvent) => void>;
    internalTrapFocus: BooleanConstructor;
    internalOnAfterLeave: PropType<() => void>;
    minWidth: NumberConstructor;
    maxWidth: NumberConstructor;
    theme: PropType<import("../../_mixins").Theme<"Popover", {
        fontSize: string;
        borderRadius: string;
        color: string;
        dividerColor: string;
        textColor: string;
        boxShadow: string;
        space: string;
        spaceArrow: string;
        arrowOffset: string;
        arrowOffsetVertical: string;
        arrowHeight: string;
        padding: string;
    }, any>>;
    themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Popover", {
        fontSize: string;
        borderRadius: string;
        color: string;
        dividerColor: string;
        textColor: string;
        boxShadow: string;
        space: string;
        spaceArrow: string;
        arrowOffset: string;
        arrowOffsetVertical: string;
        arrowHeight: string;
        padding: string;
    }, any>>>;
    builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Popover", {
        fontSize: string;
        borderRadius: string;
        color: string;
        dividerColor: string;
        textColor: string;
        boxShadow: string;
        space: string;
        spaceArrow: string;
        arrowOffset: string;
        arrowOffsetVertical: string;
        arrowHeight: string;
        padding: string;
    }, any>>>;
}, {
    displayed: import("vue").Ref<boolean>;
    namespace: import("vue").ComputedRef<string | undefined>;
    isMounted: import("vue").Ref<boolean>;
    zIndex: import("vue").Ref<number | undefined>;
    followerRef: import("vue").Ref<{
        syncPosition: () => void;
    } | null>;
    adjustedTo: import("vue").ComputedRef<string | HTMLElement>;
    followerEnabled: import("vue").Ref<boolean>;
    renderContentNode: () => VNode | null;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    to: {
        type: PropType<string | boolean | HTMLElement>;
        default: undefined;
    };
    show: BooleanConstructor;
    trigger: PropType<PopoverTrigger>;
    showArrow: BooleanConstructor;
    delay: NumberConstructor;
    duration: NumberConstructor;
    raw: BooleanConstructor;
    arrowPointToCenter: BooleanConstructor;
    arrowClass: StringConstructor;
    arrowStyle: PropType<string | CSSProperties>;
    arrowWrapperClass: StringConstructor;
    arrowWrapperStyle: PropType<string | CSSProperties>;
    displayDirective: PropType<"show" | "if">;
    x: NumberConstructor;
    y: NumberConstructor;
    flip: BooleanConstructor;
    overlap: BooleanConstructor;
    placement: PropType<FollowerPlacement>;
    width: PropType<number | "trigger">;
    keepAliveOnHover: BooleanConstructor;
    scrollable: BooleanConstructor;
    contentClass: StringConstructor;
    contentStyle: PropType<string | CSSProperties>;
    headerClass: StringConstructor;
    headerStyle: PropType<string | CSSProperties>;
    footerClass: StringConstructor;
    footerStyle: PropType<string | CSSProperties>;
    internalDeactivateImmediately: BooleanConstructor;
    animated: BooleanConstructor;
    onClickoutside: PropType<(e: MouseEvent) => void>;
    internalTrapFocus: BooleanConstructor;
    internalOnAfterLeave: PropType<() => void>;
    minWidth: NumberConstructor;
    maxWidth: NumberConstructor;
    theme: PropType<import("../../_mixins").Theme<"Popover", {
        fontSize: string;
        borderRadius: string;
        color: string;
        dividerColor: string;
        textColor: string;
        boxShadow: string;
        space: string;
        spaceArrow: string;
        arrowOffset: string;
        arrowOffsetVertical: string;
        arrowHeight: string;
        padding: string;
    }, any>>;
    themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Popover", {
        fontSize: string;
        borderRadius: string;
        color: string;
        dividerColor: string;
        textColor: string;
        boxShadow: string;
        space: string;
        spaceArrow: string;
        arrowOffset: string;
        arrowOffsetVertical: string;
        arrowHeight: string;
        padding: string;
    }, any>>>;
    builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Popover", {
        fontSize: string;
        borderRadius: string;
        color: string;
        dividerColor: string;
        textColor: string;
        boxShadow: string;
        space: string;
        spaceArrow: string;
        arrowOffset: string;
        arrowOffsetVertical: string;
        arrowHeight: string;
        padding: string;
    }, any>>>;
}>>, {
    show: boolean;
    flip: boolean;
    to: string | boolean | HTMLElement;
    raw: boolean;
    overlap: boolean;
    scrollable: boolean;
    showArrow: boolean;
    arrowPointToCenter: boolean;
    keepAliveOnHover: boolean;
    internalDeactivateImmediately: boolean;
    animated: boolean;
    internalTrapFocus: boolean;
}, {}>;
export default _default;
