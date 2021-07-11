import createApp from './main';

export default function () {

  const {
    router,
    app,
    store
  } = createApp();

  return {
    app,
    router,
    store
  };
}