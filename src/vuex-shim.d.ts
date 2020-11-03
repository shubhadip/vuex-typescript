import { IRootState } from "./store/interfaces";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<IRootState>;
  }
}
