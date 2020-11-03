<template>
<div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div style="display: flex;flex-direction: column">
        <label style="font-weight: bold;">counter: {{ counter }}</label>
        <label style="font-weight: bold;">doubledCounter: {{ doubledCounter }}</label>
        <label style="font-weight: bold;">isRootDispatchSet: {{ isRootDispatchSet }}</label>
        <button class="btn" @click="getCounter">
            Increment Counter
        </button>
        {{('test')}}
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
import {
    defineComponent,
    computed
} from "vue";
import {
    useStore
} from "@/use/useStore";
import {
    AllMutationTypes
} from "@/store/mutation-types";
import {
    AllActionTypes
} from "@/store/action-types";

export default defineComponent({
    name: "CompositionAPIComponent",
    setup(props) {
        const store = useStore()
        const counter = computed(() => store.getters.counterValue);
        const doubledCounter = computed(() => store.getters.doubledCounter);
        const isRootDispatchSet = computed(() => store.getters.getRootDispatch);

        function resetCounter() {
            store.commit(AllMutationTypes.RESET_COUNTER);
        }

        function setRootDispatch() {
            store.dispatch(AllActionTypes.COUNTER_CHECK);
        }
        async function getCounter() {
            await store.dispatch(AllActionTypes.GET_COUNTER, 100);
        }

        function crossCounterDispatch() {
            store.dispatch(AllActionTypes.CALL_COUNTER1)
        }

        return {
            counter,
            doubledCounter,
            resetCounter,
            getCounter,
            setRootDispatch,
            isRootDispatchSet,
            crossCounterDispatch
        };
    }
});
</script>
