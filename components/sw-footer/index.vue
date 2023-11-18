<template>
  <div class="sw-footer-background">
    <sw-component-three-background />
  </div>
  <div class="sw-footer">
    <div class="sw-footer__logo">
      <img src="/icons/sw-logo.svg" alt="" />
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
        <sw-component-loader-animation />
        <h4>Current Project</h4>
        <h6>Vendroid</h6>
        <h6>Branding | Custom development</h6>
      </div>
      <div class="sw-footer__location">
        <sw-component-weather-animation />
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
      opacity: 0, // start with opacity 0 if you want it to fade in
      y: 50,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: ".sw-footer__logo",
        scrub: true,
      },
    });
  });
};

const handleBackgroundColor = () => {
  gsap.to(".sw-footer", {
    backgroundColor: "rgba(17, 17, 17, 0)",
    duration: 1, // adjust the duration as needed
    scrollTrigger: {
      trigger: ".sw-footer__logo",
      end: "bottom top",
      scrub: true,
    },
  });
};

onMounted(() => {
  animateFooterComponents();
  handleBackgroundColor();
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

  &__logo {
    img {
      width: 140px;
    }
  }

  @media (max-width: 480px) {
    padding-bottom: 48px;
    padding-left: 24px;
    padding-right: 24px;
  }

  &__information {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @media (max-width: 480px) {
      justify-content: center;
      flex-direction: column;
      align-items: center;

      div {
        text-align: center !important;
        @media (max-width: 480px) {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        &:first-child {
          margin-bottom: 24px;
        }
      }
    }

    div:last-child {
      display: flex;
      text-align: end;
      align-items: end;
      flex-direction: column;

      @media (max-width: 480px) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    h4 {
      margin-bottom: 16px;
    }

    h6 {
      margin-bottom: 4px;
    }
  }

  &__contact {
    text-align: center;
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
