import { ActionContext, DispatchOptions } from "vuex";
import { COUNTER1_STORE, COUNTER_STORE, ROOT_STORE } from "./constants";

export interface IUserData {
  id: number;
  userId: number;
  title: string;
  body: string;
}
export interface IRootState {
  root: boolean;
  version: string;
  userlists: any[];
}

export interface IMergedState extends IRootState {
  counterModule: CounterStateTypes;
  counterModule1: Counter1StateTypes;
}

export interface IRootGettersTypes {
  [ROOT_STORE.GETTERS.UPDATE_VERSION](state: IRootState): string;
  [ROOT_STORE.GETTERS.USER_LISTS](state: IRootState): IUserData[];
}

export type RootMutationsTypes<S = IRootState> = {
  [ROOT_STORE.MUTATIONS.UPDATE_VERSION](state: S, payload: string): void;
  [ROOT_STORE.MUTATIONS.USER_LISTS](state: S, payload: IUserData[]): void;
};

/**
 * probably this can be moved inside individual module
 * as counterTypes.ts and then can be imported here
 */
type AugmentedActionContextRoot = {
  commit<K extends keyof RootMutationsTypes>(
    key: K,
    payload: Parameters<RootMutationsTypes[K]>[1]
  ): ReturnType<RootMutationsTypes[K]>;
} & Omit<ActionContext<IRootState, IRootState>, "commit"> & {
    dispatch<K extends keyof StoreActions>(
      key: K,
      payload?: Parameters<StoreActions[K]>[1],
      options?: DispatchOptions
    ): ReturnType<StoreActions[K]>;
  };

export interface RootActionsTypes {
  [ROOT_STORE.ACTIONS.UPDATE_VERSION](
    { commit }: AugmentedActionContextRoot,
    payload: string
  ): void;
  [ROOT_STORE.ACTIONS.COUNTER_CHECK](
    { dispatch }: AugmentedActionContextRoot,
    payload: boolean
  ): void;
  [ROOT_STORE.ACTIONS.USER_LISTS](
    { dispatch }: AugmentedActionContextRoot,
    payload: IUserData[]
  ): void;
}

/*********************** COUNTER1 MODULE TYPES  ***********************/

export interface Counter1StateTypes {
  counter1?: number;
}

export interface Counter1GettersTypes {
  [COUNTER1_STORE.GETTERS.DOUBLED_COUNTER1](state: Counter1StateTypes): number;
  [COUNTER1_STORE.GETTERS.COUNTER_VALUE1](state: Counter1StateTypes): number;
}

export type Counter1MutationsTypes<S = Counter1StateTypes> = {
  [COUNTER1_STORE.MUTATIONS.SET_COUNTER1](state: S, payload: number): void;
  [COUNTER1_STORE.MUTATIONS.RESET_COUNTER1](state: S): void;
};

/**
 * probably this can be moved inside individual module
 * as counterTypes.ts and then can be imported here
 */
type AugmentedActionContextCounter1 = {
  commit<K extends keyof Counter1MutationsTypes>(
    key: K,
    payload: Parameters<Counter1MutationsTypes[K]>[1]
  ): ReturnType<Counter1MutationsTypes[K]>;
} & Omit<ActionContext<Counter1StateTypes, IRootState>, "commit">;

export interface CounterActionsTypes1 {
  [COUNTER1_STORE.ACTIONS.GET_COUNTER1](
    { commit }: AugmentedActionContextCounter1,
    payload: number
  ): Promise<number>;
  [COUNTER1_STORE.ACTIONS.CALL_COUNTER1]({
    commit
  }: AugmentedActionContextCounter1): void;
}

/*********************** COUNTER MODULE TYPES  ***********************/
export interface CounterStateTypes {
  counter?: number;
  rootDispatch?: boolean;
}

export interface CounterGettersTypes {
  [COUNTER_STORE.GETTERS.DOUBLED_COUNTER](state: CounterStateTypes): number;
  [COUNTER_STORE.GETTERS.COUNTER_VALUE](state: CounterStateTypes): number;
  [COUNTER_STORE.GETTERS.GET_ROOT_DISPATCH](state: CounterStateTypes): boolean;
}

export type CounterMutationsTypes<S = CounterStateTypes> = {
  [COUNTER_STORE.MUTATIONS.SET_COUNTER](state: S, payload: number): void;
  [COUNTER_STORE.MUTATIONS.RESET_COUNTER](state: S): void;
  [COUNTER_STORE.MUTATIONS.SET_ROOT_DISPATCH](
    state: S,
    payload?: boolean
  ): void;
};

export type AugmentedActionContext = {
  commit<K extends keyof CounterMutationsTypes>(
    key: K,
    payload: Parameters<CounterMutationsTypes[K]>[1]
  ): ReturnType<CounterMutationsTypes[K]>;
} & Omit<ActionContext<CounterStateTypes, IRootState>, "commit">;

export interface CounterActionsTypes {
  [COUNTER_STORE.ACTIONS.GET_COUNTER](
    { commit }: AugmentedActionContext,
    payload: number
  ): void;
  [COUNTER_STORE.ACTIONS.SET_ROOT_DISPATCH](
    { commit }: AugmentedActionContext,
    payload: boolean
  ): void;
  [COUNTER_STORE.ACTIONS.CALL_COUNTER](
    { commit }: AugmentedActionContext,
    payload: boolean
  ): void;
}

export interface StoreActions
  extends RootActionsTypes,
    CounterActionsTypes,
    CounterActionsTypes1 {}

export interface StoreGetters
  extends IRootGettersTypes,
    CounterGettersTypes,
    Counter1GettersTypes {}
