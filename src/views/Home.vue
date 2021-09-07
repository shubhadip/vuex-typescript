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
      <p class="text-48 text-24 text-black mt-18">Experiences</p>
      <div class="w-full flex">
        <div class="flex-1 p-16 my-16 items-start border-b border-grey-2">
          <div
            class="h-96 bewakoof-bg-yellow text-white flex justify-center items-center rounded-tr-16  rounded-tl-16"
          >
            <p class="font-bold text-24 uppercase tracking-wide">Bewakoof</p>
          </div>
          <div class="bg-white text-black">
            <p class="title text-24 font-bold">Software Developer</p>
            <p class="experience text-24 font-medium">June 2014 - May 2018</p>
            <p class="description text-24">Bewakoof</p>
            <p class="sub-title text-18 text-grey-1">Bewakoof</p>
            <p class="sub-title text-18 text-grey-1">Bewakoof</p>
            <p class="sub-title text-18 text-grey-1">Bewakoof</p>
          </div>
        </div>
        <div class="flex-1 p-16 my-16 items-start border-b border-grey-2">
          Coverfox
        </div>
        <div class="flex-1 p-16 my-16 items-start border-b border-grey-2">
          Paytm
        </div>
      </div>
    </section>
    <!-- <section>
      <p>Experiences</p>
      <div>

      </div>
    </section>
    <section>
      <p>Open Source Projects</p>
      <div>

      </div>
    </section>
    <section>
      <p>Blogs</p>
      <div>

      </div>
    </section> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {}
});
</script>
