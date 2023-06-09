// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: {
    dirs: ["composables/**"],
  },
  typescript: {
    shim: false,
    strict: true,
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  router: {
    // https://router.vuejs.org/api/interfaces/routeroptions.html
    options: {
      strict: true,
    },
  },
  css: ["vuetify/lib/styles/main.sass"],
  // dev: pub.ioEnv !== "prod",
  // debug: pub.ioEnv !== "prod",
  build: {
    transpile: ["vuetify"],
  },
  nitro: {
    preset: "firebase",
    replace: import.meta.env.PROD
      ? {
          [`functions.https.onRequest`]: `functions.region('asia-northeast3').https.onRequest`,
          [`functions.http.onRequest`]: `functions.region('asia-northeast3').http.onRequest`,
        }
      : undefined,
  },
});
