// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
    strict: true,
  },

  vite: {
    build: { target: "es2020" },
    optimizeDeps: { esbuildOptions: { target: "es2020" } },
  },

  ssr: false,
});
