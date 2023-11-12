<script>
import { onMounted, onUnmounted, ref } from "vue";
import { gsap, Power1 } from "gsap";

const main = ref();
let tl;
let ctx;
let isMenuVisible = ref(true);

const toggleMenu = () => {
  tl.reversed(!tl.reversed());
  isMenuVisible.value = !isMenuVisible.value;
};

const animateOverlayWidth = (percent) => {
  tl.to(".sw-review__overlay", { width: `${percent}%`, duration: 0.5 });
};

onMounted(() => {
  ctx = gsap.context(() => {
    const boxes = document.querySelectorAll(".box");
    tl = gsap
      .timeline()
      .to(".header-menu", {
        autoAlpha: 1,
        display: "flex",
        opacity: 1,
        ease: Power1.easeIn,
      })
      .to(boxes[0], { x: 120, rotation: 360 })
      .to(boxes[1], { x: -120, rotation: -360 }, "<")
      .to(boxes[2], { y: -166 })
      .reverse();

    // Use this line to animate the overlay width to 90% when reaching 80%
    tl.eventCallback("onUpdate", () => {
      const scrollPercent =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;
      if (scrollPercent >= 80) {
        animateOverlayWidth(90);
      }
    });
  }, main.value);
});

onUnmounted(() => {
  ctx.revert();
});
</script>
<template>
  <div ref="{main}">
    <div>
      <div class="header-menu">
        <div class="header-menu__left">
          <div class="header-menu__left--first"></div>
          <div>
            <ul class="animate">
              <li><a href="">BEHANCE</a></li>
              <li><a href="">LINKEDIN</a></li>
            </ul>
          </div>
        </div>
        <ul>
          <li class="box"><a href="">HOME</a></li>
          <li class="box"><a href="">METHOD</a></li>
          <li class="box"><a href="">WORK</a></li>
          <li class="box"><a href="">CONTACT</a></li>
        </ul>
      </div>
    </div>
    <ComponentHeaderBar @toggle-menu="toggleMenu" />
  </div>
</template>

<style lang="scss">
.header-menu {
  position: fixed;
  z-index: 12;
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;
  opacity: 0;

  &__left {
    width: 450px;
    display: flex;
    flex-direction: column;

    &--first {
      width: 100px;
      height: 100px;
      background: orange;
      margin-bottom: 200px;
    }

    li {
      list-style: none;
    }

    ul {
      padding: 0;
    }

    a {
      font-family: "Matter-regular";
      font-size: 16px;
      text-decoration: none;
      color: #ddff51;
    }
  }

  &__right {
    width: 450px;
    li {
      -moz-transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
      -webkit-transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
      -o-transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
      transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);

      a {
        font-family: "Matter-SemiBold";
        font-size: 84px;
        text-decoration: none;
        color: #ddff51;
      }

      &:hover {
        -webkit-transform: skewX(10deg);
        -moz-transform: skewX(10deg);
        -o-transform: skewX(10deg);
        transform: skewX(10deg);
      }
    }
  }
}
</style>
