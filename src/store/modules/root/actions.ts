import { ActionTree } from "vuex";
import { RootActionsTypes, IRootState, IUserData } from "@/store/interfaces";
import { COUNTER_STORE, ROOT_STORE } from "@/store/constants";

export const actions: ActionTree<IRootState, IRootState> & RootActionsTypes = {
  [ROOT_STORE.ACTIONS.UPDATE_VERSION]({ commit }, payload: string) {
    commit(ROOT_STORE.MUTATIONS.UPDATE_VERSION, payload);
  },
  [ROOT_STORE.ACTIONS.COUNTER_CHECK]({ dispatch }, payload: boolean) {
    dispatch(COUNTER_STORE.ACTIONS.SET_ROOT_DISPATCH, payload);
    console.log(payload);
  },
  [ROOT_STORE.ACTIONS.USER_LISTS](context, payload: IUserData[]) {
    context.commit(ROOT_STORE.MUTATIONS.USER_LISTS, payload);
  },
};
