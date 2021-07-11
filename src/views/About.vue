<template>
  <div>
    <h2>I am Server Rendered Page</h2>
    <p v-for="(item, index) in listData" :key="index">
      {{item.title}}
    </p>
    <test-world></test-world>
  </div>  
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onServerPrefetch } from 'vue'
import axios from 'axios';
import { AllActionTypes } from "@/store/action-types";
import { TestWorld } from 'vue3-component-library/components/testworld'
import { useStore } from '@/use/useStore';

export default defineComponent({
  name:'About',
  components: {
    TestWorld
  },
  setup(){
    const store = useStore();

    const fetchInitialData = async () => {
      const response = await axios('https://jsonplaceholder.typicode.com/posts')
      store.dispatch(AllActionTypes.USER_LISTS, response.data || [])
    }
    
    onServerPrefetch(async () => {
     await fetchInitialData()
    })

    const listData = computed(() => {
      return store.getters.getUserList || []
    });

    onMounted(async () => {
      if(!listData.value.length){
        await fetchInitialData();
      }
    })

    return {
      listData
    }
  }
})
</script>>
