<template>
  <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
    <div
      class="flex justify-between text-base font-medium text-gray-900 dark:text-gray-200"
    >
      <p>Subtotal</p>
      <p>{{ formatedPrice }}</p>
    </div>
    <p class="mt-0.5 text-sm text-gray-500">
      Shipping and taxes calculated at checkout.
    </p>
    <div class="mt-6">
      <button
        aria-label="Checkout"
        :disabled="isCheckoutDisabled"
        :class="checkoutClasses"
        @click="onClose"
      >
        Checkout
      </button>
    </div>
    <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
      <p>
        <span v-if="totalItems > 0">or {{ ' ' }}</span>
        <button
          v-if="totalItems > 0"
          type="button"
          class="font-medium text-gray-400 hover:text-gray-500"
          @click="onErase"
        >
          Erase Cart
        </button>
        or
        <button
          type="button"
          class="font-medium text-purple-600 hover:text-purple-500"
          @click="onClose"
        >
          Continue Shopping
          <span aria-hidden="true"> &rarr;</span>
        </button>
      </p>
    </div>
    <v-alert
      :open="open"
      title="Erase Cart"
      description="Are you sure you want to erase your cart? All of your data will be permanently removed. This action cannot be undone."
      @confirm="onEraseConfirm"
      @reject="onEraseReject"
    ></v-alert>
  </div>
</template>

<script lang="ts">
import VAlert from '../Alert/index.vue';
import { formatPrice } from '../../utils/index';

import { useShoppingStore } from '../../store/shoppingCart';

export default {
  data(): Object {
    return {
      open: false,
    };
  },
  components: {
    VAlert,
  },
  computed: {
    totalItems(): Number {
      return useShoppingStore().getTotalItems;
    },
    formatedPrice(): String {
      return formatPrice('€', useShoppingStore().getTotalPrice);
    },
    isCheckoutDisabled(): Boolean {
      return this.totalItems === 0;
    },
    checkoutClasses(): Object {
      return {
        'flex items-center justify-center w-full rounded-md border border-transparent bg-purple-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-purple-700':
          true,
        'bg-gray-400 cursor-not-allowed hover:bg-gray-400':
          this.totalItems === 0,
      };
    },
  },
  methods: {
    onClose(): void {
      useShoppingStore().closeCart();
    },
    onErase(): void {
      this.open = true;
    },
    onEraseConfirm(): void {
      this.open = false;
      useShoppingStore().resetCart();
    },
    onEraseReject(): void {
      this.open = false;
    },
  },
};
</script>
