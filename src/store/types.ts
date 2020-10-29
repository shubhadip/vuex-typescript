import { DispatchOptions } from "vuex/types";
import { IStoreActions, IStoreGetters } from "./interfaces";

export type CustomDispatch = {
  dispatch<K extends keyof IStoreActions>(
    key: K,
    payload?: Parameters<IStoreActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<IStoreActions[K]>;
};

export type CustomRootGetter = {
  rootGetters: {
    [K in keyof IStoreGetters]: ReturnType<IStoreGetters[K]>;
  };
};
