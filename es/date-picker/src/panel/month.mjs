import { h, defineComponent, onMounted } from 'vue';
import { VirtualList } from 'vueuc';
import { useLocale } from "../../../_mixins/index.mjs";
import { NButton, NxButton } from "../../../button/index.mjs";
import { NBaseFocusDetector, NScrollbar } from "../../../_internal/index.mjs";
import { getMonthString, getQuarterString, getYearString } from "../utils.mjs";
import { MONTH_ITEM_HEIGHT } from "../config.mjs";
import { useCalendar, useCalendarProps } from "./use-calendar.mjs";
/**
 * Month Panel
 * Update picker value on:
 * 1. item click
 * 2. clear click
 */
export default defineComponent({
  name: 'MonthPanel',
  props: Object.assign(Object.assign({}, useCalendarProps), {
    type: {
      type: String,
      required: true
    },
    // panelHeader prop
    useAsQuickJump: Boolean
  }),
  setup(props) {
    const useCalendarRef = useCalendar(props, props.type);
    const {
      dateLocaleRef
    } = useLocale('DatePicker');
    const getRenderContent = item => {
      switch (item.type) {
        case 'year':
          return getYearString(item.dateObject.year, item.yearFormat, dateLocaleRef.value.locale);
        case 'month':
          return getMonthString(item.dateObject.month, item.monthFormat, dateLocaleRef.value.locale);
        case 'quarter':
          return getQuarterString(item.dateObject.quarter, item.quarterFormat, dateLocaleRef.value.locale);
      }
    };
    const {
      useAsQuickJump
    } = props;
    const renderItem = (item, i, mergedClsPrefix) => {
      const {
        mergedIsDateDisabled,
        handleDateClick,
        handleQuickMonthClick
      } = useCalendarRef;
      return h("div", {
        "data-n-date": true,
        key: i,
        class: [`${mergedClsPrefix}-date-panel-month-calendar__picker-col-item`, item.isCurrent && `${mergedClsPrefix}-date-panel-month-calendar__picker-col-item--current`, item.selected && `${mergedClsPrefix}-date-panel-month-calendar__picker-col-item--selected`, !useAsQuickJump && mergedIsDateDisabled(item.ts, item.type === 'year' ? {
          type: 'year',
          year: item.dateObject.year
        } : item.type === 'month' ? {
          type: 'month',
          year: item.dateObject.year,
          month: item.dateObject.month
        } : item.type === 'quarter' ? {
          type: 'month',
          year: item.dateObject.year,
          month: item.dateObject.quarter
        } : null) && `${mergedClsPrefix}-date-panel-month-calendar__picker-col-item--disabled`],
        onClick: () => {
          useAsQuickJump ? handleQuickMonthClick(item, value => {
            ;
            props.onUpdateValue(value, false);
          }) : handleDateClick(item);
        }
      }, getRenderContent(item));
    };
    onMounted(() => {
      useCalendarRef.justifyColumnsScrollState();
    });
    return Object.assign(Object.assign({}, useCalendarRef), {
      renderItem
    });
  },
  render() {
    const {
      mergedClsPrefix,
      mergedTheme,
      shortcuts,
      actions,
      renderItem,
      type,
      onRender
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("div", {
      ref: "selfRef",
      tabindex: 0,
      class: [`${mergedClsPrefix}-date-panel`, `${mergedClsPrefix}-date-panel--month`, !this.panel && `${mergedClsPrefix}-date-panel--shadow`, this.themeClass],
      onFocus: this.handlePanelFocus,
      onKeydown: this.handlePanelKeyDown
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-month-calendar`
    }, h(NScrollbar, {
      ref: "yearScrollbarRef",
      class: `${mergedClsPrefix}-date-panel-month-calendar__picker-col`,
      theme: mergedTheme.peers.Scrollbar,
      themeOverrides: mergedTheme.peerOverrides.Scrollbar,
      container: this.virtualListContainer,
      content: this.virtualListContent,
      horizontalRailStyle: {
        zIndex: 1
      },
      verticalRailStyle: {
        zIndex: 1
      }
    }, {
      default: () => h(VirtualList, {
        ref: "yearVlRef",
        items: this.yearArray,
        itemSize: MONTH_ITEM_HEIGHT,
        showScrollbar: false,
        keyField: "ts",
        onScroll: this.handleVirtualListScroll,
        paddingBottom: 4
      }, {
        default: ({
          item,
          index
        }) => {
          return renderItem(item, index, mergedClsPrefix);
        }
      })
    }), type === 'month' || type === 'quarter' ? h("div", {
      class: `${mergedClsPrefix}-date-panel-month-calendar__picker-col`
    }, h(NScrollbar, {
      ref: "monthScrollbarRef",
      theme: mergedTheme.peers.Scrollbar,
      themeOverrides: mergedTheme.peerOverrides.Scrollbar
    }, {
      default: () => [(type === 'month' ? this.monthArray : this.quarterArray).map((item, i) => renderItem(item, i, mergedClsPrefix)), h("div", {
        class: `${mergedClsPrefix}-date-panel-${type}-calendar__padding`
      })]
    })) : null), this.datePickerSlots.footer ? h("div", {
      class: `${mergedClsPrefix}-date-panel-footer`
    }, {
      default: this.datePickerSlots.footer
    }) : null, (actions === null || actions === void 0 ? void 0 : actions.length) || shortcuts ? h("div", {
      class: `${mergedClsPrefix}-date-panel-actions`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-actions__prefix`
    }, shortcuts && Object.keys(shortcuts).map(key => {
      const shortcut = shortcuts[key];
      return Array.isArray(shortcut) ? null : h(NxButton, {
        size: "tiny",
        onMouseenter: () => {
          this.handleSingleShortcutMouseenter(shortcut);
        },
        onClick: () => {
          this.handleSingleShortcutClick(shortcut);
        },
        onMouseleave: () => {
          this.handleShortcutMouseleave();
        }
      }, {
        default: () => key
      });
    })), h("div", {
      class: `${mergedClsPrefix}-date-panel-actions__suffix`
    }, (actions === null || actions === void 0 ? void 0 : actions.includes('clear')) ? h(NButton, {
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      size: "tiny",
      onClick: this.handleClearClick
    }, {
      default: () => this.locale.clear
    }) : null, (actions === null || actions === void 0 ? void 0 : actions.includes('now')) ? h(NButton, {
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      size: "tiny",
      onClick: this.handleNowClick
    }, {
      default: () => this.locale.now
    }) : null, (actions === null || actions === void 0 ? void 0 : actions.includes('confirm')) ? h(NButton, {
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      size: "tiny",
      type: "primary",
      disabled: this.isDateInvalid,
      onClick: this.handleConfirmClick
    }, {
      default: () => this.locale.confirm
    }) : null)) : null, h(NBaseFocusDetector, {
      onFocus: this.handleFocusDetectorFocus
    }));
  }
});