import { createApp, h, unref } from 'vue';
import { NConfigProvider } from "../../config-provider/index.mjs";
import { useDialog } from "../../dialog/index.mjs";
import { useLoadingBar } from "../../loading-bar/index.mjs";
import { useMessage } from "../../message/index.mjs";
import { useNotification } from "../../notification/index.mjs";
import { isBrowser, warn } from "../../_utils/index.mjs";
import { NInjectionExtractor } from "./InjectionExtractor.mjs";
const injectionFactoryMap = {
  message: useMessage,
  notification: useNotification,
  loadingBar: useLoadingBar,
  dialog: useDialog
};
export function createDiscreteApp({
  providersAndProps,
  configProviderProps
}) {
  const App = () => {
    return h(NConfigProvider, unref(configProviderProps), {
      default: () => providersAndProps.map(({
        type,
        Provider,
        props
      }) => {
        return h(Provider, unref(props), {
          default: () => h(NInjectionExtractor, {
            onSetup: () => extractedApi[type] = injectionFactoryMap[type]()
          })
        });
      })
    });
  };
  let app = createApp(App);
  const extractedApi = {
    app
  };
  let hostEl;
  if (isBrowser) {
    hostEl = document.createElement('div');
    document.body.appendChild(hostEl);
    app.mount(hostEl);
  }
  const unmount = () => {
    var _a;
    if (app === null || hostEl === null) {
      warn('discrete', 'unmount call no need because discrete app has been unmounted');
      return;
    }
    app.unmount();
    (_a = hostEl.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(hostEl);
    hostEl = null;
    app = null;
  };
  return Object.assign({
    unmount
  }, extractedApi);
}