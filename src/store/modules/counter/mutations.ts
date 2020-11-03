import { MutationTree } from "vuex";
import { MutationTypes } from "./mutation-types";
import { CounterMutationsTypes, CounterStateTypes } from "./../../interfaces";

export const mutations: MutationTree<CounterStateTypes> &
  CounterMutationsTypes = {
  [MutationTypes.SET_COUNTER](state: CounterStateTypes, payload: number) {
    state.counter = payload;
  },
  [MutationTypes.RESET_COUNTER](state: CounterStateTypes) {
    state.counter = 0;
  },
  [MutationTypes.SET_ROOT_DISPATCH](state, payload: boolean) {
    state.rootDispatch = payload;
  }
};
