import { ActionTree } from "vuex";
import { ActionTypes } from "./action-types";
import { MutationTypes } from "./mutation-types";
import {
  CounterActionsTypes,
  CounterStateTypes,
  IRootState
} from "@/store/interfaces";

export const actions: ActionTree<CounterStateTypes, IRootState> &
  CounterActionsTypes = {
  [ActionTypes.GET_COUNTER]({ commit }, payload: number) {
    commit(MutationTypes.SET_COUNTER, payload);
  },
  [ActionTypes.SET_ROOT_DISPATCH]({ commit }, payload: boolean) {
    commit(MutationTypes.SET_ROOT_DISPATCH, payload);
  },
  [ActionTypes.CALL_COUNTER]({ commit }, payload: boolean) {
    console.log("payload", payload);
    console.log("commit", commit);
  }
};
