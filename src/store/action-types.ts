import { ActionTypes as counterTypes } from "./modules/counter/action-types";
import { ActionTypes as counter1Types } from "./modules/counter1/action-types";
import { ActionTypes as rootATypes } from "./modules/root/action-types";

export const AllActionTypes = { ...counterTypes, ...counter1Types, ...rootATypes };
