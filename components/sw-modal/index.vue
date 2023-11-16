<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="store.modalState?.component" class="sw-modal">
        <component
          :is="store.modalState?.component"
          v-bind="store.modalState?.props"
        />
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import useModalStore from "../../stores/useModalStore";

const store = useModalStore();
</script>

<style lang="scss">
.sw-modal {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 500;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;

  &.modal-fade-enter-active,
  &.modal-fade-leave-active {
    transition: all 0.4s;
  }

  &.modal-fade-enter-from,
  &.modal-fade-leave-to {
    opacity: 0;
    transform: translateX(
      100%
    ); // Initial position outside the viewport on the right
  }
}
</style>
