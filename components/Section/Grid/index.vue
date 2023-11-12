<template>
  <div class="grid_outline">
    <div class="grid">
      <div class="grid__story"><h2>Storytelling</h2></div>
      <div class="grid__design"><h2>Design</h2></div>
      <div class="grid__development"><h2>Development</h2></div>
      <div class="grid__analytics"><h2>Analytics</h2></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .grid_outline {
    padding: 24px;
    // height: 360vh;
  }

  .grid {
    display: grid;
    width: 100%;
    // height: 86vh;
    grid-template-areas:
      "story design analytics"
      "development development analytics";
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;

    & > div {
      border-radius: 50px;
      padding: 24px;
      padding-left: 36px;
      position: relative;
      h2 {
        position: absolute;
        left: 36px;
        bottom: 24px;
      }
    }

    &__story {
      grid-area: story;
      background-color: #f1a5ff;
    }

    &__design {
      grid-area: design;
      background-color: #c6c2f3;
    }

    &__development {
      grid-area: development;
      background-color: #8ac9ee;
    }

    &__analytics {
      grid-area: analytics;
      background-color: #ddff51;
    }
  }
</style>
