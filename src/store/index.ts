import { createStore } from "vuex";
import { IRootState } from "@/store/interfaces";
import { CounterStoreModuleTypes } from "./modules/counter/types";
import { Counter1StoreModuleTypes } from "./modules/counter1/types";
import { RootStoreModuleTypes } from "./modules/root/types";

import root from "./modules/root";

export const store = createStore<IRootState>(root);

type StoreModules = {
  counter: CounterStoreModuleTypes;
  counter1: Counter1StoreModuleTypes;
  root: RootStoreModuleTypes;
};

export type Store = CounterStoreModuleTypes<Pick<StoreModules, "counter">> &
  Counter1StoreModuleTypes<Pick<StoreModules, "counter1">> &
  RootStoreModuleTypes<Pick<StoreModules, "root">>;
