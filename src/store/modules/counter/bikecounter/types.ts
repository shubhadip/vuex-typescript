import {
  BikeCounterStateTypes,
  BikeCounterMutationsTypes,
  BikeCounterGettersTypes,
  BikeCounterActionTypes
} from "@/store/interfaces";
import { Store as VuexStore, CommitOptions, DispatchOptions } from "vuex";

export type BikeCounterStoreModuleTypes<S = BikeCounterStateTypes> = Omit<
  VuexStore<S>,
  "commit" | "getters" | "dispatch"
> & {
  commit<
    K extends keyof BikeCounterMutationsTypes,
    P extends Parameters<BikeCounterMutationsTypes[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<BikeCounterMutationsTypes[K]>;
} & {
  getters: {
    [K in keyof BikeCounterGettersTypes]: ReturnType<
      BikeCounterGettersTypes[K]
    >;
  };
} & {
  dispatch<K extends keyof BikeCounterActionTypes>(
    key: K,
    payload?: Parameters<BikeCounterActionTypes[K]>[1],
    options?: DispatchOptions
  ): ReturnType<BikeCounterActionTypes[K]>;
};
