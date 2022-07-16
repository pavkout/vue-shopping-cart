<template>
  <div class="h-8 flex">
    <div
      class="h-8 w-8 border-2 rounded-full cursor-pointer flex items-center justify-center"
      @click="subtractQuantityFromCart"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="gray"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20 12H4"
        />
      </svg>
    </div>

    <p
      class="h-8 w-6 flex items-center justify-center font-medium text-purple-600 hover:text-purple-500 select-none"
    >
      {{ quantity }}
    </p>

    <div
      class="h-8 w-8 border-2 rounded-full cursor-pointer flex items-center justify-center"
      @click="addQuantityToCart"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="gray"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import { useShoppingStore } from '../../store/shoppingCart';

export default {
  props: ['gtin', 'quantity', 'internalState'],
  emits: ['increase-quantity', 'subtract-quantity'],
  methods: {
    addQuantityToCart() {
      if (this.internalState) {
        this.$emit('increase-quantity');
      } else {
        useShoppingStore().increaseCartQuantity(this.gtin);
      }
    },
    subtractQuantityFromCart() {
      if (this.internalState) {
        this.$emit('subtract-quantity');
      } else {
        useShoppingStore().subtractCartQuantity(this.gtin);
      }
    },
  },
};
</script>
