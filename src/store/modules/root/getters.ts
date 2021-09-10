import { AppType } from "@/shared/interfaces";
import { ROOT_STORE } from "@/store/constants";
import { GetterTree } from "vuex";
import { IRootGettersTypes, IRootState, IUserData } from "./../../interfaces";

export const getters: GetterTree<IRootState, IRootState> & IRootGettersTypes = {
  [ROOT_STORE.GETTERS.UPDATE_VERSION]: (state: IRootState): string => {
    return state.version;
  },
  [ROOT_STORE.GETTERS.USER_LISTS]: (state: IRootState): IUserData[] => {
    return state.userlists;
  },
  [ROOT_STORE.GETTERS.DEVICE_TYPE]: (state: IRootState): AppType => {
    return state.deviceType;
  }
};
