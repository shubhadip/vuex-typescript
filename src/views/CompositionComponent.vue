<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div style="display: flex;flex-direction: column">
      <label style="font-weight: bold;"
        >counter from state: {{ counterTemp }}</label
      >
      <label style="font-weight: bold;"
        >counter from getters: {{ counter }}</label
      >
      <label style="font-weight: bold;"
        >doubledCounter: {{ doubledCounter }}</label
      >
      <label style="font-weight: bold;"
        >isRootDispatchSet: {{ isRootDispatchSet }}</label
      >
      <button class="btn" @click="getCounter">
        Increment Counter
      </button>
      {{ "test" }}
      <button class="btn" @click="resetCounter">
        Reset Counter
      </button>
      <button class="btn" @click="setRootDispatch">
        Root Dispatch
      </button>
      <button class="btn" @click="crossCounterDispatch">
        Cross Counter Dispatch
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/use/useStore";
import { CounterStateTypes } from "@/store/interfaces";
import { COUNTER1_STORE, COUNTER_STORE, ROOT_STORE } from "@/store/constants";

export default defineComponent({
  name: "CompositionAPIComponent",
  setup() {
    const store = useStore();
    const counter = computed(() => store.getters[COUNTER_STORE.GETTERS.COUNTER_VALUE]);
    const counterTemp = computed(
      () =>
        ((store.state.counterModule as unknown) as CounterStateTypes).counter
    );
    const doubledCounter = computed(() => store.getters[COUNTER_STORE.GETTERS.DOUBLED_COUNTER]);
    const isRootDispatchSet = computed(() => store.getters[COUNTER_STORE.GETTERS.GET_ROOT_DISPATCH]);

    function resetCounter() {
      store.commit(COUNTER_STORE.MUTATIONS.RESET_COUNTER);
    }

    function setRootDispatch() {
      store.dispatch(ROOT_STORE.ACTIONS.COUNTER_CHECK, !isRootDispatchSet.value);
    }
    async function getCounter() {
      await store.dispatch(COUNTER_STORE.ACTIONS.GET_COUNTER, 100);
    }

    function crossCounterDispatch() {
      store.dispatch(COUNTER1_STORE.ACTIONS.CALL_COUNTER1);
    }

    return {
      counter,
      doubledCounter,
      resetCounter,
      getCounter,
      setRootDispatch,
      isRootDispatchSet,
      crossCounterDispatch,
      counterTemp
    };
  }
});
</script>
