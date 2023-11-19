<template>
  <div class="sw-hero">
    <div class="sw-hero__content">
      <div class="sw-hero__content--inner">
        <div class="sw-hero__content--animation">
          <div id="logo-animation"></div>
        </div>
        <div class="text-animation">
          <h1>
            <div class="text-animation__sentence">
              <div class="text-animation__sentence--word">
                <div class="first-animation">
                  <span>C</span><span>r</span><span>a</span><span>f</span
                  ><span>t</span><span>i</span><span>n</span><span>g</span>
                </div>
              </div>
              <div class="text-animation__sentence--word">
                <div>
                  <span>d</span>
                  <span class="svg-animation"
                    ><span class="svg-animation__letter">i</span
                    ><span
                      class="svg-animation__animation"
                      id="bolt-animation"
                    ></span
                  ></span>
                  <span class="g">g</span><span>i</span><span>t</span
                  ><span>a</span><span>l</span>
                </div>
              </div>
            </div>
            <div class="text-animation__sentence">
              <div class="text-animation__sentence--word">
                <div>
                  <span>e</span><span>x</span><span>p</span>
                  <span class="three-animation">
                    <span class="three-animation__letter">e</span>
                    <span class="three-animation__3d"
                      ><sw-component-three-block
                    /></span> </span
                  ><span class="n">r</span><span>i</span>
                  <span>e</span>
                  <span>n</span><span>c</span><span>e</span><span>s</span>
                </div>
              </div>
              <div class="text-animation__sentence--word">
                <div>
                  <span>t</span><span>h</span><span>a</span><span>t</span>
                </div>
              </div>
            </div>
            <div class="text-animation__sentence">
              <div class="text-animation__sentence--word">
                <div>
                  <span>c</span><span>o</span><span>n</span><span>v</span
                  ><span class="animation-e">e</span><span>r</span
                  ><span>t</span>.
                </div>
              </div>
            </div>
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.svg-animation {
  &__animation {
    position: absolute;
    opacity: 0;
    transform: translateY(20px);
    transition: transform 0.05s;
    svg {
      margin-left: -36px;
      width: 64px !important;

      @media (max-width: 1000px) {
        width: 52px !important;
        margin-left: -28px;
      }

      @media (max-width: 480px) {
        width: 32px !important;
        margin-left: -12px;
      }
    }
  }
}

.three-animation {
  position: relative;

  &__letter {
    position: relative;
    opacity: 1;
  }
  &__3d {
    position: absolute;
    opacity: 0;
    transform: translateY(40px);
    transition: transform 0.1s;

    canvas {
      margin-left: -72px;

      @media (max-width: 1000px) {
        margin-left: -52px;
      }

      @media (max-width: 480px) {
        margin-left: -28px;
      }

      @media (max-width: 376px) {
        margin-left: -28px;
      }
    }
  }

  canvas {
    margin-bottom: -8px;

    @media (max-width: 480px) {
      margin-bottom: -4px;
    }
  }
}

.text-animation {
  &__sentence {
    display: flex;

    @media (max-width: 768px) {
      flex-direction: column;
    }
    &--word {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);

      div {
        transform: translateY(115px);
        transition: transform 0.5s;
      }

      @media (max-width: 1024px) {
        height: 90px;
      }

      @media (max-width: 480px) {
        height: 58px;
      }

      &:nth-child(1) {
        margin-right: 24px;

        @media (max-width: 420px) {
          margin-right: 0px;
        }
      }
    }
  }
}

.sw-hero {
  margin-top: -46px;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-height: 768px) and (max-width: 480px) {
    height: 75vh;
  }
  &__content {
    width: 90%;
    max-width: 1000px;

    &--inner {
      display: flex;
      align-items: baseline;
      flex-direction: column;
    }

    &--animation {
      margin-left: 0;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);

      div {
        width: 240px;
        transform: translateY(115px);
        transition: transform 0.5s;
      }
    }
  }
}
</style>

<script>
import lottie from "lottie-web";
import logoAnimation from "../../assets/animations/logo-animation.json";
import boltAnimation from "../../assets/animations/bolt-animation.json";
import CustomEase from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

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
    const logoContainer = document.getElementById("logo-animation");
    this.loadLottieAnimation(logoAnimation, logoContainer);

    const boltContainer = document.getElementById("bolt-animation");
    this.loadLottieAnimation(boltAnimation, boltContainer);

    const tl = gsap.timeline();

    const split = document.querySelectorAll(".first-animation span");

    // Extract individual letters from the NodeList
    const letters = Array.from(split);

    // Use gsap.utils.toArray to create an array of elements
    const splitArray = gsap.utils.toArray(letters);

    tl.to(".sw-hero__content--animation div", {
      y: 0,
      stagger: 0.1,
      delay: 3,
      duration: 0.15,
    })
      .to(".text-animation__sentence--word div", {
        y: 0,
        stagger: 0.1,
        delay: 0.5,
        duration: 0.15,
      })
      .to(".svg-animation__letter", {
        delay: 0.5,
        opacity: 0,
        ease: "elastic.out(1,0.3)",
      })
      .to(".g", {
        marginLeft: "24px",
        ease: "elastic.out(1,0.4)",
      })
      .to(".svg-animation__letter", {
        delay: 0.5,
        opacity: 0,
        rotationY: 180, // Add this line to rotate on the Y-axis
        ease: "elastic.out(1,0.5)",
      })
      .to(
        ".svg-animation__animation",
        {
          duration: 0.1,
          y: 0,
          opacity: 1,
          ease: "power4.out",
        },
        5.3
      )
      .to(
        ".three-animation__letter",
        {
          opacity: 0,
          ease: CustomEase.create("custom", "M0,0 C0.716,0 0.801,1.438 1,1 "),
        },
        6.7
      )
      .to(
        ".n",
        {
          marginLeft: "12px",
          ease: "elastic.out(1,0.2)",
        },
        6.8
      )
      .to(".three-animation__3d", {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "power4.out",
      })
      .to(".animation-e", {
        delay: 6,
        rotateX: 540,
        rotateY: 10,
      });
  },
};
</script>
