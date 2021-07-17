import { MutationTree } from "vuex";
import { Counter1StateTypes, Counter1MutationsTypes } from "./../../interfaces";
import { COUNTER1_STORE } from "@/store/constants";

export const mutations: MutationTree<Counter1StateTypes> &
  Counter1MutationsTypes = {
  [COUNTER1_STORE.MUTATIONS.SET_COUNTER1](state: Counter1StateTypes, payload: number) {
    state.counter1 = payload;
  },
  [COUNTER1_STORE.MUTATIONS.RESET_COUNTER1](state: Counter1StateTypes) {
    state.counter1 = 0;
  }
};
