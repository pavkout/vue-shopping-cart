<template>
  <div class="flex">
    <div
      class="h-24 w-24 p-4 flex-shrink-0 overflow-hidden rounded-full border border-gray-200 dark:border-gray-700"
    >
      <img
        :src="product.imageUrl"
        alt="Product Image"
        class="h-full w-full object-cover object-center"
        height="100"
        width="100"
      />
    </div>

    <div class="ml-4 flex flex-1 flex-col">
      <div>
        <div
          class="flex justify-between text-base font-medium text-gray-900 dark:text-gray-200"
        >
          <h3>{{ product.name }}</h3>
          <p class="ml-4">
            {{ formatedPrice }}
          </p>
        </div>
        <p class="mt-1 text-sm text-gray-500">{{ product.categoryName }}</p>
      </div>
      <div class="flex flex-1 items-center mt-2 justify-between text-sm">
        <item-quantity
          :gtin="product.gtin"
          :quantity="product.quantity"
        ></item-quantity>
        <div class="flex">
          <button
            type="button"
            class="font-medium text-purple-600 hover:text-purple-500"
            @click="onDelete"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue';

import ItemQuantity from '../ItemQuantity/index.vue';
import { formatPrice, calculateAmountWithQuantity } from '../../utils/index';
import { Product } from '../../types/types';

export default {
  props: {
    product: { type: Object as PropType<Product>, required: true },
  },
  emits: ['delete-product'],
  components: {
    ItemQuantity,
  },
  computed: {
    formatedPrice(): String {
      // Calculate the amount of money.
      const amount = calculateAmountWithQuantity(
        this.product.recommendedRetailPrice,
        this.product.quantity
      );

      return formatPrice(this.product.recommendedRetailPriceCurrency, amount);
    },
  },
  methods: {
    onDelete(): void {
      this.$emit('delete-product');
    },
  },
};
</script>
