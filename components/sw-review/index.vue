<template>
  <div class="sw-review">
    <div class="sw-review__overlay">
      <div class="sw-review__content">
        <h3 class="sw-review__content--text">
          “Thanks to Studio Woest, our brand story came alive online, attracting
          a more specific audience and turning them into happy customers for our
          e-commerce store. They’re the secret sauce behind our digital
          success!”
        </h3>
        <h4 class="sw-review__content--title">Thom Siersema</h4>
        <h4 class="sw-review__content--subtitle">Managing Director plnktn.</h4>
      </div>
    </div>
  </div>
</template>
<script>
import SplitType from "split-type";

export default {
  mounted() {
    const overlay = document.querySelector(".sw-review__overlay");

    gsap.to(overlay, {
      scrollTrigger: {
        trigger: ".sw-review",
        start: "bottom 80%",
        scrub: true,
      },
      width: "96%",
      borderRadius: "40px",
    });

    const splitTypes = document.querySelectorAll(".sw-review__content--text");
    splitTypes.forEach((char, i) => {
      const text = new SplitType(char, { types: "chars,words" });

      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
          markers: false,
        },
        opacity: 0.2,
        stagger: 0.4,
      });
    });
  },
};
</script>

<style lang="scss">
.sw-review {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;

  &__overlay {
    height: 100vh;
    width: 100%;
    background-color: #111;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__content {
    width: 90%;
    max-width: 680px;

    &--text {
      margin-bottom: 24px;
    }

    &--title {
      margin-bottom: 4px;
    }

    &--subtitle {
      font-family: "Matter-Regular";
    }
  }
}
</style>
