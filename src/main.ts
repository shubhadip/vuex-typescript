import { createSSRApp, createApp, h } from "vue";
import App from "./App.vue";
import "./assets/styles/app-main.css";
import router from "./router";
import { getDeviceType } from "./shared/misc";
import { store } from "./store";
import { ROOT_STORE } from "./store/constants";

export default function() {
  const isSSR = typeof window === "undefined";

  const rootComponent = {
    render: () => h(App),
    components: { App }
  };
  const app = (isSSR ? createSSRApp : createApp)(rootComponent);
  console.log('main.ts');
  if(!isSSR){
    store.dispatch(ROOT_STORE.GETTERS.DEVICE_TYPE, getDeviceType());
  }
  
  app.use(router);
  app.use(store);

  return {
    app,
    router,
    store
  };
}
