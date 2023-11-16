<template>
  <div ref="{main}">
    <sw-marquee />
    <sw-hero />
    <sw-grid />
    <sw-review />
    <sw-footer />
  </div>
</template>

<script setup>
useHead({
  title: "Studio Woest",
  meta: [
    {
      name: "Home house of famely",
      content: "Luxury car essentials, on their way for your ride home",
    },
  ],
  bodyAttrs: {
    class: "test",
  },
  link: [{ rel: "icon", type: "image/svg", href: "/favicon.svg" }],
});
</script>
