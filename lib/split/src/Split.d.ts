import { type PropType } from 'vue';
import { type ExtractPublicPropTypes } from '../../_utils';
export declare const splitProps: {
    readonly direction: {
        readonly type: PropType<"horizontal" | "vertical">;
        readonly default: "horizontal";
    };
    readonly resizeTriggerSize: {
        readonly type: NumberConstructor;
        readonly default: 3;
    };
    readonly disabled: BooleanConstructor;
    readonly defaultSize: {
        readonly type: NumberConstructor;
        readonly default: 0.5;
    };
    readonly min: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly onDragStart: PropType<(e: Event) => void>;
    readonly onDragMove: PropType<(e: Event) => void>;
    readonly onDragEnd: PropType<(e: Event) => void>;
    readonly theme: PropType<import("../../_mixins").Theme<"Split", {
        resizableTriggerColorHover: string;
        resizableTriggerColor: string;
    }, any>>;
    readonly themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Split", {
        resizableTriggerColorHover: string;
        resizableTriggerColor: string;
    }, any>>>;
    readonly builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Split", {
        resizableTriggerColorHover: string;
        resizableTriggerColor: string;
    }, any>>>;
};
export type SplitProps = ExtractPublicPropTypes<typeof splitProps>;
declare const _default: import("vue").DefineComponent<{
    readonly direction: {
        readonly type: PropType<"horizontal" | "vertical">;
        readonly default: "horizontal";
    };
    readonly resizeTriggerSize: {
        readonly type: NumberConstructor;
        readonly default: 3;
    };
    readonly disabled: BooleanConstructor;
    readonly defaultSize: {
        readonly type: NumberConstructor;
        readonly default: 0.5;
    };
    readonly min: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly onDragStart: PropType<(e: Event) => void>;
    readonly onDragMove: PropType<(e: Event) => void>;
    readonly onDragEnd: PropType<(e: Event) => void>;
    readonly theme: PropType<import("../../_mixins").Theme<"Split", {
        resizableTriggerColorHover: string;
        resizableTriggerColor: string;
    }, any>>;
    readonly themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Split", {
        resizableTriggerColorHover: string;
        resizableTriggerColor: string;
    }, any>>>;
    readonly builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Split", {
        resizableTriggerColorHover: string;
        resizableTriggerColor: string;
    }, any>>>;
}, {
    cssVars: import("vue").ComputedRef<{
        '--n-bezier': string;
        '--n-resize-trigger-color': string;
        '--n-resize-trigger-color-hover': string;
    }> | undefined;
    resizeTriggerElRef: import("vue").Ref<HTMLElement | null>;
    isDragging: import("vue").Ref<boolean>;
    mergedClsPrefix: import("vue").Ref<string>;
    resizeTriggerWrapperStyle: import("vue").ComputedRef<{
        width: string;
        height: string;
        cursor: string;
    }>;
    resizeTriggerStyle: import("vue").ComputedRef<{
        width: string;
        height: string;
    }>;
    handleMouseDown: (e: MouseEvent) => void;
    firstPaneStyle: import("vue").ComputedRef<{
        flex: string;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly direction: {
        readonly type: PropType<"horizontal" | "vertical">;
        readonly default: "horizontal";
    };
    readonly resizeTriggerSize: {
        readonly type: NumberConstructor;
        readonly default: 3;
    };
    readonly disabled: BooleanConstructor;
    readonly defaultSize: {
        readonly type: NumberConstructor;
        readonly default: 0.5;
    };
    readonly min: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly onDragStart: PropType<(e: Event) => void>;
    readonly onDragMove: PropType<(e: Event) => void>;
    readonly onDragEnd: PropType<(e: Event) => void>;
    readonly theme: PropType<import("../../_mixins").Theme<"Split", {
        resizableTriggerColorHover: string;
        resizableTriggerColor: string;
    }, any>>;
    readonly themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Split", {
        resizableTriggerColorHover: string;
        resizableTriggerColor: string;
    }, any>>>;
    readonly builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Split", {
        resizableTriggerColorHover: string;
        resizableTriggerColor: string;
    }, any>>>;
}>>, {
    readonly direction: "horizontal" | "vertical";
    readonly disabled: boolean;
    readonly max: number;
    readonly min: number;
    readonly defaultSize: number;
    readonly resizeTriggerSize: number;
}, {}>;
export default _default;
