<template>
  <div class="sw-footer-background">
    <ComponentCanvas />
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
        <!-- <h6>{{ currentDateTime }}</h6> -->
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

// export default {
//   data() {
//     return {
//       currentDateTime: this.getCurrentDateTime(),
//     };
//   },
//   methods: {
//     getCurrentDateTime() {
//       const options = {
//         timeZone: "America/Costa_Rica", // Set the time zone to Costa Rica
//         weekday: "long",
//         year: "numeric",
//         month: "short", // Use abbreviated month name
//         day: "numeric",
//         hour: "numeric",
//         minute: "numeric",
//       };

//       const dateTimeFormat = new Intl.DateTimeFormat("en-US", options);
//       return dateTimeFormat.format(new Date());
//     },
//   },
// };
</script>

<style lang="scss">
.sw-footer-background {
  position: absolute;
  width: 100%;
  height: 190vh;
  z-index: -1;
  margin-top: -50vh;
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

  &__information {
    width: 100%;
    display: flex;
    justify-content: space-between;

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

      a {
        text-decoration: none;

        &:hover {
          h2 {
            &:nth-child(1) {
              margin-top: -54px;
            }

            &:nth-child(2) {
              margin-top: 0;
            }
          }
        }

        h2 {
          transition: margin-top 0.4s;
          margin-top: 0;
          &:nth-child(1) {
            &:hover {
              margin-top: -54px;
            }
          }

          &:nth-child(2) {
            &:hover {
              margin-top: 0;
            }
          }
        }
      }
    }
  }
}
</style>
