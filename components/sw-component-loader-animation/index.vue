<template><div id="loader-animation"></div></template>

<script>
import lottie from "lottie-web";
import loaderAnimation from "../../assets/animations/loading.json";

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
    const loaderContainer = document.getElementById("loader-animation");
    this.loadLottieAnimation(loaderAnimation, loaderContainer);
  },
};
</script>

<style>
#loader-animation {
  width: 36px;
  margin-bottom: 6px;
}
</style>
