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
  [ActionTypes.SET_ROOT_DISPATCH]({ commit }) {
    commit(MutationTypes.SET_ROOT_DISPATCH, true);
  },
  [ActionTypes.CALL_COUNTER]({ commit }, payload: boolean) {
    debugger
    console.log('called', payload);
  }
};
