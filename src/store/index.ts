import { createStore } from "vuex";
import { IRootState } from "@/store/interfaces";
import { CounterStoreModuleTypes } from "./modules/counter/types";
import { Counter1StoreModuleTypes } from "./modules/counter1/types";
import { RootStoreModuleTypes } from "./modules/root/types";

import root from "./modules/root";

export const store = createStore<IRootState>(root);

type StoreModules = {
  counterModule: CounterStoreModuleTypes;
  counterModule1: Counter1StoreModuleTypes;
  root: RootStoreModuleTypes;
};

export type Store = CounterStoreModuleTypes<
  Pick<StoreModules, "counterModule">
> &
  Counter1StoreModuleTypes<Pick<StoreModules, "counterModule1">> &
  RootStoreModuleTypes<Pick<StoreModules, "root">>;
