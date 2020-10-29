import { DispatchOptions } from "vuex/types";
import { StoreActions, StoreGetters } from "./interfaces";

export type CustomDispatch = {
  dispatch<K extends keyof StoreActions>(
    key: K,
    payload?: Parameters<StoreActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<StoreActions[K]>;
};

export type CustomRootGetter = {
  rootGetters: {
    [K in keyof StoreGetters]: ReturnType<StoreGetters[K]>;
  };
};
