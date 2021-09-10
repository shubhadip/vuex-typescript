<template>
  <div class="logo px-14 py-12 text-24 text-left relative border-b">
    <span class="ml-4 text-black"><i> It's Shubho</i></span>
    <a
      href="#contact"
      class="text-black decoration-none ml-4 absolute right-16px"
    >
      <i class="fas fa-user text-18"></i>
    </a>
  </div>
  <div class="pb-64">
    <section
      class="flex py-16 mx-16 mt-0 flex-col items-start border-b border-grey-2"
    >
      <p class="text-24 font-bold">Hi all, I'am Shubhadip</p>
      <p class="text-12 text-left mt-16 text-black">
        Over 7+ Years of Experience and a passionate Full Stack Software
        Developer 🚀 having an experience of building Web and Mobile
        applications with JavaScript / Vue 3 / Reactjs / Webpack / RoR and some
        other cool libraries and frameworks.
      </p>
    </section>
    <section
      class="flex py-16 mx-16 mt-0 flex-col items-start border-b border-grey-2"
    >
      <p class="text-24 font-bold">Proficiency</p>
      <div class="w-full">
        <div>
          <div class="text-18 text-black my-14 justify-start flex">
            FrontEnd
          </div>
          <div class="outer w-full bg-grey-2 h-16 rounded-16">
            <div class="inner bg-purple h-16 rounded-16 w-4/5"></div>
          </div>
        </div>
        <div>
          <div class="text-18 text-black my-16 justify-start flex">BackEnd</div>
          <div class="outer w-full bg-grey-2 h-16 rounded-16">
            <div class="inner bg-purple h-16 rounded-16 w-2/4"></div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="work"
      class="flex py-16 mx-16 mt-0 flex-col items-start border-b border-grey-2"
    >
      <p class="text-24 text-black mt-12">Work Experiences</p>
      <div class="w-full">
        <div class="rounded-16 pb-32 shadow my-16 border-b border-grey-2">
          <div
            class="p-18 bewakoof-bg-yellow text-white rounded-tr-16 rounded-tl-16"
          >
            <p class="font-bold text-18 uppercase tracking-wide py-14">
              Bewakoof
            </p>
          </div>
          <div class="bg-white text-black px-18 text-left mt-16">
            <p class="title text-16 font-bold p-8">Software Developer</p>
            <p class="experience text-14 font-medium p-8">
              June 2014 - May 2018
            </p>
            <p class="description px-16 text-12">
              Developing and Testing Algorithms, Apis (Ruby On Rails), Frontend
              and Backend panels related to Stock Management, Rto and Return
              processe
            </p>
            <ul class="px-24">
              <li
                class="sub-title list-disc mt-16 text-12 text-grey-1 text-left"
              >
                Revamped Bewakoof.com to ReactJs from AngularJs
              </li>
              <li class="sub-title list-disc text-12 text-grey-1 text-left">
                Used webSocket for real-time data analysis for marketing
                purposes
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="w-full">
        <div class="rounded-16 pb-32 shadow my-16 border-b border-grey-2">
          <div
            class="p-18 coverfox-bg-orange text-white rounded-tr-16 rounded-tl-16"
          >
            <p class="font-bold text-18 uppercase tracking-wide py-14">
              Coverfox
            </p>
          </div>
          <div class="bg-white text-black px-18 text-left mt-16">
            <p class="title text-16 font-bold p-8">Team Lead</p>
            <p class="experience text-14 font-medium p-8">
              June 2018 - April 2020
            </p>
            <p class="description px-16 text-12">
              Google Spot Integration For Coverfox
            </p>
            <ul class="px-24">
              <li
                class="sub-title list-disc mt-16 text-12 text-grey-1 text-left"
              >
                Have handled a team of frontend HTML/CSS workgroup, developing
                retail products and marketing landing
              </li>
              <li class="sub-title list-disc text-12 text-grey-1 text-left">
                Customer facing website Product apps:Bike Insurance, Car
                Insurance, Health Insurance, Term Insurance proposal forms,
                content landing pages etc.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="w-full">
        <div class="rounded-16 pb-32 shadow my-16 border-b border-grey-2">
          <div
            class="p-18 paytm-bg-blue text-white rounded-tr-16 rounded-tl-16"
          >
            <p class="font-bold text-18 uppercase tracking-wide py-14">
              Paytm
            </p>
          </div>
          <div class="bg-white text-black px-18 text-left mt-16">
            <p class="title text-16 font-bold p-8">Technical Lead</p>
            <p class="experience text-14 font-medium p-8">
              Sep 2020 - Sep 2021
            </p>
            <p class="description px-16 text-12">
              Currently leading a team of 12 members, working in Developing
              insurance products
            </p>
            <ul class="px-24">
              <li
                class="sub-title list-disc mt-16 text-12 text-grey-1 text-left"
              >
                Handled Component libraries for Insurance Products in Vue 3 and
                Rollup.
              </li>
              <li class="sub-title list-disc text-12 text-grey-1 text-left">
                Created Health, Bike, Car Products in Vue 3
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section
      id="open-source"
      class="flex py-16 mx-16 mt-0 flex-col items-start border-b border-grey-2"
    >
      <p class="text-24 text-black mt-12">Open Source Projects</p>
      <div class="w-full flex flex-col">
        <a
          :href="repo.svn_url"
          v-for="repo in repos"
          :key="repo.id"
          class="text-black-1 decoration-none relative rounded-8 pb-32 shadow my-16 items-start border-b border-grey-2 text-left flex-1"
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
          <p class="title text-14 font-medium p-16 pt-0 text-grey">
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
      <p class="my-24 w-full">
        <a
          href="https://shubhadip.medium.com"
          class="btn btn-md p-16 bg-black-2 text-white text-14 font-bold rounded-4 decoration-none pointer"
        >
          Other Projects
        </a>
      </p>
    </section>
    <section
      class="flex py-16 mx-16 mt-0 flex-col items-start border-b border-grey-2"
      id="blog"
    >
      <p class="text-24 text-black mt-12">Blogs</p>
      <div class="w-full flex flex-col mt-12">
        <a
          href="https://dev.to/shubhadip/adding-server-side-rendering-to-existing-vue-3-project-53oo"
          class="text-black-1 decoration-none relative rounded-8 pb-14 px-8 shadow mb-12 items-start border-b border-grey-2 text-left flex-1 blog-1"
        >
          <p class="title text-16 font-bold p-8 pl-4">
            Adding server-side-rendering to existing vue 3 project
          </p>
          <p class="title text-12 font-medium p-8 pt-0 text-grey">
            Adding ssr support to vue 3 projects with vuex 4 and vue router 4.
          </p>
        </a>
        <a
          href="https://dev.to/shubhadip/vue-3-vuex-4-modules-typescript-2i2o"
          class="text-black-1 decoration-none relative rounded-8 pb-14 px-8 shadow mb-12 items-start border-b border-grey-2 text-left flex-1 blog-2"
        >
          <p class="title text-16 font-bold p-8 pl-4">
            Vue 3, Vuex 4 Modules, Typescript
          </p>
          <p class="title text-12 font-medium p-16 pt-0 text-grey">
            Getting Started with vue 3, vuex 4 and vue router 4 in typescript.
          </p>
        </a>
        <a
          href="https://dev.to/shubhadip/vue-3-component-library-270p"
          class="text-black-1 decoration-none relative rounded-8  pb-14 px-8 shadow mb-12 items-start border-b border-grey-2 text-left flex-1 blog"
        >
          <p class="title text-16 font-bold p-8 pl-4">
            Building Vue 3 component library with typescript
          </p>
          <p class="title text-12 font-medium p-8 pt-0 text-grey">
            create an component library in vue 3 with rollup & postcss config.
          </p>
        </a>
      </div>
      <p class="my-24 w-full">
        <a
          href="https://dev.to/shubhadip"
          class="btn btn-md p-16 bg-black-2 text-white text-14 font-bold rounded-4 decoration-none pointer"
        >
          Other Articles
        </a>
      </p>
    </section>
    <section
      class="flex py-16 mx-16 mt-0 flex-col items-start border-b border-grey-2"
      id="skills"
    >
      <p class="text-24 text-black mt-12">Technologies</p>
      <p class="text-12 font-medium text-grey text-left my-8 mr-8">
        Here are few Technologies, I am Working with that. Efficient to Build
        Best user friendly Web Application with all W3C Standard Criteria
        Standard. Great Ability to write clear, Maintainable, Well-Documented,
        Well-Commented & Efficient Code for Web Development.
      </p>
      <div class="flex flex-wrap text-center justify-center items-center">
        <i class="text-24 m-8 devicon-vuejs-plain colored"></i>
        <i class="text-24 m-8 devicon-react-original-wordmark colored"></i>
        <i class="text-24 m-8 devicon-javascript-plain colored"></i>
        <i class="text-24 m-8 devicon-typescript-plain colored"></i>
        <i class="text-24 m-8 devicon-html5-plain colored"></i>
        <i class="text-24 m-8 devicon-sass-original colored"></i>
        <i class="text-24 m-8 devicon-css3-plain colored"></i>
        <i class="text-24 m-8 devicon-rails-plain colored"></i>
        <i class="text-24 m-8 devicon-github-original colored"></i>
        <i class="text-24 m-8 devicon-bitbucket-original colored"></i>
        <i class="text-24 m-8 devicon-bootstrap-plain colored"></i>
        <i class="text-24 m-8 devicon-denojs-original colored"></i>
        <i class="text-24 m-8 devicon-jest-plain colored"></i>
        <i class="text-24 m-8 devicon-mysql-plain colored"></i>
        <i class="text-24 m-8 devicon-redux-original colored"></i>
        <i class="text-24 m-8 devicon-storybook-plain colored"></i>
        <i class="text-24 m-8 devicon-webpack-plain colored"></i>
      </div>
    </section>
    <section
      class="flex py-8 mx-16 mt-0 flex-col items-start border-b border-grey-2"
    >
      <p class="text-24 text-black mt-12">Education</p>
      <div class="w-full">
        <div class="flex p-8 my-8 items-start border-b border-grey-2">
          <div class="flex items-start flex-col  text-left">
            <p class="text-14 text-black font-bold mb-2">Mumbai University</p>
            <p class="text-14 text-black font-medium mb-2">
              Bachelor of Engineering in Computer Science
            </p>
            <p class="text-14 text-black mb-2 font-medium">
              June 2010 - March 2014
            </p>
            <ul>
              <li class="text-12 text-grey-1 mb-2 ml-8">
                Augmented Reality Based Interactive Manual (B.Tech Project)
              </li>
            </ul>
          </div>
        </div>
        <div class="flex p-8 my-8 items-start text-left">
          <div class="flex items-start flex-col">
            <p class="text-14 text-black font-bold mb-2">
              Maharashtra State Board
            </p>
            <p class="text-14 text-black font-medium mb-2">Science</p>
            <p class="text-14 text-black mb-2 font-medium">
              June 2008 - March 2010
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="flex py-16 mx-16 mt-0 flex-col items-start" id="contact">
      <p class="text-24 text-black mt-8">Reach Out to me !</p>
      <p class="text-12 text-black-1 font-medium mt-8">
        Open Source Contributor 🔥 | Tech Writer ✍️ | Tech Enthusiast
      </p>
      <div>
        <div class="social-media-div mt-16">
          <a
            href="https://github.com/shubhadip"
            class="icon-button github"
            target="_blank"
            rel="noopener noreferrer"
            ><i class="fab fa-github"></i><span></span
          ></a>
          <a
            href="https://www.linkedin.com/in/shubhadip-maity/"
            class="icon-button linkedin"
            target="_blank"
            rel="noopener noreferrer"
            ><i class="fab fa-linkedin-in"></i><span></span
          ></a>
          <a
            href="mailto:shubhadip.maity@gmail.com"
            class="icon-button google"
            target="_blank"
            rel="noopener noreferrer"
            ><i class="fab fa-google"></i><span></span
          ></a>
          <a
            href="https://shubhadip.medium.com/"
            class="icon-button medium"
            target="_blank"
            rel="noopener noreferrer"
            ><i class="fab fa-medium"></i><span></span
          ></a>
          <a
            href="https://stackoverflow.com/users/6711445/shubh"
            class="icon-button stack-overflow"
            target="_blank"
            rel="noopener noreferrer"
            ><i class="fab fa-stack-overflow"></i><span></span
          ></a>
          <a
            href="https://dev.to/shubhadip"
            class="icon-button medium"
            target="_blank"
            rel="noopener noreferrer"
            ><i class="fab fa-dev"></i><span></span
          ></a>
        </div>
      </div>
    </section>
  </div>
  <div class="relative">
    <div
      class="fixed bottom-0 flex w-full border-t border-b text-grey-1 bg-white text-center"
    >
      <a href="#skills" class="flex-1  p-10 border-l font-bold text-black-2"
        >Skills</a
      >
      <a href="#work" class="flex-1 p-10 border-l font-bold text-black-2"
        >Work</a
      >
      <a href="#blog" class="flex-1 p-10 border-l font-bold text-black-2"
        >Blogs</a
      >
      <a href="#open-source" class="flex-1 p-10 border-l font-bold text-black-2"
        >Projects</a
      >
    </div>
  </div>
</template>
<script lang="ts">
import { RepoInterface } from "@/shared/interfaces";
import Axios from "axios";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "HomeMobile",
  setup() {
    const repos = ref<RepoInterface[]>([]);

    onMounted(() => {
      const t = localStorage.getItem("data");

      if (!t) {
        Axios.get(
          "https://api.github.com/users/shubhadip/repos?per_page=100"
        ).then((data: { data: RepoInterface[] }) => {
          repos.value = data.data.sort(
            (a: RepoInterface, b: RepoInterface) =>
              b.stargazers_count - a.stargazers_count
          );
          repos.value = repos.value.slice(0, 3);
          localStorage.setItem("data", JSON.stringify(repos.value));
        });
      } else {
        repos.value = JSON.parse(t);
      }
    });

    return {
      repos
    };
  }
});
</script>
