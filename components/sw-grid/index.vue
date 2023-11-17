<template>
  <section class="sw-grid">
    <sw-component-contact-button
      class="sw-grid__contact"
    ></sw-component-contact-button>
    <div class="sw-grid__osr sw-grid__container" id="osr-overlay">
      <img class="sw-grid__image" src="/img/woning2-1.webp" alt="" />
      <div class="sw-grid__osr--overlay sw-grid__overlay"></div>
      <a
        href="https://www.osr-realestate.nl"
        target="_blank"
        class="sw-grid__animation"
      >
        <div id="osr"></div>
      </a>
      <div class="sw-grid__information">
        <div class="sw-grid__information--top">
          <div class="sw-grid__information--top-project">
            <img src="/icons/sw-dot-icon.svg" alt="" />
            <h4>VISIT WEBSITE</h4>
          </div>
          <div><img src="/icons/sw-website-icon.svg" alt="" /></div>
        </div>
        <div class="sw-grid__information--bottom">
          <div><img src="/icons/sw-arrow-south-west.svg" alt="" /></div>
          <div class="sw-grid__information--skills">
            <h5>webdesign</h5>
            <h5>webflow</h5>
            <h5>branding</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="sw-grid__title">
      <div class="sw-grid__title--container">
        <h2>Storytelling, Branding & Webdevelopment</h2>
      </div>
    </div>
    <div class="sw-grid__plnktn sw-grid__container" id="plnktn-overlay">
      <img class="sw-grid__image" src="/img/plnktn.png" alt="" />
      <div class="sw-grid__plnktn--overlay sw-grid__overlay"></div>
      <a
        href="https://www.plnktn.com"
        target="_blank"
        class="sw-grid__animation"
        id="osr"
      >
        <div id="plnktn"></div>
      </a>
      <div class="sw-grid__information">
        <div class="sw-grid__information--top">
          <div class="sw-grid__information--top-project">
            <img src="/icons/sw-dot-icon.svg" alt="" />
            <h4>VISIT WEBSITE</h4>
          </div>
          <div><img src="/icons/sw-website-icon.svg" alt="" /></div>
        </div>
        <div class="sw-grid__information--bottom">
          <div><img src="/icons/sw-arrow-south-west.svg" alt="" /></div>
          <div class="sw-grid__information--skills">
            <h5>shopify</h5>
            <h5>packaging</h5>
            <h5>branding</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="sw-grid__house sw-grid__container" id="house-overlay">
      <img class="sw-grid__image" src="/img/woning2-1.webp" alt="" />
      <div class="sw-grid__house--overlay sw-grid__overlay"></div>
      <a
        href="https://www.houseoffamely.com"
        target="_blank"
        class="sw-grid__animation"
        id="osr"
      >
        <div id="house"></div>
      </a>
      <div class="sw-grid__information">
        <div class="sw-grid__information--top">
          <div class="sw-grid__information--top-project">
            <img src="/icons/sw-dot-icon.svg" alt="" />
            <h4 class="sw-grid__information--visit">VISIT WEBSITE</h4>
          </div>
          <div><img src="/icons/sw-website-icon.svg" alt="" /></div>
        </div>
        <div class="sw-grid__information--bottom">
          <div><img src="/icons/sw-arrow-south-west.svg" alt="" /></div>
          <div class="sw-grid__information--skills">
            <h5>webdesign</h5>
            <h5>custom dev</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="sw-grid__gm sw-grid__container" id="gm-overlay">
      <img class="sw-grid__image" src="/img/woning2-1.webp" alt="" />
      <div class="sw-grid__gm--overlay sw-grid__overlay"></div>
      <a
        href="https://www.gmcapital.nl"
        target="_blank"
        class="sw-grid__animation"
        id="osr"
      >
        <div id="gm"></div>
      </a>
      <div class="sw-grid__information">
        <div class="sw-grid__information--top">
          <div class="sw-grid__information--top-project">
            <img src="/icons/sw-dot-icon.svg" alt="" />
            <h4 class="sw-grid__information--visit">VISIT WEBSITE</h4>
          </div>
          <div><img src="/icons/sw-website-icon.svg" alt="" /></div>
        </div>
        <div class="sw-grid__information--bottom">
          <div><img src="/icons/sw-arrow-south-west.svg" alt="" /></div>
          <div class="sw-grid__information--skills">
            <h5>webdesign</h5>
            <h5>custom dev</h5>
            <h5>branding</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@media (max-width: 1024px) {
  .auto-hover-gm-overlay,
  .auto-hover-house-overlay,
  .auto-hover-plnktn-overlay,
  .auto-hover-osr-overlay {
    margin: 4px;
  }

  .auto-hover-osr-overlay > .sw-grid__osr--overlay {
    background-color: #2f2f2f;
    opacity: 0.4;
  }

  .auto-hover-plnktn-overlay > .sw-grid__plnktn--overlay {
    background-color: #2f2f2f;
    opacity: 0.4;
  }

  .auto-hover-house-overlay > .sw-grid__house--overlay {
    background-color: #2f2f2f;
    opacity: 0.4;
  }

  .auto-hover-gm-overlay > .sw-grid__gm--overlay {
    background-color: #2f2f2f;
    opacity: 0.4;
  }
}

