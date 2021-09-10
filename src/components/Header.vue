<template>
  <header class="portfolio-header flex p-8 justify-between">
    <div class="logo px-14 py-12 text-24">
      <!-- <span class="text-grey-1"> &lt;</span> -->
      <span class="ml-4"><i> It's Shubho</i></span>
      <!-- <span class="text-grey-1"> /&gt;</span> -->
    </div>
    <div class="nav-contents">
      <ul class="flex">
        <li class="px-14 py-12  text-20">
          <a class="text-black decoration-none" href="#work"
            >Work Experiences</a
          >
        </li>
        <li class="px-14 py-12  text-20">
          <a class="text-black decoration-none" href="#open-source"
            >Open Source</a
          >
        </li>
        <li class="px-14 py-12  text-20">
          <a class="text-black decoration-none" href="#blog">Blogs</a>
        </li>
        <li class="px-14 py-12  text-20 ">
          <a class="text-black decoration-none" href="#skills">Skills</a>
        </li>
        <li class="px-14 py-12  text-20">
          <a class="text-black decoration-none" href="#contact">Contact Me</a>
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
