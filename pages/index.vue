<template>
  <v-parallax id="scene" src="/robot-sit.png">
    <div
      class="d-flex flex-column fill-height justify-center align-start text-white"
    >
      <h1 class="text-h1 mb-4">Hello.</h1>
      <h1 class="text-h1">I am</h1>
      <h1 class="text-h1">Csp</h1>
    </div>
  </v-parallax>
  <v-parallax id="scene">
    <div
      class="d-flex flex-column fill-height justify-center align-center text-white"
    >
      <h1 class="text-h2 mb-3">Look for</h1>
      <v-btn
        to="/about"
        elevation="24"
        size="x-large"
        class="mt-5 text-h2 big-btn"
        >About me</v-btn
      >
      <v-btn
        to="/project/list"
        elevation="24"
        size="x-large"
        class="mt-5 text-h2 big-btn"
        >Projects</v-btn
      >
      <v-btn
        to="/design/list"
        elevation="24"
        size="x-large"
        class="mt-5 text-h2 big-btn"
        >Designs</v-btn
      >
    </div>
  </v-parallax>
</template>
<style>
#scene {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-attachment: fixed;
  background-size: cover;
  /* font-size: 2rem; */
}
#scene div {
  padding: 2%;
  padding-bottom: 5%;
}
.big-btn {
  min-height: 80px;
}
</style>
