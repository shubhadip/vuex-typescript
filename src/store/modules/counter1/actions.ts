import { ActionTree } from "vuex";
import { MutationTypes } from "./mutation-types";
import {
  Counter1StateTypes,
  CounterActionsTypes1,
  IRootState
} from "@/store/interfaces";
import { AllActionTypes } from "@/store/action-types";

export const actions: ActionTree<Counter1StateTypes, IRootState> &
  CounterActionsTypes1 = {
  [AllActionTypes.GET_COUNTER1]({ commit }, payload: number) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit(MutationTypes.SET_COUNTER1, payload);
        resolve(payload);
      }, 500);
    });
  },
  [AllActionTypes.CALL_COUNTER1]({ dispatch }) {
    dispatch(AllActionTypes.CALL_COUNTER, true, { root: true });
  }
};
