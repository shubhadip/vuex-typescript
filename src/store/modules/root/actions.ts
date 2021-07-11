import { ActionTree } from "vuex";
import { ActionTypes } from "./action-types";
import { MutationTypes } from "./mutation-types";
import { RootActionsTypes, IRootState, IUserData } from "@/store/interfaces";

export const actions: ActionTree<IRootState, IRootState> & RootActionsTypes = {
  [ActionTypes.UPDATE_VERSION]({ commit }, payload: string) {
    commit(MutationTypes.UPDATE_VERSION, payload);
  },
  [ActionTypes.COUNTER_CHECK]({ dispatch }, payload: boolean) {
    dispatch(ActionTypes.SET_ROOT_DISPATCH, payload);
  },
  [ActionTypes.USER_LISTS](context, payload: IUserData[]) {
    context.commit(MutationTypes.USER_LISTS, payload);
  },
};
