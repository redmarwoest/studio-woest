<template>
  <div class="sw-footer-background">
    <sw-component-three-background />
  </div>
  <div class="sw-footer">
    <div class="sw-footer__logo">
      <h4>Studio Woest</h4>
    </div>
    <div class="sw-footer__contact">
      <h6>Availiability from the 1st of February</h6>
      <div class="sw-footer__contact--link">
        <a @click="openModal">
          <h2>Get in contact</h2>
          <h2>Get in contact</h2>
        </a>
      </div>
    </div>
    <div class="sw-footer__information">
      <div class="sw-footer__location">
        <!-- <div id="hourglass"><img src="icons/sw-bolt-small.svg" alt="" /></div> -->
        <h4>Current Project</h4>
        <h6>Vendroid</h6>
        <h6>Branding | Custom development</h6>
      </div>
      <div class="sw-footer__location">
        <div id="hourglass"></div>
        <h4>Current Location</h4>
        <h6>Tamarindo | Costa Rica</h6>
        <h6>{{ getCurrentDateTime() }}</h6>
      </div>
    </div>
  </div>
</template>

<script setup>
import innerModal from "../sw-modal/innerModal.vue";

import useModalStore from "../../stores/useModalStore";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const store = useModalStore();

const openModal = () => {
  store.openModal({ component: innerModal });
};

const getCurrentDateTime = () => {
  const options = {
    timeZone: "America/Costa_Rica", // Set the time zone to Costa Rica
    weekday: "long",
    year: "numeric",
    month: "short", // Use abbreviated month name
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const dateTimeFormat = new Intl.DateTimeFormat("en-US", options);
  return dateTimeFormat.format(new Date());
};

getCurrentDateTime();

const animateFooterComponents = () => {
  const components = [
    ".sw-footer__logo",
    ".sw-footer__contact",
    ".sw-footer__information",
  ];

  components.forEach((component) => {
    gsap.from(component, {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: component,
        start: "top 80%", // Adjust this value based on when you want the color change to start
        end: "top 50%",
        scrub: true,
      },
    });
  });
};

const handleBackgroundColor = () => {
  const footer = document.querySelector(".sw-footer");

  gsap.to(footer, {
    backgroundColor: "transparent", // Change to "transparent" to remove background color
    scrollTrigger: {
      trigger: ".sw-footer",
      start: "top 80%", // Adjust this value based on when you want the color change to start
      end: "top 20%",
      scrub: true,
    },
  });
};

const reverseAnimations = () => {
  gsap.to(
    [".sw-footer__logo", ".sw-footer__contact", ".sw-footer__information"],
    {
      opacity: 0,
      y: 30,
      duration: 1,
      scrollTrigger: {
        trigger: ".sw-footer",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        toggleActions: "reverse",
      },
    }
  );
};

onMounted(() => {
  animateFooterComponents();
  handleBackgroundColor();
  reverseAnimations();
});
</script>

<style lang="scss">
.sw-footer-background {
  position: absolute;
  width: 100%;
  height: 170vh;
  z-index: -1;
  margin-top: -100vh;

  @media (max-width: 480px) {
    background: rgb(63, 94, 251);
    background: linear-gradient(
      90deg,
      rgba(63, 94, 251, 1) 0%,
      rgba(252, 70, 107, 1) 100%
    );
    height: 190vh;
  }

  canvas {
    @media (max-width: 480px) {
      display: none;
    }
  }
}

.sw-footer {
  position: relative;
  margin-top: -100vh;
  height: 190vh;
  width: 100%;
  padding-top: calc(100vh + 72px);
  padding-bottom: 56px;
  padding-left: 56px;
  padding-right: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #111;

  @media (max-width: 480px) {
    padding-bottom: 48px;
    padding-left: 24px;
    padding-right: 24px;
  }

  &__information {
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 480px) {
      justify-content: center;
      flex-direction: column;
      align-items: center;

      div {
        text-align: center !important;

        &:first-child {
          margin-bottom: 24px;
        }
      }
    }

    div:last-child {
      text-align: end;
    }

    h4 {
      margin-bottom: 16px;
    }

    h6 {
      margin-bottom: 4px;
    }
  }

  &__contact {
    h6 {
      margin-bottom: 24px;
      text-align: center;
    }

    &--link {
      height: 54px;
      overflow: hidden;
      cursor: pointer;

      @media (max-width: 480px) {
        height: 30px;
      }

      a {
        text-decoration: none;

        &:hover {
          h2 {
            &:nth-child(1) {
              margin-top: -54px;
              @media (max-width: 480px) {
                margin-top: -30px;
              }
            }

            &:nth-child(2) {
              margin-top: 0;
              @media (max-width: 480px) {
                margin-top: 0px;
              }
            }
          }
        }

        h2 {
          transition: margin-top 0.4s;
          margin-top: 0;
          &:nth-child(1) {
            &:hover {
              margin-top: -54px;
              @media (max-width: 480px) {
                margin-top: -30px;
              }
            }
          }

          &:nth-child(2) {
            &:hover {
              margin-top: 0;
              @media (max-width: 480px) {
                margin-top: 0px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
