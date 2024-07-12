import sizeVariables from "./_common.mjs";
import { commonDark } from "../../_styles/common/index.mjs";
const timelineDark = {
  name: 'Timeline',
  common: commonDark,
  self(vars) {
    const {
      textColor3,
      infoColorSuppl,
      errorColorSuppl,
      successColorSuppl,
      warningColorSuppl,
      textColor1,
      textColor2,
      railColor,
      fontWeightStrong,
      fontSize
    } = vars;
    return Object.assign(Object.assign({}, sizeVariables), {
      contentFontSize: fontSize,
      titleFontWeight: fontWeightStrong,
      circleBorder: `2px solid ${textColor3}`,
      circleBorderInfo: `2px solid ${infoColorSuppl}`,
      circleBorderError: `2px solid ${errorColorSuppl}`,
      circleBorderSuccess: `2px solid ${successColorSuppl}`,
      circleBorderWarning: `2px solid ${warningColorSuppl}`,
      iconColor: textColor3,
      iconColorInfo: infoColorSuppl,
      iconColorError: errorColorSuppl,
      iconColorSuccess: successColorSuppl,
      iconColorWarning: warningColorSuppl,
      titleTextColor: textColor1,
      contentTextColor: textColor2,
      metaTextColor: textColor3,
      lineColor: railColor
    });
  }
};
export default timelineDark;