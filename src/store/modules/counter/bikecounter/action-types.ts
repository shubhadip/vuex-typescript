import { ActionTypes } from "../action-types";

enum bikeActionTypes {
  SET_BIKE_SPECIFIC = "SET_BIKE_SPECIFIC"
}

export const BikeActionTypes = { ...ActionTypes, ...bikeActionTypes };
export type BikeActionTypes = typeof bikeActionTypes;
