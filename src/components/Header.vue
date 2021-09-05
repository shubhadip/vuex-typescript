<template>
  <header class="portfolio-header">
    <div class="logo">Shubho</div>
    <div class="nav-contents">
      <ul>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">Work Experiences</a>
        </li>
        <li>
          <a href="#">Open Source</a>
        </li>
        <li>
          <a href="#">Achievements</a>
        </li>
        <li>
          <a href="#">Blogs</a>
        </li>
        <li>
          <a href="#">Talks</a>
        </li>
        <li>
          <a href="#">Contact Me</a>
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
