import Toast, { PluginOptions, POSITION } from 'vue-toastification';

const options: PluginOptions = {
  // You can set your default options here
  // Setting the global default position
  position: POSITION.TOP_LEFT,
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast, options);
});
