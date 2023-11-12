<template>
  <div ref="main" class="sw-review">
    <div class="sw-review__overlay">
      <div class="sw-review__content">
        <h3 class="sw-review__content--text">
          “Thanks to Studio Woest, our brand story came alive online, attracting
          a more specific audience and turning them into happy customers for our
          e-commerce store. They’re the secret sauce behind our digital
          success!”
        </h3>
        <h4 class="sw-review__content--title">Thom Siersema</h4>
        <h4 class="sw-review__content--subtitle">Managing Director plnktn.</h4>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, onUnmounted, onUpdated, ref } from "vue";
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

    onMounted(() => {
      ctx = gsap.context(() => {
        gsap.set(".sw-review__overlay", { width: "100%", borderRadius: "0px" });

        ScrollTrigger.create({
          trigger: ".sw-review",
          start: "bottom 50%",
          onEnter: () => {
            gsap.to(".sw-review__overlay", {
              width: "96%",
              borderRadius: "72px",
              duration: 0.5,
            });
          },
          onLeaveBack: () => {
            gsap.to(".sw-review__overlay", {
              width: "100%",
              borderRadius: "0px",
              duration: 0.5,
            });
          },
        });
      }, main.value);
    });

    onUpdated(() => {
      // Update the trigger when the component is updated
      ScrollTrigger.refresh();
    });

    onUnmounted(() => {
      ctx.revert();
    });

    return { main };
  },
};
</script>

<style lang="scss">
.sw-review {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;

  &__overlay {
    height: 100vh;
    background-color: #111;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__content {
    width: 90%;
    max-width: 680px;

    &--text {
      margin-bottom: 24px;
    }

    &--title {
      margin-bottom: 4px;
    }

    &--subtitle {
      font-family: "Matter-Regular";
    }
  }
}
</style>
