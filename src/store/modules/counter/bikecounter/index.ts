import { bikeState } from "./state";
import { bikeGetters } from "./getters";
import { bikeMutations } from "./mutations";
import { bikeActions } from "./actions";

export default {
  name: "bikespecificcounter",
  state: bikeState,
  getters: bikeGetters,
  actions: bikeActions,
  mutations: bikeMutations
};
