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

<style lang="scss" scoped>
.sw-modal {
  display: none;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 500;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: all 0.4s;
}
</style>
