<template>
  <div class="home">
    <section
      class="flex px-32 mx-32 p-56 flex-col items-start border-b border-grey-2"
    >
      <p class="text-48 my-14 font-bold">Hi all, I'am Shubhadip</p>
      <p class="text-48 mb-24 font-medium">I Work as FrontEnd Developer</p>
      <p class="text-24 w-2/3 text-left">
        Over 7+ Years of Experience and a passionate Full Stack Software
        Developer 🚀 having an experience of building Web and Mobile
        applications with JavaScript / Vuejs / Reactjs / RoR / React Native and
        some other cool libraries and frameworks.
      </p>
    </section>
    <section
      class="flex px-32 mx-32 p-56 flex-col items-start border-b border-grey-2"
    >
      <p class="text-48 text-24 text-black my-24">Proficiency</p>
      <div class="w-full">
        <div>
          <div class="text-28 text-black my-20 justify-start flex">
            FrontEnd
          </div>
          <div class="outer w-full bg-grey-2 h-24 rounded-16">
            <div class="inner bg-purple h-24 rounded-16 w-4/5"></div>
          </div>
        </div>
        <div>
          <div class="text-28 text-black my-20 justify-start flex">BackEnd</div>
          <div class="outer w-full bg-grey-2 h-24 rounded-16">
            <div class="inner bg-purple h-24 rounded-16 w-2/4"></div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="flex px-32 mx-32 p-56 flex-col items-start border-b border-grey-2"
    >
      <p class="text-48 text-24 text-black mt-18">Education</p>
      <div class="w-full">
        <div class="flex p-16 my-16 items-start border-b border-grey-2 w-4/5">
          <div class="flex items-start flex-col pl-16 ml-16 flex-1">
            <p class="text-24 text-black font-bold mb-2">Mumbai University</p>
            <p class="text-20 text-black font-medium mb-2">
              Bachelor of Engineering in Computer Science
            </p>
            <p class="text-16 text-black mb-2 font-medium">
              June 2010 - March 2014
            </p>
            <ul>
              <li class="text-16 text-grey-1 mb-2 ml-8">
                Augmented Reality Based Interactive Manual (B.Tech Project)
              </li>
            </ul>
          </div>
          <div class="flex items-center ">
            <img
              class="object-cover h-96 w-196"
              :src="require('@/assets/images/mumbai-logo.png')"
              alt="Mumbai university"
            />
          </div>
        </div>
        <div class="flex p-16 my-16 items-start w-4/5">
          <div
            class="flex items-start flex-col pl-16 ml-16 flex-1"
            style="max-width: 770px"
          >
            <p class="text-24 text-black font-bold mb-2">
              Maharashtra State Board
            </p>
            <p class="text-20 text-black font-medium mb-2">Science</p>
            <p class="text-16 text-black mb-2 font-medium">
              June 2008 - March 2010
            </p>
          </div>
          <div class="flex items-center ">
            <img
              class="object-cover h-96 w-196"
              :src="require('@/assets/images/rkt-logo.png')"
              alt="test"
            />
          </div>
        </div>
      </div>
    </section>
    <section
      class="flex px-32 mx-32 p-56 flex-col items-start border-b border-grey-2"
    >
      <p class="text-48 text-24 text-black mt-18">Work Experiences</p>
      <div class="w-full flex">
        <div
          class=" rounded-br-16 rounded-tr-16  rounded-bl-16 rounded-tl-16 pb-32 flex-1 shadow m-16 items-start border-b border-grey-2"
        >
          <div
            class="p-48 bewakoof-bg-yellow text-white flex justify-center items-center rounded-tr-16  rounded-tl-16"
          >
            <p class="font-bold text-24 uppercase tracking-wide px-32 py-16">
              Bewakoof
            </p>
          </div>
          <div class="bg-white text-black px-32 text-left mt-16">
            <p class="title text-24 font-bold px-16 py-8">Software Developer</p>
            <p class="experience text-24 font-medium px-16 py-8">
              June 2014 - May 2018
            </p>
            <p class="description px-16 text-14">
              Developing and Testing Algorithms, Apis (Ruby On Rails), Frontend
              and Backend panels related to Stock Management, Rto and Return
              processe
            </p>
            <ul class="px-48">
              <li
                class="sub-title list-disc mt-16 text-14 text-grey-1 text-left"
              >
                Revamped Bewakoof.com to ReactJs from AngularJs
              </li>
              <li class="sub-title list-disc text-14 text-grey-1 text-left">
                Used webSocket for real-time data analysis for marketing
                purposes
              </li>
            </ul>
          </div>
        </div>
        <div
          class=" rounded-br-16 rounded-tr-16  rounded-bl-16 rounded-tl-16 pb-32 flex-1 shadow m-16 items-start border-b border-grey-2"
        >
          <div
            class="p-48 coverfox-bg-orange text-white flex justify-center items-center rounded-tr-16  rounded-tl-16"
          >
            <p class="font-bold text-24 uppercase tracking-wide px-32 py-16">
              Coverfox
            </p>
          </div>
          <div class="bg-white text-black px-32 text-left mt-16">
            <p class="title text-24 font-bold px-16 py-8">Team Lead</p>
            <p class="experience text-24 font-medium px-16 py-8">
              June 2018 - April 2020
            </p>
            <p class="description px-16 text-14">
              Google Spot Integration For Coverfox
            </p>
            <ul class="px-48">
              <li
                class="sub-title list-disc mt-16 text-14 text-grey-1 text-left"
              >
                Have handled a team of frontend HTML/CSS workgroup, developing
                retail products and marketing landing
              </li>
              <li class="sub-title list-disc text-14 text-grey-1 text-left">
                Customer facing website Product apps:Bike Insurance, Car
                Insurance, Health Insurance, Term Insurance proposal forms,
                content landing pages etc.
              </li>
            </ul>
          </div>
        </div>
        <div
          class="rounded-16 pb-32 flex-1 shadow m-16 items-start border-b border-grey-2"
        >
          <div
            class="p-48 paytm-bg-blue text-white flex justify-center items-center rounded-tr-16  rounded-tl-16"
          >
            <p class="font-bold text-24 uppercase tracking-wide px-32 py-16">
              Paytm
            </p>
          </div>
          <div class="bg-white text-black px-32 text-left mt-16">
            <p class="title text-24 font-bold px-16 py-8">Technical Lead</p>
            <p class="experience text-24 font-medium px-16 py-8">
              Sep 2020 - Sep 2021
            </p>
            <p class="description px-16 text-14">
              Currently leading a team of 12 members, working in Developing
              insurance products
            </p>
            <ul class="px-48">
              <li
                class="sub-title list-disc mt-16 text-14 text-grey-1 text-left"
              >
                Handled Component libraries for Insurance Products in Vue 3 and
                Rollup.
              </li>
              <li class="sub-title list-disc text-14 text-grey-1 text-left">
                Created Health, Bike, Car Products in Vue 3
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section
      class="flex px-32 mx-32 p-56 flex-col items-start border-b border-grey-2"
    >
      <p class="text-48 text-24 text-black mt-18">Open Source Projects</p>
      <div class="w-full flex flex-row flex-wrap">
        <a
          :href="repo.svn_url"
          v-for="repo in repos"
          :key="repo.id"
          class="text-black-1 decoration-none relative rounded-8 pb-32 shadow m-16 items-start border-b border-grey-2 text-left flex-1"
        >
          <p class="title text-24 font-bold p-16">
            <span
              ><img
                :src="require('@/assets/images/book.png')"
                title="repository"
                height="18"
            /></span>
            {{ repo.name }}
          </p>
          <p class="title text-14 text-black-2 font-medium p-16 pt-0">
            {{ repo.description }}
          </p>
          <div class="absolute bottom-8px flex items-center justify-center">
            <div class="ml-16 flex items-center justify-center">
              <div>
                <span :class="['color-tag', repo.language]"></span>
              </div>
              <div class="ml-8 mt-2">{{ repo.language }}</div>
            </div>
            <div class="ml-16 flex">
              <div>
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="octicon octicon-star mr-1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                  ></path>
                </svg>
              </div>
              <div class="ml-8 mt-2">{{ repo.stargazers_count }}</div>
            </div>
            <div class="ml-16 flex">
              <div>
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="octicon octicon-repo-forked"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  ></path>
                </svg>
              </div>
              <div class="ml-8  mt-2">{{ repo.forks }}</div>
            </div>
          </div>
        </a>
      </div>
    </section>
    <section
      class="flex px-32 mx-32 p-56 flex-col items-start border-b border-grey-2"
    >
      <p class="text-48 text-24 text-black mt-18">Blogs</p>
      <div class="w-full flex flex-row flex-wrap">
        <a
          href="https://dev.to/shubhadip/adding-server-side-rendering-to-existing-vue-3-project-53oo"
          class="text-black-1 decoration-none relative rounded-8 pb-32 shadow m-16 items-start border-b border-grey-2 text-left flex-1 blog-1"
        >
          <p class="title text-24 font-bold p-16">
            Adding server-side-rendering to existing vue 3 project
          </p>
          <p class="title text-14 font-medium p-16 pt-0">
            Adding ssr support to vue 3 projects with vuex 4 and vue router 4.
          </p>
        </a>
        <a
          href="https://dev.to/shubhadip/vue-3-vuex-4-modules-typescript-2i2o"
          class="text-black-1 decoration-none relative rounded-8 pb-32 shadow m-16 items-start border-b border-grey-2 text-left flex-1 blog-2"
        >
          <p class="title text-24 font-bold p-16">
            Vue 3, Vuex 4 Modules, Typescript
          </p>
          <p class="title text-14 font-medium p-16 pt-0">
            Getting Started with vue 3, vuex 4 and vue router 4 in typescript.
          </p>
        </a>
        <a
          href="https://dev.to/shubhadip/vue-3-component-library-270p"
          class="text-black-1 decoration-none relative rounded-8 pb-32 shadow m-16 items-start border-b border-grey-2 text-left flex-1 blog"
        >
          <p class="title text-24 font-bold p-16">
            Building Vue 3 component library with typescript
          </p>
          <p class="title text-14 font-medium p-16 pt-0">
            create an component library in vue 3 with rollup & postcss config.
          </p>
        </a>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { RepoInterface } from "@/shared/interfaces";
import Axios from "axios";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "Home",
  setup() {
    const repos = ref<any>([]);

    onMounted(() => {
      Axios.get(
        "https://api.github.com/users/shubhadip/repos?per_page=100"
      ).then((data: any) => {
        repos.value = data.data.sort(
          (a: RepoInterface, b: RepoInterface) =>
            b.stargazers_count - a.stargazers_count
        );
        repos.value = repos.value.slice(0, 3);
      });
    });

    return {
      repos
    };
  }
});
</script>
<style lang="postcss" scoped>
@import "@css/css/_app-partials.css";

.color-tag::before {
  content: " \25CF";
  font-size: 22px;
}
.blog:hover {
  background: $blue-1;
  color: $white !important;
}
</style>
