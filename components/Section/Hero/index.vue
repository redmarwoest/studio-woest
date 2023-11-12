<template>
  <div ref="{main}" class="something">
    <div class="both">
      <div :class="{ scrolled: isScrolled, 'not-scrolled': !isScrolled }"></div>
      <section class="home-section">
        <div class="home-section__content">
          <h1 id="target1">
            <div class="animate">Crafting {{ "" }}</div>
            <div class="animate bold">digital {{ "" }}</div>
            <div class="animate bold">experiences {{ "" }}</div>
          </h1>
          <h1 id="target2">
            <div class="animate">that {{ "" }}</div>
            <div class="animate">convert.</div>
          </h1>
          <div class="home-section__actions">
            <button class="animate bold">
              convert your brand here
              <span class="dot"></span>
            </button>
          </div>
        </div>
        <div class="scrolldown">hallo</div>
        <ComponentCanvas />
      </section>
    </div>
  </div>
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
    data() {
      return {
        isScrolled: false,
      };
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);

      this.handleScroll();
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
        const scrollThreshold = 100;

        this.isScrolled = window.scrollY > scrollThreshold;

        if (window.scrollY === 0) {
          this.isScrolled = false;
        }
      },
    },
    setup() {
      const main = ref();
      let ctx;
      let smoother;

      onMounted(() => {
        gsap.to(".animate", {
          opacity: 100,
          y: 0,
          stagger: 0.1,
          delay: 0.5,
          duration: 0.1,
        });
        ctx = gsap.context(() => {
          ScrollTrigger.create({
            trigger: ".both",
            pin: true,
            start: "top",
            end: "300",
          });
          gsap.to(".animate", {
            opacity: 100,
            y: -200,
            stagger: 0.1,
            duration: 0.1,
            scrollTrigger: {
              trigger: ".something",
              start: "top",
              end: "100",
            },
          });
          gsap.to(".animate", {
            opacity: 100,
            y: 0,
            stagger: 0.1,
            duration: 0.1,
            delay: 0.5,
            scrollTrigger: {
              trigger: ".something",
              start: "100",
              end: "top",
            },
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
<style lang="scss" scoped>
  .scrolled {
    width: 100vw;
    height: 101vh;
    background-color: #111;
    position: absolute;
    opacity: 100%;
    z-index: 3;
    transition: 0.3s;
  }

  #target1 {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    display: flex;
    margin-bottom: 12px;
  }

  #target2 {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    display: flex;
    margin-top: 12px;
  }
  .animate {
    transform: translateY(115px);
    transition: transform 0.5s;
    overflow: hidden;
    margin-right: 16px;
  }

  .not-scrolled {
    width: 100vw;
    height: 101vh;
    background-color: #111;
    position: absolute;
    opacity: 0%;
    z-index: 1;
    transition: 0.8s;
  }
  .something {
    width: 100vw;
    height: 120vh;
  }
  .home-section {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    position: absolute;

    &__content {
      position: absolute;
      width: 70%;
      text-align: left;
      z-index: 1;
    }
  }

  .scrolldown {
    position: absolute;
    bottom: 36px;
    left: 36px;
  }

  .home-section__actions {
    overflow: hidden;
  }

  button {
    background-color: transparent;
    border: none;
    font-size: 18px;
    color: #ddff51;
    padding: 12px 24px;
    letter-spacing: 0.5px;
    border: 2px solid #ddff51;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: #ddff51;
      color: black;
      transition: 0.3s;
    }
  }
</style>
