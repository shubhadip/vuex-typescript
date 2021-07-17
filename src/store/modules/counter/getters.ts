import { COUNTER_STORE } from "@/store/constants";
import { GetterTree } from "vuex";
import {
  CounterGettersTypes,
  CounterStateTypes,
  IRootState
} from "./../../interfaces";

export const getters: GetterTree<CounterStateTypes, IRootState> &
  CounterGettersTypes = {
  [COUNTER_STORE.GETTERS.COUNTER_VALUE]: (state: CounterStateTypes) => {
    return state.counter || 0;
  },
  [COUNTER_STORE.GETTERS.DOUBLED_COUNTER]: (state: CounterStateTypes) => {
    return state.counter || 0 * 2;
  },
  [COUNTER_STORE.GETTERS.GET_ROOT_DISPATCH]: (state: CounterStateTypes) => {
    return state.rootDispatch || false;
  }
};
