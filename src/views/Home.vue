<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    {{ mobileDevice ? 'Mobile' : 'Desktop' }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { useStore } from '@/use/useStore';
import { ROOT_STORE } from "@/store/constants";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld
  },
  setup(){
    const store = useStore();
    const mobileDevice = store.getters[ROOT_STORE.GETTERS.IS_MOBILE_DEVICE]
    
    return {
      mobileDevice
    }
  }
});
</script>
