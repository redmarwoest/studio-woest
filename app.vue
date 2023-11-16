<template>
  <sw-loader />
  <sw-modal />
  <div ref="{main}">
    <div id="smooth-content">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  useSmoothScroll();
});
</script>

<style>
body {
  background-color: #111;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  text-rendering: optimizeLegibility;
}
</style>
