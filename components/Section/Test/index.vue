<script setup>
  import { onMounted, onUnmounted, ref } from "vue";
  import gsap from "gsap";

  const main = ref();
  let tl;
  let ctx;

  function toggleTimeline() {
    tl.reversed(!tl.reversed());
  }
  onMounted(() => {
    ctx = gsap.context((self) => {
      const boxes = self.selector(".box");
      tl = gsap
        .timeline()
        .to(boxes[0], { x: 120, rotation: 360 })
        .to(boxes[1], { x: -120, rotation: -360 }, "<")
        .to(boxes[2], { y: -166 })
        .reverse();
    }, main.value); // <- Scope!
  });

  onUnmounted(() => {
    ctx.revert(); // <- Easy Cleanup!
  });
</script>

<template>
  <main>
    <section ref="main">
      <h1>Use the button to toggle a Timeline</h1>
      <div>
        <button @click="toggleTimeline">Toggle Timeline</button>
      </div>
      <div class="box">Box 1</div>
      <div class="box">Box 2</div>
      <div class="box">Box 3</div>
    </section>
  </main>
</template>

<style scoped>
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .column {
    flex-direction: column;
    gap: 1rem;
  }

  .boxes-container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }

  .box {
    background-color: var(--green);
    width: 100px;
    height: 100px;
    border-radius: 10px;
    font-size: 24px;
    text-align: center;
    line-height: 100px;
  }
</style>
