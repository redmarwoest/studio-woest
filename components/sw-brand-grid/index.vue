<template>
  <section class="sw-brand-grid">
    <div class="sw-brand-grid__contact">
      <div class="sw-brand-grid__contact--container">
        <img src="/icons/sw-arrow-black.svg" alt="" />
        <img src="/icons/sw-get-in-contact.svg" alt="" />
        <img src="/icons/sw-arrow-black.svg" alt="" />
      </div>
    </div>
    <div class="sw-brand-grid__osr" id="osr-overlay">
      <img class="sw-brand-grid__image" src="/img/woning2-1.webp" alt="" />
      <div class="sw-brand-grid__osr--overlay"></div>
      <div class="sw-brand-grid__animation">
        <div id="osr"></div>
      </div>
      <div class="sw-brand-grid__information">
        <div class="sw-brand-grid__information--top">
          <div class="sw-brand-grid__information--top-project">
            <img src="/icons/sw-dot-icon.svg" alt="" />
            <h4>LATEST PROJECT</h4>
          </div>
          <div><img src="/icons/sw-website-icon.svg" alt="" /></div>
        </div>
        <div class="sw-brand-grid__information--bottom">
          <div><img src="/icons/sw-arrow-south-west.svg" alt="" /></div>
          <div class="sw-brand-grid__information--skills">
            <h5>webdesign</h5>
            <h5>webflow</h5>
            <h5>branding</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="sw-brand-grid__title">
      <div class="sw-brand-grid__title--container">
        <!-- <ComponentCanvas /> -->
        <h2></h2>
      </div>
    </div>
    <div class="sw-brand-grid__plnktn">
      <img class="sw-brand-grid__image" src="/img/plnktn.png" alt="" />
      <div class="sw-brand-grid__plnktn--overlay"></div>
      <div class="sw-brand-grid__animation" id="osr">
        <div id="osr"></div>
      </div>
      <div class="sw-brand-grid__information">
        <div class="sw-brand-grid__information--top">
          <div class="sw-brand-grid__information--top-project"></div>
          <div><img src="/icons/sw-website-icon.svg" alt="" /></div>
        </div>
        <div class="sw-brand-grid__information--bottom">
          <div><img src="/icons/sw-arrow-south-west.svg" alt="" /></div>
          <div class="sw-brand-grid__information--skills">
            <h5>webdesign</h5>
            <h5>webflow</h5>
            <h5>branding</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="sw-brand-grid__house">
      <img class="sw-brand-grid__image" src="/img/woning2-1.webp" alt="" />
      <div class="sw-brand-grid__house--overlay"></div>
      <div class="sw-brand-grid__animation" id="osr">
        <div id="osr"></div>
      </div>
      <div class="sw-brand-grid__information">
        <div class="sw-brand-grid__information--top">
          <div class="sw-brand-grid__information--top-project">
            <h4>VISIT WEBSITE</h4>
          </div>
          <div><img src="/icons/sw-website-icon.svg" alt="" /></div>
        </div>
        <div class="sw-brand-grid__information--bottom">
          <div><img src="/icons/sw-arrow-south-west.svg" alt="" /></div>
          <div class="sw-brand-grid__information--skills">
            <h5>webdesign</h5>
            <h5>webflow</h5>
            <h5>branding</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="sw-brand-grid__gm">
      <img class="sw-brand-grid__image" src="/img/woning2-1.webp" alt="" />
      <div class="sw-brand-grid__gm--overlay"></div>
      <div class="sw-brand-grid__animation" id="osr">
        <div id="osr"></div>
      </div>
      <div class="sw-brand-grid__information">
        <div class="sw-brand-grid__information--top">
          <div class="sw-brand-grid__information--top-project"></div>
          <div><img src="/icons/sw-website-icon.svg" alt="" /></div>
        </div>
        <div class="sw-brand-grid__information--bottom">
          <div><img src="/icons/sw-arrow-south-west.svg" alt="" /></div>
          <div class="sw-brand-grid__information--skills">
            <h5>webdesign</h5>
            <h5>webflow</h5>
            <h5>branding</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.sw-brand-grid {
  display: grid;
  grid-template-columns: repeat(10, auto);
  grid-template-rows: repeat(26, 55px);
  grid-template-areas:
    "osr osr osr osr osr osr osr osr osr contact"
    "osr osr osr osr osr osr osr osr osr contact"
    "osr osr osr osr osr osr osr osr osr contact"
    "osr osr osr osr osr osr osr osr osr contact"
    "osr osr osr osr osr osr osr osr osr contact"
    "osr osr osr osr osr osr osr osr osr contact"
    "osr osr osr osr osr osr osr osr osr contact"
    "osr osr osr osr osr osr osr osr osr contact"
    "title title title title title plntkn plntkn plntkn plntkn plntkn"
    "title title title title title plntkn plntkn plntkn plntkn plntkn"
    "title title title title title plntkn plntkn plntkn plntkn plntkn"
    "title title title title title plntkn plntkn plntkn plntkn plntkn"
    "title title title title title plntkn plntkn plntkn plntkn plntkn"
    "title title title title title plntkn plntkn plntkn plntkn plntkn"
    "title title title title title plntkn plntkn plntkn plntkn plntkn"
    "title title title title title plntkn plntkn plntkn plntkn plntkn"
    "title title title title title plntkn plntkn plntkn plntkn plntkn"
    "house house house house house plntkn plntkn plntkn plntkn plntkn"
    "house house house house house plntkn plntkn plntkn plntkn plntkn"
    "house house house house house plntkn plntkn plntkn plntkn plntkn"
    "house house house house house plntkn plntkn plntkn plntkn plntkn"
    "house house house house house gm gm gm gm gm"
    "house house house house house gm gm gm gm gm"
    "house house house house house gm gm gm gm gm"
    "house house house house house gm gm gm gm gm"
    "house house house house house gm gm gm gm gm";

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  &__osr {
    grid-area: osr;
    margin: 0px 8px 8px 24px;
    border-radius: 4px;
    transition: 0.3s;
    cursor: pointer;
    position: relative;

    @media (max-width: 768px) {
      margin: 8px 16px 8px 16px;
      height: 90vh;
    }

    &--overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
      border-radius: 5px;
      background-color: #433e74;
      transition: 0.6s;
      opacity: 100%;
    }

    &:hover > .sw-brand-grid__osr--overlay {
      background-color: #2f2f2f;
      opacity: 0.4;
    }

    &:hover {
      margin: 6px 14px 14px 30px;

      @media (max-width: 768px) {
        margin: 10px 18px 10px 18px;
      }
    }
  }

  &__plnktn {
    grid-area: plntkn;
    margin: 8px 24px 8px 8px;
    border-radius: 5px;
    transition: 0.3s;
    cursor: pointer;
    position: relative;

    @media (max-width: 768px) {
      margin: 8px 16px 8px 16px;
      height: 90vh;
    }

    &--overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
      border-radius: 5px;
      background-color: #0e3100;
      transition: 0.6s;
      opacity: 100%;
    }

    &:hover > .sw-brand-grid__plnktn--overlay {
      background-color: #2f2f2f;
      opacity: 40%;
    }

    &:hover {
      margin: 16px 32px 16px 16px;

      @media (max-width: 768px) {
        margin: 10px 18px 10px 18px;
      }
    }
  }

  &__house {
    grid-area: house;
    margin: 8px 8px 8px 24px;
    border-radius: 5px;
    transition: 0.3s;
    cursor: pointer;
    position: relative;

    @media (max-width: 768px) {
      margin: 8px 16px 8px 16px;
      height: 90vh;
    }

    &--overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
      border-radius: 5px;
      background-color: #bc4f00;
      transition: 0.6s;
      opacity: 100%;
    }

    &:hover {
      margin: 10px 10px 10px 26px;

      @media (max-width: 768px) {
        margin: 10px 18px 10px 18px;
      }
    }

    &:hover > .sw-brand-grid__house--overlay {
      background-color: #2f2f2f;
      opacity: 0.4;
    }
  }

  &__gm {
    grid-area: gm;
    margin: 8px 24px 8px 8px;
    border-radius: 5px;
    transition: 0.3s;
    cursor: pointer;
    position: relative;

    @media (max-width: 768px) {
      margin: 8px 16px 8px 16px;
      height: 90vh;
    }

    &--overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
      border-radius: 5px;
      background-color: #002a57;
      transition: 0.6s;
      opacity: 100%;
    }

    &:hover {
      margin: 10px 26px 10px 10px;

      @media (max-width: 768px) {
        margin: 10px 18px 10px 18px;
      }
    }

    &:hover > .sw-brand-grid__gm--overlay {
      background-color: #2f2f2f;
      opacity: 0.4;
    }
  }

  &__image {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: 5px;
    object-fit: cover;
  }

  &__animation {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    z-index: 2;
    div {
      width: 600px;
      height: 300px;
    }
  }

  &__information {
    display: flex;
    flex-direction: column;
    align-content: space-between;
    padding: 32px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    justify-content: space-between;
    transition: 0.3s;

    &:hover {
      padding: 28px;
    }

    &--skills {
      display: flex;

      h5 {
        &:nth-child(1) {
          margin-right: 16px;
        }

        &:nth-child(2) {
          margin-right: 16px;
        }
      }
    }

    &--top {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &-project {
        display: flex;
        img {
          margin-right: 12px;
        }
      }
    }

    &--bottom {
      display: flex;
      justify-content: space-between;
      align-items: end;
    }
  }

  &__contact {
    grid-area: contact;
    background-color: #fefce4;
    margin: 0px 24px 8px 8px;
    border-radius: 5px;
    position: relative;
    box-sizing: border-box;

    @media (max-width: 768px) {
      margin: 0px 16px 8px 16px;
      height: 80px;
    }

    &--container {
      padding-top: 32px;
      padding-bottom: 24px;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      align-content: space-between;
      justify-content: space-between;
      box-sizing: border-box;

      img {
        &:nth-child(3) {
        }
      }

      @media (max-width: 768px) {
        margin: 0px 16px 8px 16px;
        height: 100px;
        flex-direction: row;
        width: 100%;

        img {
          &:nth-child(2) {
            transform: rotate(90deg);
          }
        }
      }
    }
  }

  &__title {
    grid-area: title;
    margin: 8px 8px 8px 24px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;

    &--container {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      h2 {
        max-width: 520px;
        width: 90%;
      }
    }
  }
}
</style>

<script>
import lottie from "lottie-web";
import logoAnimation from "../../assets/animations/osr-animation.json";

export default {
  methods: {
    loadLottieAnimation(animationData, animationContainer, animationOverlay) {
      const animation = lottie.loadAnimation({
        container: animationContainer,
        renderer: "svg",
        loop: true,
        autoplay: false,
        animationData: animationData,
      });

      // Function to play the animation
      function playAnimation() {
        animation.play();
      }

      // Function to stop the animation
      function stopAnimation() {
        animation.stop();
      }

      // Hover event listeners
      animationOverlay.addEventListener("mouseenter", playAnimation);
      animationOverlay.addEventListener("mouseleave", stopAnimation);
    },
  },
  mounted() {
    const osrContainer = document.getElementById("osr");
    const osrOverlay = document.getElementById("osr-overlay");
    this.loadLottieAnimation(logoAnimation, osrContainer, osrOverlay);

    // const osrContainer = document.getElementById("osr");
    // const osrOverlay = document.getElementById("osr-overlay");
    // this.loadLottieAnimation(logoAnimation, osrContainer, osrOverlay);
  },
};
</script>
