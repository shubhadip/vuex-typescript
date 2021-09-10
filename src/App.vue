<template>
  <desktop-header v-if="isDesktopDevice" />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import { isDesktop } from "./shared/misc";

export default defineComponent({
  name: "App",
  components: {
    "desktop-header": Header
  },
  setup() {
    const isDesktopDevice = isDesktop();
    console.log('isDesktopDevice',isDesktopDevice);
    return {
      isDesktopDevice
    };
  }
});
</script>

<style lang="postcss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
