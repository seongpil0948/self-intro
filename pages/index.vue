<template>
  <n-space vertical>
    <div>home page</div>
    <canvas ref="canvasEl" />
  </n-space>
</template>

<script setup lang="ts">
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Mesh,
  SphereGeometry,
  MeshBasicMaterial,
} from "three";
import { NSpace } from "naive-ui";
const canvasEl = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  const scene = new Scene();
  const camera = new PerspectiveCamera(
    75,
    window.devicePixelRatio, // window.innerWidth / window.innerHeight
    0.1,
    1000
  );
  scene.add(camera);

  const sphere = new Mesh(
    new SphereGeometry(1, 20, 20),
    new MeshBasicMaterial({ color: 0x00ff00 })
  );
  scene.add(sphere);
  camera.position.z = 5;
  const renderer = new WebGLRenderer({
    canvas: canvasEl.value as HTMLCanvasElement,
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.render(scene, camera);
});
</script>
