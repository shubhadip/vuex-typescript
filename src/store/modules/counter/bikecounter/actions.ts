import { ActionTree } from "vuex";
import { BikeActionTypes } from "./action-types";
import { BikeMutationTypes } from "./mutation-types";
import { actions } from "../actions";
import {
  BikeCounterActionTypes,
  BikeCounterStateTypes,
  IRootState
} from "@/store/interfaces";

export const bikeActions: ActionTree<BikeCounterStateTypes, IRootState> &
  BikeCounterActionTypes = {
  ...actions,
  [BikeActionTypes.SET_BIKE_SPECIFIC]({ commit }, payload: string) {
    commit(BikeMutationTypes.SET_BIKE_SPECIFIC, payload);
  }
};
