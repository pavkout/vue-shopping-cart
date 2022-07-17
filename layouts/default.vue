<template>
  <div class="h-full relative dark:bg-gray-900">
    <v-header></v-header>
    <hero-image></hero-image>
    <slot></slot>
    <theme-switcher></theme-switcher>
    <v-footer></v-footer>
  </div>
</template>

<script lang="ts">
import VHeader from '../components/Header/index.vue';
import VFooter from '../components/Footer/index.vue';
import HeroImage from '../components/HeroImage/index.vue';
import ThemeSwitcher from '../components/ThemeSwitcher/index.vue';

export default {
  components: {
    VHeader,
    VFooter,
    HeroImage,
    ThemeSwitcher,
  },
};
</script>
