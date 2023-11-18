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
      name: "Home Studio WOest",
      content: "Design Agency",
    },
  ],
  bodyAttrs: {
    class: "test",
  },
  link: [{ rel: "icon", type: "image/svg", href: "/img/favicon.svg" }],
});
</script>
