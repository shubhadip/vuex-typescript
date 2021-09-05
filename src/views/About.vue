<template>
  <div>
    <h2>I am Server Rendered Page</h2>
    <p v-for="(item, index) in listData" :key="index">
      {{ item.title }}
    </p>
    <test-world></test-world>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onServerPrefetch } from "vue";
import axios from "axios";
import { TestWorld } from "vue3-component-library/components/testworld";
import { useStore } from "@/use/useStore";
import { ROOT_STORE } from "@/store/constants";

export default defineComponent({
  name: "About",
  components: {
    TestWorld
  },
  setup() {
    const store = useStore();

    const fetchInitialData = async () => {
      const response = await axios(
        "https://jsonplaceholder.typicode.com/posts"
      );
      store.dispatch(ROOT_STORE.ACTIONS.USER_LISTS, response.data || []);
    };

    onServerPrefetch(async () => {
      await fetchInitialData();
    });

    const listData = computed(() => {
      return store.getters[ROOT_STORE.GETTERS.USER_LISTS] || [];
    });

    onMounted(async () => {
      if (!listData.value.length) {
        await fetchInitialData();
      }
    });

    return {
      listData
    };
  }
});
</script>
>
