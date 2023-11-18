<template>
  <div class="sw-modal">
    <div class="sw-modal__inner">
      <button @click="store.closeModal" class="sw-modal__close-btn">
        <img
          class="sw-modal__close-btn--img"
          src="/icons/sw-cross-small.svg"
          alt=""
        />
      </button>
      <div class="sw-modal__content">
        <h2 class="sw-modal__content--title">Tell us about your project</h2>
        <div class="sw-modal__content--input">
          <div v-if="!success">
            <p class="p">
              Hi my name is
              <input v-model="nameInput" placeholder="John Doe" type="text" />
              <br />
              You can answer me on this email
              <input
                v-model="emailInput"
                placeholder="johndoe@gmail.com"
                type="email"
              />
              <br />I am looking for help with
              <input
                v-model="inquiryInput"
                placeholder="webdev, branding etc."
                type="text"
              /><br />My budget is €
              <input v-model="moneyInput" placeholder="2500,00" type="text" />
              <br />and i need it done by
              <input v-model="dateInput" placeholder="yesterday" type="text" />
            </p>
            <button
              @click="submitMessage"
              type="submit"
              class="sw-modal__content--submit-btn"
            >
              <span class="sw-modal__content--submit-btn--span" v-if="!loading">
                Contact studio woest
                <img src="/icons/sw-arrow-small.svg" alt="" />
              </span>
              <span v-else>Loading...</span>
            </button>
            <div v-if="error" class="error-message">
              <p class="p">{{ error }}</p>
            </div>
          </div>
          <div v-else class="succes-message">
            <p class="p">{{ successMessage }}</p>
          </div>
        </div>
        <div class="sw-modal__content--contact">
          <h5>+31 657 557 468</h5>
          <h5>woest.studio@gmail.com</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
br {
  margin-bottom: 200px;
}
.display-none {
  display: none;
}
.sw-modal {
  position: relative;

  &__close-btn {
    position: absolute;
    right: 24px;
    top: 24px;
    height: 48px;
    width: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2px;
    margin-top: 2px;
    transition: 0.3s;

    &:hover {
      height: 52px;
      width: 52px;
      margin-right: 0px;
      margin-top: 0px;
    }

    &--img {
      transition: 0.3s;
      width: 24px;
    }

    &:hover > img {
      transition: 0.3s;
      width: 20px;
    }
  }

  &__inner {
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 10;
    max-width: 620px;
    width: 100%;
    height: 100vh;
    background-color: #111;
    right: 0;
    overflow: scroll;
    border-left: solid 1px white;
  }

  &__content {
    max-width: 540px;
    width: 100%;
    height: 100%;
    min-height: 900px;
    display: flex;
    transition: 0.3s;
    flex-direction: column;
    box-sizing: border-box;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 120px;
    padding-bottom: 120px;
    overflow: scroll;

    @media (max-width: 480px) {
      padding-top: 96px;
      padding-bottom: 96px;
    }

    input {
      margin-bottom: 6px;
      &:nth-child(1) {
        width: 320px;
      }

      &:nth-child(3) {
        width: 478px;
      }

      &:nth-child(5) {
        width: 478px;
      }

      &:nth-child(7) {
        width: 306px;
      }

      &:nth-child(9) {
        width: 242px;
      }

      @media (max-width: 480px) {
        width: 95% !important;
      }
    }

    &--title {
      margin-bottom: 24px;
    }

    &--submit-btn {
      margin-top: 36px;
      transition: 0.3s;

      &:hover > span img {
        transition: 0.3s;
        padding-left: 6px;
      }

      &:hover {
        padding-left: 24px;
      }

      span {
        display: flex;
        align-items: center;
        img {
          transition: 0.3s;
          margin-left: 8px;
        }
      }
    }

    &--contact {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-top: auto;
    }
  }
}

.succes-message {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
}

.error-message {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #433e74;
  margin-top: 16px;
  border-radius: 12px;
  width: 100%;
  box-sizing: border-box;
  transition: 0.3s;
}
</style>

<script setup lang="ts">
import { ref } from "vue";

import useModalStore from "../../stores/useModalStore";

const store = useModalStore();

let emailInput = "";
let nameInput = "";
let inquiryInput = "";
let moneyInput = "";
let dateInput = "";
const success = ref(false);
const error = ref("");
const loading = ref(false);
const successMessage = ref("");

const submitMessage = async () => {
  if (
    emailInput.trim() === "" ||
    nameInput.trim() === "" ||
    inquiryInput.trim() === "" ||
    moneyInput.trim() === "" ||
    dateInput.trim() === ""
  ) {
    error.value = "All inputs are required";
    return;
  }

  if (!isValidEmail(emailInput)) {
    error.value = "Please enter a valid email address";
    return;
  }

  const information = {
    email: emailInput,
    name: nameInput,
    inquiry: inquiryInput,
    money: moneyInput,
    dateInput: dateInput,
  };

  loading.value = true;

  successMessage.value = `Hi, ${nameInput} thank you for sending us a message about your inquiry about '${inquiryInput}'. We will send you a message on '${emailInput}' greetings studio woest`;

  try {
    const response = await useFetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ information }),
    });

    if (response) {
      successMessage.value = `Hi, ${nameInput} thank you for sending us a message about your inquiry about '${inquiryInput}'. We will send you a message on '${emailInput}' greetings studio woest`;
      success.value = true;
    } else {
      error.value = "Error submitting email";
    }
  } catch (error) {
    console.error(error);
  } finally {
    // Reset loading to false when API call is complete
    loading.value = false;
  }
};
const isValidEmail = (value: any) => {
  // Use a regular expression to validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};
</script>
