<template>
  <div
    class="group relative overflow-hidden rounded-md px-4 pt-4 pb-20 shadow-lg hover:cursor-pointer dark:bg-gray-800"
  >
    <figure class="flex justify-center items-center px-10 dark:bg-gray-800">
      <img
        :src="product.imageUrl"
        alt="Product Image"
        class="object-contain w-full h-64 dark:bg-gray-800"
        height="300"
        width="220"
      />
    </figure>
    <div class="flex justify-between">
      <nuxt-link :to="`product/${product.gtin}`">
        <h2 class="text-md text-gray-700 pr-4 dark:text-gray-200">
          <span aria-hidden="true" class="absolute inset-0" />
          {{ product.name }}
        </h2>
      </nuxt-link>
      <p class="text-md font-medium text-gray-900 dark:text-gray-400">
        {{ getFormatedPrice }}
      </p>
    </div>
    <button
      @click="addProductToCart(product)"
      class="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-purple-500 pl-4 text-white shadow disabled:opacity-60 hover:opacity-80 text-2xl"
    >
      <ShoppingCartIcon class="h-6 w-6" aria-hidden="true" />
    </button>
  </div>
</template>

<script>
import { ShoppingCartIcon } from '@heroicons/vue/outline';
import { formatPrice } from '../../utils/index.ts';
import { useShoppingStore } from '../../store/shoppingCart';

export default {
  props: ['product'],
  components: {
    ShoppingCartIcon,
  },
  computed: {
    getFormatedPrice() {
      return formatPrice(
        this.product.recommendedRetailPriceCurrency,
        this.product.recommendedRetailPrice
      );
    },
  },
  methods: {
    addProductToCart(product) {
      useShoppingStore().addToCart(product);
    },
  },
};
</script>
