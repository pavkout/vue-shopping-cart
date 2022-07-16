<template>
  <div class="h-screen relative dark:bg-gray-900">
    <v-header></v-header>
    <hero-image></hero-image>
    <slot></slot>
    <v-footer></v-footer>
  </div>
</template>

<script>
import VHeader from '../components/Header/index.vue';
import VFooter from '../components/Footer/index.vue';
import HeroImage from '../components/HeroImage/index.vue';

export default {
  components: {
    VHeader,
    VFooter,
    HeroImage,
  },
};
</script>
