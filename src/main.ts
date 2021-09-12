import { createSSRApp, createApp, h } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import { ROOT_STORE } from "./store/constants";
// eslint-disable-next-line
const MobileDetect = require("mobile-detect");

export default function() {
  const isSSR = typeof window === "undefined";

  const rootComponent = {
    render: () => h(App),
    components: { App }
  };

  const app = (isSSR ? createSSRApp : createApp)(rootComponent);
  
  if (!isSSR) {
    // todo: better way to handle deviceType
    const md = new MobileDetect(
      window && window.navigator && window.navigator.userAgent
    );
    store.dispatch(ROOT_STORE.ACTIONS.IS_MOBILE_DEVICE, !!md.mobile());
  }

  app.use(router);
  app.use(store);

  return {
    app,
    router,
    store
  };
}
