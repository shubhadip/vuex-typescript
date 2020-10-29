import {
  CounterStateTypes,
  CounterMutationsTypes,
  CounterGettersTypes,
  CounterActionsTypes
} from "@/store/interfaces";
import { Store as VuexStore, CommitOptions, DispatchOptions } from "vuex";

export type CounterStoreModuleTypes<S = CounterStateTypes> = Omit<
  VuexStore<S>,
  "commit" | "getters" | "dispatch"
> & {
  commit<
    K extends keyof CounterMutationsTypes,
    P extends Parameters<CounterMutationsTypes[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<CounterMutationsTypes[K]>;
} & {
  getters: {
    [K in keyof CounterGettersTypes]: ReturnType<CounterGettersTypes[K]>;
  };
} & {
  dispatch<K extends keyof CounterActionsTypes>(
    key: K,
    payload?: Parameters<CounterActionsTypes[K]>[1],
    options?: DispatchOptions
  ): ReturnType<CounterActionsTypes[K]>;
};
