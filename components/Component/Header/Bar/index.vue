<script>
  import lottie from "lottie-web";
  import logoAnimation from "../../../../assets/animations/logo-animation.json";

  export default {
    methods: {
      onClick() {
        this.$emit("toggle-menu");
      },
      loadLottieAnimation() {
        const animationContainer = document.getElementById("lottie-container");

        const animation = lottie.loadAnimation({
          container: animationContainer,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: logoAnimation,
        });
      },
    },
    mounted() {
      this.loadLottieAnimation();
    },
  };
</script>

<template>
  <header class="header">
    <div class="header__content">
      <div class="header__logo"><div id="lottie-container"></div></div>
      <div class="header__menu" id="menu-toggle-btn" @click="onClick()">
        <div class="header__menu--ball"></div>
        <div class="header__menu--ball"></div>
        <div class="header__menu--ball"></div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
  .header {
    display: flex;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 12;

    &__content {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 32px;
    }

    &__menu {
      cursor: pointer;
      height: 36px;
      width: 36px;
      border-radius: 100px;
      border: 2px solid #ddff51;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);

      &.active {
        transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
        transform: rotate(-90deg);
      }
      &:hover {
        transform: rotate(-45deg);

        &--ball:first-child {
          margin-right: 8px;
        }
        &--ball:last-child {
          margin-left: 8px;
        }
      }

      &--ball {
        height: 6px;
        width: 6px;
        border-radius: 100px;
        background-color: #ddff51;
        &:first-child {
          margin-right: 2px;
        }
        &:last-child {
          margin-left: 2px;
        }
      }
    }
  }

  #lottie-container {
    width: 208px;
    margin-top: 2px;
  }
</style>
