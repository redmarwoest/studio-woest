<script setup lang="ts">
import {
  Scene,
  PerspectiveCamera,
  Mesh,
  BoxGeometry, // Change: BoxGeometry instead of SphereGeometry
  MeshStandardMaterial,
  WebGLRenderer,
  AmbientLight,
  DirectionalLight,
} from "three";
import { ref, computed, watch, onMounted } from "vue";
import { type Ref } from "vue";

let renderer: WebGLRenderer;
const experience: Ref<HTMLCanvasElement | null> = ref(null);

const pixelRatio =
  typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;

const aspectRatio = computed(() => 24 / 24);

const scene = new Scene();

const camera = new PerspectiveCamera(75, aspectRatio.value, 0.1, 1000);
camera.position.set(0, 0, 1.4);

scene.add(camera);

const box = new Mesh( // Change: BoxGeometry instead of SphereGeometry
  new BoxGeometry(1, 1, 1), // Change: BoxGeometry instead of SphereGeometry
  new MeshStandardMaterial({ color: 0x008080 })
);

scene.add(box);

// Ambient light
const ambientLight = new AmbientLight(0xffffff, 0.5); // color, intensity (0 to 1)
scene.add(ambientLight);

// Directional light
const directionalLight = new DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5); // Set the position of the light
scene.add(directionalLight);

function updateCamera() {
  camera.aspect = aspectRatio.value;
  camera.updateProjectionMatrix();
}

function updateRenderer() {
  let width = 84; // Default width
  let height = 84;

  if (typeof window !== "undefined") {
    if (window.innerWidth < 1024) {
      width = 64;
      height = 64;
    }

    if (window.innerWidth < 764) {
      width = 36;
      height = 36;
    }
  }
  renderer.setSize(width, height);
  renderer.render(scene, camera);
}

function updateRendererSize() {
  const width = 84; // Set your desired width
  const height = 84; // Set your desired height

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width * pixelRatio, height * pixelRatio);
}

function setRenderer() {
  if (experience.value) {
    renderer = new WebGLRenderer({ canvas: experience.value });
    renderer.setClearColor(0x111111);
    renderer.setPixelRatio(pixelRatio); // Set the pixel ratio
    updateRendererSize();
  }
}

watch(aspectRatio, () => {
  updateCamera();
  updateRenderer();
});

onMounted(() => {
  setRenderer();
  loop();
});

const loop = () => {
  box.rotation.x += 0.001; // Optional: Add rotation for visual interest
  box.rotation.y += 0.001; // Optional: Add rotation for visual interest
  updateRenderer();
  requestAnimationFrame(loop);
};
</script>
<template>
  <canvas ref="experience" />
</template>
