import { type PropType } from 'vue';
import type { ExtractPublicPropTypes } from '../../_utils';
export declare const qrCodeProps: {
    readonly value: StringConstructor;
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "#000";
    };
    readonly backgroundColor: {
        readonly type: StringConstructor;
        readonly default: "#FFF";
    };
    readonly iconSrc: StringConstructor;
    readonly iconSize: {
        readonly type: NumberConstructor;
        readonly default: 40;
    };
    readonly iconBackgroundColor: {
        readonly type: StringConstructor;
        readonly default: "#FFF";
    };
    readonly iconBorderRadius: {
        readonly type: NumberConstructor;
        readonly default: 4;
    };
    readonly size: {
        readonly type: NumberConstructor;
        readonly default: 100;
    };
    readonly padding: {
        readonly type: PropType<string | number>;
        readonly default: 12;
    };
    readonly errorCorrectionLevel: {
        readonly type: StringConstructor;
        readonly default: "M";
    };
    readonly theme: PropType<import("../../_mixins").Theme<"QrCode", {
        borderRadius: string;
    }, any>>;
    readonly themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"QrCode", {
        borderRadius: string;
    }, any>>>;
    readonly builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"QrCode", {
        borderRadius: string;
    }, any>>>;
};
export type QrCodeProps = ExtractPublicPropTypes<typeof qrCodeProps>;
declare const _default: import("vue").DefineComponent<{
    readonly value: StringConstructor;
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "#000";
    };
    readonly backgroundColor: {
        readonly type: StringConstructor;
        readonly default: "#FFF";
    };
    readonly iconSrc: StringConstructor;
    readonly iconSize: {
        readonly type: NumberConstructor;
        readonly default: 40;
    };
    readonly iconBackgroundColor: {
        readonly type: StringConstructor;
        readonly default: "#FFF";
    };
    readonly iconBorderRadius: {
        readonly type: NumberConstructor;
        readonly default: 4;
    };
    readonly size: {
        readonly type: NumberConstructor;
        readonly default: 100;
    };
    readonly padding: {
        readonly type: PropType<string | number>;
        readonly default: 12;
    };
    readonly errorCorrectionLevel: {
        readonly type: StringConstructor;
        readonly default: "M";
    };
    readonly theme: PropType<import("../../_mixins").Theme<"QrCode", {
        borderRadius: string;
    }, any>>;
    readonly themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"QrCode", {
        borderRadius: string;
    }, any>>>;
    readonly builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"QrCode", {
        borderRadius: string;
    }, any>>>;
}, {
    canvasRef: import("vue").Ref<HTMLCanvasElement | undefined>;
    mergedClsPrefix: import("vue").Ref<string>;
    cssVars: import("vue").ComputedRef<{
        '--n-border-radius': string;
    }> | undefined;
    themeClass: import("vue").Ref<string> | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly value: StringConstructor;
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "#000";
    };
    readonly backgroundColor: {
        readonly type: StringConstructor;
        readonly default: "#FFF";
    };
    readonly iconSrc: StringConstructor;
    readonly iconSize: {
        readonly type: NumberConstructor;
        readonly default: 40;
    };
    readonly iconBackgroundColor: {
        readonly type: StringConstructor;
        readonly default: "#FFF";
    };
    readonly iconBorderRadius: {
        readonly type: NumberConstructor;
        readonly default: 4;
    };
    readonly size: {
        readonly type: NumberConstructor;
        readonly default: 100;
    };
    readonly padding: {
        readonly type: PropType<string | number>;
        readonly default: 12;
    };
    readonly errorCorrectionLevel: {
        readonly type: StringConstructor;
        readonly default: "M";
    };
    readonly theme: PropType<import("../../_mixins").Theme<"QrCode", {
        borderRadius: string;
    }, any>>;
    readonly themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"QrCode", {
        borderRadius: string;
    }, any>>>;
    readonly builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"QrCode", {
        borderRadius: string;
    }, any>>>;
}>>, {
    readonly size: number;
    readonly color: string;
    readonly backgroundColor: string;
    readonly padding: string | number;
    readonly iconSize: number;
    readonly iconBackgroundColor: string;
    readonly iconBorderRadius: number;
    readonly errorCorrectionLevel: string;
}, {}>;
export default _default;
