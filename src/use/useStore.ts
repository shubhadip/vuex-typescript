import { Store } from "@/store";

import { useStore as VuexStore } from "vuex";
/**
 * Returns Whole Store Object
 */
export function useStore(): Store {
  return VuexStore() as Store;
}
