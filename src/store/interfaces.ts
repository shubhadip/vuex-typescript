import { ActionContext, DispatchOptions } from "vuex";
import { MutationTypes as CounterMTypes } from "./modules/counter/mutation-types";
import { ActionTypes as CounterATypes } from "./modules/counter/action-types";
import { MutationTypes as CounterM1Types } from "./modules/counter1/mutation-types";
import { ActionTypes as CounterA1Types } from "./modules/counter1/action-types";
import { MutationTypes as RootMTypes } from "./modules/root/mutation-types";
import { ActionTypes as RootATypes } from "./modules/root/action-types";

export interface IUserData {
  id: number
  userId: number
  title: string
  body: string
}
export interface IRootState {
  root: boolean;
  version: string;
  userlists: any[]
}

export interface IMergedState extends IRootState {
  counterModule: CounterStateTypes;
  counterModule1: Counter1StateTypes;
}

export interface IRootGettersTypes {
  getVersion(state: IRootState): string;
  getUserList(state: IRootState): IUserData[];
}

export type RootMutationsTypes<S = IRootState> = {
  [RootMTypes.UPDATE_VERSION](state: S, payload: string): void;
  [RootMTypes.USER_LISTS](state: S, payload: IUserData[]): void;
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
  [RootATypes.UPDATE_VERSION](
    { commit }: AugmentedActionContextRoot,
    payload: string
  ): void;
  [RootATypes.COUNTER_CHECK](
    { dispatch }: AugmentedActionContextRoot,
    payload: boolean
  ): void;
  [RootATypes.USER_LISTS](
    { dispatch }: AugmentedActionContextRoot,
    payload: IUserData[]
  ): void;
}

/*********************** COUNTER1 MODULE TYPES  ***********************/

export interface Counter1StateTypes {
  counter1?: number;
}

export interface Counter1GettersTypes {
  doubledCounter1(state: Counter1StateTypes): number;
  counterValue1(state: Counter1StateTypes): number;
}

export type Counter1MutationsTypes<S = Counter1StateTypes> = {
  [CounterM1Types.SET_COUNTER1](state: S, payload: number): void;
  [CounterM1Types.RESET_COUNTER1](state: S): void;
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
  [CounterA1Types.GET_COUNTER1](
    { commit }: AugmentedActionContextCounter1,
    payload: number
  ): Promise<number>;
  [CounterA1Types.CALL_COUNTER1]({
    commit
  }: AugmentedActionContextCounter1): void;
}

/*********************** COUNTER MODULE TYPES  ***********************/
export interface CounterStateTypes {
  counter?: number;
  rootDispatch?: boolean;
}

export interface CounterGettersTypes {
  doubledCounter(state: CounterStateTypes): number;
  counterValue(state: CounterStateTypes): number;
  getRootDispatch(state: CounterStateTypes): boolean;
}

export type CounterMutationsTypes<S = CounterStateTypes> = {
  [CounterMTypes.SET_COUNTER](state: S, payload: number): void;
  [CounterMTypes.RESET_COUNTER](state: S): void;
  [CounterMTypes.SET_ROOT_DISPATCH](state: S, payload?: boolean): void;
};

export type AugmentedActionContext = {
  commit<K extends keyof CounterMutationsTypes>(
    key: K,
    payload: Parameters<CounterMutationsTypes[K]>[1]
  ): ReturnType<CounterMutationsTypes[K]>;
} & Omit<ActionContext<CounterStateTypes, IRootState>, "commit">;

export interface CounterActionsTypes {
  [CounterATypes.GET_COUNTER](
    { commit }: AugmentedActionContext,
    payload: number
  ): void;
  [CounterATypes.SET_ROOT_DISPATCH](
    { commit }: AugmentedActionContext,
    payload: boolean
  ): void;
  [CounterATypes.CALL_COUNTER](
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
