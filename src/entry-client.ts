import createApp from './main'
declare let window: any;

const { app, router, store } = createApp();

(async (r, a, s) => {
  const storeInitialState = window.INITIAL_DATA;

  await r.isReady();
  if (storeInitialState) {
    s.replaceState(storeInitialState);
  }

  a.mount('#app', true);
})(router, app, store);

