import { GetterTree } from "vuex";
import {
  Counter1GettersTypes,
  Counter1StateTypes,
  IRootState
} from "./../../interfaces";

export const getters: GetterTree<Counter1StateTypes, IRootState> &
  Counter1GettersTypes = {
  counterValue1: (state: Counter1StateTypes) => {
    return state.counter1 || 0;
  },
  doubledCounter1: (state: Counter1StateTypes) => {
    return state.counter1 || 0 * 2;
  }
};
