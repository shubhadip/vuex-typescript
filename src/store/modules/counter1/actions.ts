import { ActionTree } from "vuex";
import {
  Counter1StateTypes,
  CounterActionsTypes1,
  IRootState
} from "@/store/interfaces";
import { COUNTER1_STORE, COUNTER_STORE } from "@/store/constants";

export const actions: ActionTree<Counter1StateTypes, IRootState> &
  CounterActionsTypes1 = {
  [COUNTER1_STORE.ACTIONS.GET_COUNTER1]({ commit }, payload: number) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit(COUNTER1_STORE.MUTATIONS.SET_COUNTER1, payload);
        resolve(payload);
      }, 500);
    });
  },
  [COUNTER1_STORE.ACTIONS.CALL_COUNTER1]({ dispatch }) {
    dispatch(COUNTER_STORE.ACTIONS.CALL_COUNTER, true, { root: true });
  }
};
