import {
  IRootState,
  RootMutationsTypes,
  IRootGettersTypes,
  RootActionsTypes
} from "@/store/interfaces";
import { Store as VuexStore, CommitOptions, DispatchOptions } from "vuex";

export type RootStoreModuleTypes<S = IRootState> = Omit<
  VuexStore<S>,
  "commit" | "getters" | "dispatch"
> & {
  commit<
    K extends keyof RootMutationsTypes,
    P extends Parameters<RootMutationsTypes[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<RootMutationsTypes[K]>;
} & {
  getters: {
    [K in keyof IRootGettersTypes]: ReturnType<IRootGettersTypes[K]>;
  };
} & {
  dispatch<K extends keyof RootActionsTypes>(
    key: K,
    payload?: Parameters<RootActionsTypes[K]>[1],
    options?: DispatchOptions
  ): ReturnType<RootActionsTypes[K]>;
};
