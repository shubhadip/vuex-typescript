<template>
  <div class="home">
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
      class="flex px-32 mx-32 pb-56 flex-col items-start border-b border-grey-2"
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
            style="min-width: 770px"
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
    <section>
      <p>Education</p>
      <div>
        <div class="flex items-center ">
        </div>
        <!-- <div class="flex items-center ">
          <img class="object-cover h-96 w-196" :src="require('@/assets/images/mumbai-logo.png')" alt="Mumbai university">
        </div> -->
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
