<template>
  <header class="portfolio-header flex p-8 justify-between">
    <div class="logo px-14 py-12 text-24">
      <!-- <span class="text-grey-1"> &lt;</span> -->
      <span class="ml-4"><i> It's Shubho</i></span>
      <!-- <span class="text-grey-1"> /&gt;</span> -->
    </div>
    <div class="nav-contents">
      <ul class="flex">
        <li class="px-14 py-12  text-20 hover\:bg-black:hover">
          <a class="text-black decoration-none" href="#">Skills</a>
        </li>
        <li class="px-14 py-12  text-20">
          <a class="text-black decoration-none" href="#">Work Experiences</a>
        </li>
        <li class="px-14 py-12  text-20">
          <a class="text-black decoration-none" href="#">Open Source</a>
        </li>
        <li class="px-14 py-12  text-20">
          <a class="text-black decoration-none" href="#">Blogs</a>
        </li>
        <li class="px-14 py-12  text-20">
          <a class="text-black decoration-none" href="#">Contact Me</a>
        </li>
      </ul>
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  setup() {
    return {};
  }
});
</script>
<style lang="postcss" scoped>
.nav-contents {
  ul {
    li {
    }
  }
}
</style>
