<template>
  <div ref="{main}">
    <div id="smooth-content">
      <NuxtPage />
    </div>
  </div>
</template>

<script>
  import { onMounted, onUnmounted, ref } from "vue";
  import gsap from "gsap-trial";
  import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
  import { ScrollSmoother } from "gsap-trial/ScrollSmoother";

  if (typeof window !== "undefined") {
    gsap.config({
      trialWarn: false,
    });
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  }

  export default {
    data: () => ({
      loading: false,
    }),
    setup() {
      const main = ref();
      let ctx;
      let smoother;

      onMounted(() => {
        ctx = gsap.context(() => {
          smoother = ScrollSmoother.create({
            smooth: 1,
            effects: true,
          });
        }, main.value);
      });
      onUnmounted(() => {
        ctx.revert();
      });

      return { main }; // Return showHallo
    },
  };
</script>

<style>
  body {
    background-color: #111;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
</style>