.show {
  opacity: 1 !important;
}

.sw-grid {
  display: grid;
  max-width: 1600px;
  grid-template-columns: repeat(10, auto);
  grid-template-rows: repeat(26, 45px);
  gap: 16px;
  margin-left: 24px;
  margin-right: 24px;
  transform: translateY(25vh);
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

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    margin-right: 16px;
  }

  &__overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: 5px;
    background-color: #433e74;
    transition: 0.6s;
    opacity: 100%;
  }

  &__container {
    border-radius: 4px;
    transition: 0.3s;
    cursor: pointer;
    position: relative;

    @media (max-width: 1024px) {
      height: 90vh;
    }

    &:hover {
      margin: 4px;
    }
  }

  &__osr {
    grid-area: osr;

    &--overlay {
      background-color: #433e74;
    }

    &:hover {
      .sw-grid__information--top-project {
        opacity: 1;
      }

      .sw-grid__osr--overlay {
        background-color: #2f2f2f;
        opacity: 40%;
      }
    }
  }

  &__plnktn {
    grid-area: plntkn;

    &--overlay {
      background-color: #0e3100;

      &-visit {
        opacity: 0;
      }
    }

    &:hover {
      .sw-grid__information--top-project {
        opacity: 1;
      }

      .sw-grid__plnktn--overlay {
        background-color: #2f2f2f;
        opacity: 40%;
      }
    }
  }

  &__house {
    grid-area: house;

    &--overlay {
      background-color: #bc4f00;
    }

    &:hover {
      .sw-grid__information--top-project {
        opacity: 1;
      }

      .sw-grid__house--overlay {
        background-color: #2f2f2f;
        opacity: 40%;
      }
    }
  }

  &__gm {
    grid-area: gm;

    &--overlay {
      background-color: #002a57;
    }

    &:hover {
      .sw-grid__information--top-project {
        opacity: 1;
      }

      .sw-grid__gm--overlay {
        background-color: #2f2f2f;
        opacity: 40%;
      }
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

    @media (max-width: 450px) {
      padding: 24px;
    }

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
        opacity: 0;
        transition: 0.6s;

        img {
          margin-right: 12px;
        }
      }
    }

    &--bottom {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
  }

  &__contact {
    grid-area: contact;
  }

  &__title {
    grid-area: title;
    border-radius: 5px;
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;

    @media (max-width: 1024px) {
      height: 50vh;
    }

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
  data() {
    return {
      animations: {}, // Store animations for each element
      observer: null,
    };
  },
  methods: {
    loadLottieAnimation(
      animationData,
      animationContainer,
      animationOverlay,
      id
    ) {
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

      // Store the animation for the current element
      this.animations[id] = animation;
    },
    handleIntersection(entries, observer) {
      entries.forEach((entry) => {
        const ids = entry.target.id;
        const id = entry.target.id.replace("-overlay", "");

        if (entry.isIntersecting && entry.intersectionRatio >= 0.7) {
          entry.target.classList.add(`auto-hover-${ids}`);
          if (window.innerWidth < 1024) {
            entry.target
              .querySelector(".sw-grid__information--top-project")
              .classList.add("show");
            this.animations[id].play(); // Play the animation using the correct ID
          }
        } else {
          entry.target.classList.remove(`auto-hover-${ids}`);
          if (window.innerWidth < 1024) {
            entry.target
              .querySelector(".sw-grid__information--top-project")
              .classList.remove("show");
            this.animations[id].stop(); // Stop the animation using the correct ID
          }
        }
      });
    },
  },
  mounted() {
    // Load Lottie animation for the specified element
    const osrContainer = document.getElementById("osr");
    const osrOverlay = document.getElementById("osr-overlay");
    this.loadLottieAnimation(logoAnimation, osrContainer, osrOverlay, "osr");

    const plnktnContainer = document.getElementById("plnktn");
    const plntknOverlay = document.getElementById("plnktn-overlay");
    this.loadLottieAnimation(
      logoAnimation,
      plnktnContainer,
      plntknOverlay,
      "plnktn"
    );

    const houseContainer = document.getElementById("house");
    const houseOverlay = document.getElementById("house-overlay");
    this.loadLottieAnimation(
      logoAnimation,
      houseContainer,
      houseOverlay,
      "house"
    );

    const gmContainer = document.getElementById("gm");
    const gmOverlay = document.getElementById("gm-overlay");
    this.loadLottieAnimation(logoAnimation, gmContainer, gmOverlay, "gm");

    // Initialize Intersection Observer
    this.observer = new IntersectionObserver(this.handleIntersection, {
      threshold: 0.7, // Trigger when 70% or more of the element is in view
    });

    // Observe all elements with class "sw-grid__container"
    const containerElements = document.querySelectorAll(".sw-grid__container");
    containerElements.forEach((element) => {
      this.observer.observe(element);
    });

    const tl = gsap.timeline();

    tl.to(".sw-grid", {
      y: 0, // Target vertical position
      delay: 3.9,
    });
  },
  beforeDestroy() {
    // Disconnect the Intersection Observer when the component is destroyed
    if (this.observer) {
      this.observer.disconnect();
    }
  },
};
</script>
