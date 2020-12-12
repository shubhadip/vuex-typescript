import {
  BikeCounterStateTypes,
  CounterMutationsTypes
} from "@/store/interfaces";
import { MutationTree } from "vuex";
import { mutations } from "../mutations";
import { BikeMutationTypes } from "./mutation-types";

export const bikeMutations: MutationTree<BikeCounterStateTypes> &
  CounterMutationsTypes = {
  ...mutations,
  [BikeMutationTypes.SET_BIKE_SPECIFIC](state, payload: string) {
    state.bikeSpecific = payload;
  }
};
