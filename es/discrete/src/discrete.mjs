import { NMessageProvider } from "../../message/index.mjs";
import { NDialogProvider } from "../../dialog/index.mjs";
import { NNotificationProvider } from "../../notification/index.mjs";
import { NLoadingBarProvider } from "../../loading-bar/index.mjs";
import { createDiscreteApp } from "./discreteApp.mjs";
export function createDiscreteApi(includes, {
  configProviderProps,
  messageProviderProps,
  dialogProviderProps,
  notificationProviderProps,
  loadingBarProviderProps
} = {}) {
  const providersAndProps = [];
  includes.forEach(type => {
    switch (type) {
      case 'message':
        providersAndProps.push({
          type,
          Provider: NMessageProvider,
          props: messageProviderProps
        });
        break;
      case 'notification':
        providersAndProps.push({
          type,
          Provider: NNotificationProvider,
          props: notificationProviderProps
        });
        break;
      case 'dialog':
        providersAndProps.push({
          type,
          Provider: NDialogProvider,
          props: dialogProviderProps
        });
        break;
      case 'loadingBar':
        providersAndProps.push({
          type,
          Provider: NLoadingBarProvider,
          props: loadingBarProviderProps
        });
        break;
    }
  });
  const discreteApp = createDiscreteApp({
    providersAndProps,
    configProviderProps
  });
  return discreteApp;
}