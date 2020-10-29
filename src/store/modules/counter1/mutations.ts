import { MutationTree } from "vuex";
import { MutationTypes } from "./mutation-types";
import { Counter1StateTypes, Counter1MutationsTypes } from "./../../interfaces";

export const mutations: MutationTree<Counter1StateTypes> &
  Counter1MutationsTypes = {
  [MutationTypes.SET_COUNTER1](state: Counter1StateTypes, payload: number) {
    state.counter1 = payload;
  },
  [MutationTypes.RESET_COUNTER1](state: Counter1StateTypes) {
    state.counter1 = 0;
  }
};
