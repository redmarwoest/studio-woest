<script setup>
const percentage = ref(0);

onMounted(() => {
  const tl = gsap.timeline();

  tl.to(percentage, {
    progress: 100,
    duration: 1.5,
    onUpdate() {
      percentage.value = Math.floor(percentage.progress);
    },
    onComplete() {
      general.isPreLoaderVisible = false;
      general.scrollLenis.start();
    },
  });

  tl.fromTo(
    ".sw-loader",
    {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    },
    {
      delay: 0.3,
      clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
      duration: 0.7,
    }
  );

  tl.fromTo(
    ".sw-loader--underlay",
    {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    },
    {
      clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
      duration: 0.4,
    }
  );
});
</script>

<template>
  <div class="sw-loader--underlay"></div>
  <div class="sw-loader">
    <div class="sw-loader__content">
      <span>{{ percentage }}%</span>
    </div>
  </div>
</template>

<style lang="scss">
.sw-loader--underlay {
  width: 100%;
  height: 100vh;
  position: fixed;
  inset: 0;
  display: flex;
  align-item: flex-end;
  justify-content: start;
  z-index: 3;
  background-color: #bc4f00;
}

.sw-loader {
  width: 100%;
  height: 100vh;
  position: fixed;
  inset: 0;
  display: flex;
  align-item: flex-end;
  justify-content: start;
  z-index: 4;
  background-color: #433e74;

  @media (max-width: 480px) {
    align-items: center;
    justify-content: center;
  }

  &__content {
    padding: 48px;

    @media (max-width: 480px) {
      transform: rotate(-90deg);
      padding: 16px;
    }

    span {
      font-size: 280px;
      color: #fefce4;

      @media (max-width: 480px) {
        font-size: 240px;
      }
    }
  }
}
</style>
