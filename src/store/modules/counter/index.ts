import { Module } from "vuex";
import { CounterStateTypes, IRootState } from "@/store/interfaces";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { state } from "./state";

// Module
const counter: Module<CounterStateTypes, IRootState> = {
  state,
  getters,
  mutations,
  actions
};

export default counter;
