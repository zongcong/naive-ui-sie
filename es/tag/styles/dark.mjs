import commonVariables from "./_common.mjs";
import { changeColor, scaleColor } from 'seemly';
import { commonDark } from "../../_styles/common/index.mjs";
const tagDark = {
  name: 'Tag',
  common: commonDark,
  self(vars) {
    const {
      textColor2,
      primaryColorHover,
      primaryColorPressed,
      primaryColor,
      infoColor,
      successColor,
      warningColor,
      errorColor,
      baseColor,
      borderColor,
      tagColor,
      opacityDisabled,
      closeIconColor,
      closeIconColorHover,
      closeIconColorPressed,
      closeColorHover,
      closeColorPressed,
      borderRadiusSmall: borderRadius,
      fontSizeMini,
      fontSizeTiny,
      fontSizeSmall,
      fontSizeMedium,
      heightMini,
      heightTiny,
      heightSmall,
      heightMedium,
      buttonColor2Hover,
      buttonColor2Pressed,
      fontWeightStrong
    } = vars;
    return Object.assign(Object.assign({}, commonVariables), {
      closeBorderRadius: borderRadius,
      heightTiny: heightMini,
      heightSmall: heightTiny,
      heightMedium: heightSmall,
      heightLarge: heightMedium,
      borderRadius,
      opacityDisabled,
      fontSizeTiny: fontSizeMini,
      fontSizeSmall: fontSizeTiny,
      fontSizeMedium: fontSizeSmall,
      fontSizeLarge: fontSizeMedium,
      fontWeightStrong,
      // checked
      textColorCheckable: textColor2,
      textColorHoverCheckable: textColor2,
      textColorPressedCheckable: textColor2,
      textColorChecked: baseColor,
      colorCheckable: '#0000',
      colorHoverCheckable: buttonColor2Hover,
      colorPressedCheckable: buttonColor2Pressed,
      colorChecked: primaryColor,
      colorCheckedHover: primaryColorHover,
      colorCheckedPressed: primaryColorPressed,
      // default
      border: `1px solid ${borderColor}`,
      textColor: textColor2,
      color: tagColor,
      colorBordered: '#0000',
      closeIconColor,
      closeIconColorHover,
      closeIconColorPressed,
      closeColorHover,
      closeColorPressed,
      borderPrimary: `1px solid ${changeColor(primaryColor, {
        alpha: 0.3
      })}`,
      textColorPrimary: primaryColor,
      colorPrimary: changeColor(primaryColor, {
        alpha: 0.16
      }),
      colorBorderedPrimary: '#0000',
      closeIconColorPrimary: scaleColor(primaryColor, {
        lightness: 0.7
      }),
      closeIconColorHoverPrimary: scaleColor(primaryColor, {
        lightness: 0.7
      }),
      closeIconColorPressedPrimary: scaleColor(primaryColor, {
        lightness: 0.7
      }),
      closeColorHoverPrimary: changeColor(primaryColor, {
        alpha: 0.16
      }),
      closeColorPressedPrimary: changeColor(primaryColor, {
        alpha: 0.12
      }),
      borderInfo: `1px solid ${changeColor(infoColor, {
        alpha: 0.3
      })}`,
      textColorInfo: infoColor,
      colorInfo: changeColor(infoColor, {
        alpha: 0.16
      }),
      colorBorderedInfo: '#0000',
      closeIconColorInfo: scaleColor(infoColor, {
        alpha: 0.7
      }),
      closeIconColorHoverInfo: scaleColor(infoColor, {
        alpha: 0.7
      }),
      closeIconColorPressedInfo: scaleColor(infoColor, {
        alpha: 0.7
      }),
      closeColorHoverInfo: changeColor(infoColor, {
        alpha: 0.16
      }),
      closeColorPressedInfo: changeColor(infoColor, {
        alpha: 0.12
      }),
      borderSuccess: `1px solid ${changeColor(successColor, {
        alpha: 0.3
      })}`,
      textColorSuccess: successColor,
      colorSuccess: changeColor(successColor, {
        alpha: 0.16
      }),
      colorBorderedSuccess: '#0000',
      closeIconColorSuccess: scaleColor(successColor, {
        alpha: 0.7
      }),
      closeIconColorHoverSuccess: scaleColor(successColor, {
        alpha: 0.7
      }),
      closeIconColorPressedSuccess: scaleColor(successColor, {
        alpha: 0.7
      }),
      closeColorHoverSuccess: changeColor(successColor, {
        alpha: 0.16
      }),
      closeColorPressedSuccess: changeColor(successColor, {
        alpha: 0.12
      }),
      borderWarning: `1px solid ${changeColor(warningColor, {
        alpha: 0.3
      })}`,
      textColorWarning: warningColor,
      colorWarning: changeColor(warningColor, {
        alpha: 0.16
      }),
      colorBorderedWarning: '#0000',
      closeIconColorWarning: scaleColor(warningColor, {
        alpha: 0.7
      }),
      closeIconColorHoverWarning: scaleColor(warningColor, {
        alpha: 0.7
      }),
      closeIconColorPressedWarning: scaleColor(warningColor, {
        alpha: 0.7
      }),
      closeColorHoverWarning: changeColor(warningColor, {
        alpha: 0.16
      }),
      closeColorPressedWarning: changeColor(warningColor, {
        alpha: 0.11
      }),
      borderError: `1px solid ${changeColor(errorColor, {
        alpha: 0.3
      })}`,
      textColorError: errorColor,
      colorError: changeColor(errorColor, {
        alpha: 0.16
      }),
      colorBorderedError: '#0000',
      closeIconColorError: scaleColor(errorColor, {
        alpha: 0.7
      }),
      closeIconColorHoverError: scaleColor(errorColor, {
        alpha: 0.7
      }),
      closeIconColorPressedError: scaleColor(errorColor, {
        alpha: 0.7
      }),
      closeColorHoverError: changeColor(errorColor, {
        alpha: 0.16
      }),
      closeColorPressedError: changeColor(errorColor, {
        alpha: 0.12
      })
    });
  }
};
export default tagDark;