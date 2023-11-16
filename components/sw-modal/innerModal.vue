<template>
  <div class="sw-modal">
    <div class="sw-modal__inner">
      <button @click="store.closeModal" class="sw-modal__close-btn">
        <span></span>
        <span></span>
      </button>
      <div class="sw-modal__content">
        <h2 class="sw-modal__content--title">Tell us about your project</h2>
        <div class="sw-modal__content--input">
          <div v-if="!success">
            <p class="p">
              Hi my name is
              <input v-model="nameInput" placeholder="John doe" type="text" />.
              You can answer me on this email
              <input
                v-model="emailInput"
                placeholder="johndoe@gmail.com"
                type="email"
              />. I am looking for help with
              <input
                v-model="inquiryInput"
                placeholder="Webdev, branding etc."
                type="text"
              />. My budget is $
              <input v-model="moneyInput" placeholder="2500,00" type="text" />
              and i need it done by
              <input v-model="dateInput" placeholder="Yesterday" type="text" />
            </p>
            <button
              @click="submitMessage"
              type="submit"
              class="sw-modal__content--submit-btn"
            >
              <span class="sw-modal__content--submit-btn--span" v-if="!loading">
                Contact studio woest
                <!-- <img src="icons/sw-arrow-small.svg" alt="" -->
                /></span
              >
              <span v-else>Loading...</span>
            </button>
            <div v-if="error" class="error-message">
              <p>{{ error }}</p>
            </div>
          </div>
          <div v-else class="succes-message">
            <p class="p">{{ successMessage }}</p>
          </div>
        </div>
        <div class="sw-modal__content--contact">
          <h5>+31 657 557 468</h5>
          <h5>studio-woest@gmail.com</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sw-modal {
  position: relative;

  &__close-btn {
    position: absolute;
    right: 24px;
    top: 24px;
  }

  &__inner {
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 10;
    max-width: 588px;
    width: 100%;
    height: 100vh;
    background-color: #111;
    right: 0;
  }

  &__content {
    max-width: 500px;
    width: 100%;
    height: 100%;
    display: flex;
    transition: 0.3s;
    flex-direction: column;
    box-sizing: border-box;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 120px;
    padding-bottom: 84px;

    input {
      &:nth-child(1) {
        width: 230px;
      }

      &:nth-child(2) {
        width: 340px;
      }

      &:nth-child(3) {
        width: 200px;
      }

      &:nth-child(4) {
        width: 100px;
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
  padding: 16px;
  background: var(--color);
  width: 100%;
  border-radius: 12px;
  box-sizing: border-box;

  h4 {
    margin-bottom: 0px !important;
    line-height: 20px;
  }
}

.error-message {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(255, 0, 0, 0.1);
  margin-top: 12px;
  border-radius: 12px;
  width: 100%;
  box-sizing: border-box;

  p {
    font-weight: bold;
    margin-bottom: 0px !important;
  }
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
