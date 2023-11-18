<script setup lang="ts">
import {
  Scene,
  PerspectiveCamera,
  Mesh,
  OctahedronGeometry,
  MeshStandardMaterial,
  WebGLRenderer,
  AmbientLight,
  DirectionalLight,
  OrthographicCamera,
} from "three";

import { ref, computed, watch, onMounted } from "vue";
import { type Ref } from "vue";

let renderer: WebGLRenderer;
const experience: Ref<HTMLCanvasElement | null> = ref(null);

const pixelRatio =
  typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;

const aspectRatio = computed(() => 24 / 24);

const scene = new Scene();

const camera = new OrthographicCamera(-1, 1, 1, -1, 0.05, 10); // Adjust the parameters as needed
camera.position.set(0, 0, 3);

scene.add(camera);

const geometry = new OctahedronGeometry(1); // Use OctahedronGeometry instead of BoxGeometry

const material = new MeshStandardMaterial({ color: 0xd127cb });
let mesh: Mesh;

mesh = new Mesh(geometry, material);
scene.add(mesh);

// Ambient light
const ambientLight = new AmbientLight(0xffffff, 0.5); // color, intensity (0 to 1)
scene.add(ambientLight);

// Directional light
const directionalLight = new DirectionalLight(0xffffff, 3);
directionalLight.position.set(10, 10, 10); // Set the position of the light
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
  mesh.scale.set(0.85, 0.85, 0.85);
  loop();
});

let rotationSpeed = 0.001; // Initial rotation speed
let smoothTransition = 0.0002; // Speed for smooth transition

let time = 0; // Add a time variable for the animation

// Modify the loop function
const loop = () => {
  const totalRotation = 360; // Total rotation in radians
  updateRenderer();

  // Use sine function to create a jumping effect
  mesh.position.y = Math.sin(time) * 0.1; // You can adjust the amplitude (0.5 in this case)

  mesh.rotation.y += rotationSpeed;

  time += 0.01; // Adjust the speed of the jumping effect

  if (rotationSpeed > 0.001) {
    // If in the fast round, gradually decrease the rotation speed
    rotationSpeed *= 0.98; // Adjust the decay factor as needed
  }

  requestAnimationFrame(loop);
};
</script>
<template>
  <canvas ref="experience" />
</template>
