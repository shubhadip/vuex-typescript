import {
  RootGetters,
  RootMutations,
  RootActions,
  CounterGetters,
  CounterMutations,
  CounterActions,
  Counter1Actions,
  Counter1Getters,
  Counter1Mutations
} from "./enums";

export const ROOT_STORE = {
  GETTERS: RootGetters,
  MUTATIONS: RootMutations,
  ACTIONS: RootActions
};

export const COUNTER_STORE = {
  GETTERS: CounterGetters,
  MUTATIONS: CounterMutations,
  ACTIONS: CounterActions
};

export const COUNTER1_STORE = {
  GETTERS: Counter1Getters,
  MUTATIONS: Counter1Mutations,
  ACTIONS: Counter1Actions
};
