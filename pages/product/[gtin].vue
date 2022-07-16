<template>
  <!-- <product-modal
    :open="open"
    :ratingStars="ratingStars"
    :reviewsNum="reviewsNum"
    :product="product"
  ></product-modal> -->
  <span>Pavlos</span>
</template>

<script>
import ProductModal from '../../components/ProductModal/index.vue';

import { generateRandom } from '../../utils/index.ts';

export default {
  data() {
    return {
      open: true,
      product: {},
    };
  },
  computed: {
    ratingStars() {
      return generateRandom(1, 5, 1);
    },
    reviewsNum() {
      return generateRandom(1000, 2000, 8);
    },
    // product() {
    //   return {
    //     ...this.products.filter((p) => p.gtin === '5054563079435')[0],
    //     quantity: 5,
    //   };
    // },
  },
  components: {
    ProductModal,
  },
};
</script>
