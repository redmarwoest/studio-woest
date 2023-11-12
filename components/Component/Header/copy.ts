// <script>
//   import lottie from "lottie-web";
//   import logoAnimation from "../../../assets/logo-animation.json";
//   import gsap from "gsap";

//   const main = ref();
//   let tl;
//   let ctx;

//   export default {
//     data() {
//       return {
//         isMenuVisible: false,
//       };
//     },
//     methods: {
//       toggleMenu() {
//         this.isMenuVisible = !this.isMenuVisible;
//         tl.reversed(!tl.reversed());
//       },

//       loadLottieAnimation() {
//         const animationContainer = document.getElementById("lottie-container");

//         const animation = lottie.loadAnimation({
//           container: animationContainer,
//           renderer: "svg",
//           loop: true,
//           autoplay: true,
//           animationData: logoAnimation,
//         });
//       },
//     },
//     mounted() {
//       this.loadLottieAnimation();
//     },
//     onMounted() {
//       ctx = gsap.context(() => {
//         tl = gsap
//           .timeline()
//           .to(".header-menu__right", { x: 120, rotation: 360 })
//           .reverse();
//       }, main.value); // <- Scope!
//     },
//     onUnmounted() {
//       ctx.revert();
//     },
//   };
// </script>
