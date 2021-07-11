import { GetterTree } from "vuex";
import { IRootGettersTypes, IRootState, IUserData } from "./../../interfaces";

export const getters: GetterTree<IRootState, IRootState> & IRootGettersTypes = {
  getVersion: (state: IRootState): string => {
    return state.version;
  },
  getUserList: (state: IRootState): IUserData[] => {
    return state.userlists;
  },
};
