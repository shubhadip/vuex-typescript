import { Module, ModuleTree } from "vuex";
import { IRootState } from "@/store/interfaces";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { state } from "./state";
import counterModule from "../counter";
import counter1Module from "../counter1";

// Modules
const modules: ModuleTree<IRootState> = {
  counterModule,
  counter1Module
};

const root: Module<IRootState, IRootState> = {
  state,
  getters,
  mutations,
  actions,
  modules
};

export default root;
