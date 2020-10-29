import {
  Counter1StateTypes,
  Counter1MutationsTypes,
  Counter1GettersTypes,
  CounterActionsTypes1
} from "@/store/interfaces";
import { Store as VuexStore, CommitOptions, DispatchOptions } from "vuex";

export type Counter1StoreModuleTypes<S = Counter1StateTypes> = Omit<
  VuexStore<S>,
  "commit" | "getters" | "dispatch"
> & {
  commit<
    K extends keyof Counter1MutationsTypes,
    P extends Parameters<Counter1MutationsTypes[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<Counter1MutationsTypes[K]>;
} & {
  getters: {
    [K in keyof Counter1GettersTypes]: ReturnType<Counter1GettersTypes[K]>;
  };
} & {
  dispatch<K extends keyof CounterActionsTypes1>(
    key: K,
    payload?: Parameters<CounterActionsTypes1[K]>[1],
    options?: DispatchOptions
  ): ReturnType<CounterActionsTypes1[K]>;
};
