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
        disabled="totalItems === 0"
        aria-label="Checkout"
        class="totalItems === 0 ? 'bg-gray-400 cursor-not-allowed' : '' flex items-center justify-center w-full rounded-md border border-transparent bg-purple-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-purple-700'"
      >
        Checkout
      </button>
    </div>
    <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
      <p>
        <span v-if="totalItems > 0">or</span>
        <button
          v-if="totalItems > 0"
          type="button"
          class="font-medium text-gray-400 hover:text-gray-500"
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
      :open="false"
      title="Erase Cart"
      description="Are you sure you want to erase your cart? All of your data will be permanently removed. This action cannot be undone."
    ></v-alert>
  </div>
</template>

<script>
import VAlert from '../Alert/index.vue';
import { formatPrice } from '../../utils/index.ts';
import { useShoppingStore } from '../../store/shoppingCart';

export default {
  components: {
    VAlert,
  },
  computed: {
    formatedPrice() {
      return formatPrice('€', 55); //totalPrice);
    },
  },
  methods: {
    onClose() {
      const store = useShoppingStore();
      store.closeCart();
    },
  },
};
</script>
