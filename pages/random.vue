<template>
    <!-- <div ref="{main}"> -->
      <!-- <SectionHero class="section-hero" />
      <SectionGrid />
      <SectionTest /> -->
    <!-- </div> -->
  </template>
  
  <script>
    import { onMounted, onUnmounted, ref } from "vue";
    import gsap from "gsap-trial";
    import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
  
    if (typeof window !== "undefined") {
      gsap.config({
        trialWarn: false,
      });
      gsap.registerPlugin(ScrollTrigger);
    }
  
    export default {
      setup() {
        const main = ref();
        let ctx;
  
        onMounted(() => {
          ctx = gsap.context(() => {
            ScrollTrigger.create({
              trigger: ".section-hero",
              start: "top top",
              end: "100",
            });
          }, main.value);
        });
        onUnmounted(() => {
          ctx.revert();
        });
  
        return { main };
      },
    };
  </script>
  
  <style>
    div {
    }
  </style>
  