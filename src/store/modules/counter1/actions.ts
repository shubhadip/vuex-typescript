import { ActionTree } from "vuex";
import { ActionTypes } from "./action-types";
import { MutationTypes } from "./mutation-types";
import {
  Counter1StateTypes,
  CounterActionsTypes1,
  IRootState
} from "@/store/interfaces";

export const actions: ActionTree<Counter1StateTypes, IRootState> &
  CounterActionsTypes1 = {
  [ActionTypes.GET_COUNTER1]({ commit }, payload: number) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit(MutationTypes.SET_COUNTER1, payload);
        resolve(payload);
      }, 500);
    });
  }
};
