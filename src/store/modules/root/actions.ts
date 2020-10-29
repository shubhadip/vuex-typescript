import { ActionTree } from "vuex";
import { ActionTypes } from "./action-types";
import { MutationTypes } from "./mutation-types";
import { RootActionsTypes, IRootState } from "@/store/interfaces";

export const actions: ActionTree<IRootState, IRootState> & RootActionsTypes = {
  [ActionTypes.UPDATE_VERSION]({ commit }, payload: string) {
    commit(MutationTypes.UPDATE_VERSION, payload);
  },
  [ActionTypes.COUNTER_CHECK]({ dispatch }) {
    dispatch(ActionTypes.SET_ROOT_DISPATCH, true)
  }
};
