import { MutationTypes } from "../mutation-types";

enum bikeMutationTypes {
  SET_BIKE_SPECIFIC = "SET_BIKE_SPECIFIC"
}

export const BikeMutationTypes = { ...MutationTypes, ...bikeMutationTypes };
export type BikeMutationTypes = typeof bikeMutationTypes;
