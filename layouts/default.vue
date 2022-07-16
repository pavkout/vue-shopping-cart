<template>
  <div class="h-screen max-h-screen relative dark:bg-gray-900">
    <v-header></v-header>
    <hero-image></hero-image>
    <slot></slot>
    <theme-switcher></theme-switcher>
    <v-footer></v-footer>
  </div>
</template>

<script>
import VHeader from '../components/Header/index.vue';
import VFooter from '../components/Footer/index.vue';
import HeroImage from '../components/HeroImage/index.vue';
import ThemeSwitcher from '../components/ThemeSwitcher/index.vue';

import { useThemeStore } from '../store/theme.ts';

export default {
  components: {
    VHeader,
    VFooter,
    HeroImage,
    ThemeSwitcher,
  },
};
</script>
