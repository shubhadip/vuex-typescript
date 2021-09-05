import { createSSRApp, createApp, h } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";

export default function() {
  const isSSR = typeof window === "undefined";

  const rootComponent = {
    render: () => h(App),
    components: { App }
  };

  const app = (isSSR ? createSSRApp : createApp)(rootComponent);

  app.use(router);
  app.use(store);

  return {
    app,
    router,
    store
  };
}
