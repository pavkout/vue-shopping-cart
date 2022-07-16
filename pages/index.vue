<template>
  <div>
    <div
      class="font-display mt-12 mb-2 text-3xl md:text-4xl font-medium text-center text-gray-700 dark:text-gray-200"
    >
      <h1>{{ "Qogita's Collection" }}</h1>
    </div>
    <div
      class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 p-6 sm:px-20 lg:px-20 px-6 dark:bg-gray-900"
    >
      <product-card
        v-for="product in products"
        :key="product.gtin"
        :product="product"
      ></product-card>
    </div>
    <pagination :numberOfPages="5" :onChange="onChange"></pagination>
    <product-modal
      :open="open"
      :ratingStars="ratingStars"
      :reviewsNum="reviewsNum"
      :product="{}"
    ></product-modal>
    <shopping-cart></shopping-cart>
  </div>
</template>

<script>
import ShoppingCart from '../components/ShoppingCart/index.vue';
import ProductCard from '../components/ProductCard/index.vue';
import ProductModal from '../components/ProductModal/index.vue';
import Pagination from '../components/Pagination/index.vue';

import { generateRandom } from '../utils/index.ts';
import { getPage } from '../server/api/index.ts';

export default {
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.products = getPage(1);
  },
  computed: {
    open() {
      return false; //$route.query.id;
    },
    ratingStars() {
      return generateRandom(1, 5, 1);
    },
    reviewsNum() {
      return generateRandom(1000, 2000, 8);
    },
  },
  components: {
    ShoppingCart,
    ProductCard,
    ProductModal,
    Pagination,
  },
  methods: {
    onChange(i) {
      this.products = getPage(i);
    },
  },
};
</script>
