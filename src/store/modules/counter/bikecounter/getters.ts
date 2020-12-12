import {
  BikeCounterStateTypes,
  IRootState,
  BikeCounterGettersTypes
} from "@/store/interfaces";
import { GetterTree } from "vuex";
import { getters } from "../getters";

export const bikeGetters: GetterTree<BikeCounterStateTypes, IRootState> &
  BikeCounterGettersTypes = {
  ...getters,
  counterType: state => (state.counter || 0) * 2,
  getBikeSpecific: state => state.bikeSpecific
};
