<template>
  <div class="sw-hero">
    <div class="sw-hero__content">
      <div class="sw-hero__content--inner">
        <div class="sw-hero__content--animation" id="logo-animation"></div>
        <h1>Crafting digital experiences that convert.</h1>
      </div>
    </div>
  </div>
</template>

<script>
import lottie from "lottie-web";
import logoAnimation from "../../assets/animations/logo-animation.json";

export default {
  methods: {
    loadLottieAnimation(animationData, animationContainer) {
      const animation = lottie.loadAnimation({
        container: animationContainer,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    },
  },
  mounted() {
    const plnktnContainer = document.getElementById("logo-animation");
    this.loadLottieAnimation(logoAnimation, plnktnContainer);
  },
};
</script>

<style lang="scss">
.sw-hero {
  margin-top: -46px;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &__content {
    width: 90%;
    max-width: 964px;

    &--inner {
      display: flex;
      align-items: baseline;
      flex-direction: column;
    }

    &--animation {
      height: 48px;
    }
  }
}
</style>
