import { COUNTER1_STORE } from "@/store/constants";
import { GetterTree } from "vuex";
import {
  Counter1GettersTypes,
  Counter1StateTypes,
  IRootState
} from "./../../interfaces";

export const getters: GetterTree<Counter1StateTypes, IRootState> &
  Counter1GettersTypes = {
  [COUNTER1_STORE.GETTERS.COUNTER_VALUE1]: (state: Counter1StateTypes) => {
    return state.counter1 || 0;
  },
  [COUNTER1_STORE.GETTERS.DOUBLED_COUNTER1]: (state: Counter1StateTypes) => {
    return state.counter1 || 0 * 2;
  }
};
