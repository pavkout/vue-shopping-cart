<template>
  <div class="absolute w-full z-10">
    <v-banner></v-banner>
    <v-nav></v-nav>
  </div>
</template>

<script lang="ts">
import VBanner from '../Banner/index.vue';
import VNav from '../Nav/index.vue';

export default {
  components: {
    VBanner,
    VNav,
  },
};
</script>
