import { MutationTypes as counterTypes } from "./modules/counter/mutation-types";
import { MutationTypes as counter1Types } from "./modules/counter1/mutation-types";

export const AllMutationTypes = { ...counterTypes, ...counter1Types };
