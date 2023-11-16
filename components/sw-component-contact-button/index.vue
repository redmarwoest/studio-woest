<template>
  <div @click="openModal" class="sw-component-contact-button">
    <div class="sw-component-contact-button__container">
      <img src="/icons/sw-arrow-black.svg" alt="" />
      <img src="/icons/sw-get-in-contact.svg" alt="" />
      <img src="/icons/sw-arrow-black.svg" alt="" />
    </div>
  </div>
</template>

<style lang="scss">
.sw-component-contact-button {
  grid-area: contact;
  background-color: #fefce4;
  border-radius: 5px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  cursor: pointer;
  padding-top: 32px;
  padding-bottom: 32px;

  @media (max-width: 1024px) {
    padding: 0 32px 0px 32px;
  }

  &__container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: space-between;
    justify-content: space-between;
    box-sizing: border-box;
    overflow: hidden;

    &:hover > img:nth-child(1) {
      margin-top: -48px;
    }

    &:hover > img:nth-child(2) {
      margin-top: -12x;
    }

    &:hover > img:nth-child(3) {
      margin-bottom: 24px;
    }

    img {
      transition: 0.3s cubic-bezier(0.17, 0.67, 0.23, 1.07);
      &:nth-child(3) {
        margin-bottom: -48px;
      }
    }

    @media (max-width: 1024px) {
      &:hover > img:nth-child(1) {
        margin-top: 0px;
        margin-left: 0px;
      }

      &:hover > img:nth-child(2) {
        margin-top: 0px;
        margin-right: -20px;
      }

      &:hover > img:nth-child(3) {
        margin-bottom: 0px;
        margin-right: -36px;
      }

      img {
        &:nth-child(3) {
          margin-bottom: 0px;
        }

        &:nth-child(1) {
          margin-bottom: 0px;
          margin-left: -48px;
        }
      }
    }

    @media (max-width: 1024px) {
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
</style>

<script setup>
import innerModal from "../sw-modal/innerModal.vue";

import useModalStore from "../../stores/useModalStore";

const store = useModalStore();

const openModal = () => {
  store.openModal({ component: innerModal });
};
</script>
