<template>
  <div
    class="group relative overflow-hidden rounded-md px-4 pt-4 pb-20 shadow-lg hover:cursor-pointer dark:bg-gray-800"
  >
    <figure class="flex justify-center items-center px-10 dark:bg-gray-800">
      <img
        :src="product.imageUrl"
        alt="Product Image"
        class="object-contain w-full h-64 dark:bg-gray-800 product-image"
      />
    </figure>
    <div class="flex justify-between">
      <div role="button" :aria-label="product.name" @click="onSelectProduct">
        <h2 class="text-md text-gray-700 pr-4 dark:text-gray-200">
          <span aria-hidden="true" class="absolute inset-0" />
          {{ product.name }}
        </h2>
      </div>
      <p class="text-md font-medium text-gray-900 dark:text-gray-400">
        {{ getFormatedPrice }}
      </p>
    </div>
    <button
      @click="addProductToCart"
      class="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-purple-500 pl-4 text-white shadow disabled:opacity-60 hover:opacity-80 text-2xl"
    >
      <ShoppingCartIcon class="h-6 w-6" aria-hidden="true" />
    </button>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import type { PropType } from 'vue';

import { ShoppingCartIcon } from '@heroicons/vue/outline/index.js';

import { useShoppingStore } from '../../store/shoppingCart';

import { formatPrice } from '../../utils/index';
import { Product } from '../../types/types';

export default {
  props: {
    product: { type: Object as PropType<Product>, required: true },
  },
  components: {
    ShoppingCartIcon,
  },
  computed: {
    getFormatedPrice(): String {
      return formatPrice(
        this.product.recommendedRetailPriceCurrency,
        this.product.recommendedRetailPrice
      );
    },
  },
  methods: {
    addProductToCart(): void {
      useShoppingStore().addToCart({ ...this.product, quantity: 1 });
    },
    onSelectProduct(): void {
      useShoppingStore().selectProduct(this.product);
    },
  },
};
</script>

<style scoped>
.product-image {
  width: 220px;
  height: 300px;
}
</style>
