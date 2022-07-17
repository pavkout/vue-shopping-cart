<template>
  <div>
    <empty-cart v-if="isCartEmpty"></empty-cart>
    <div v-if="!isCartEmpty" class="mt-8">
      <div class="flow-root">
        <ul role="list" class="-my-6 divide-y divide-gray-200">
          <li v-for="product in cartList" :key="product.gtin" class="flex py-6">
            <product-cart-item
              :product="product"
              @delete-product="onDelete(product)"
            ></product-cart-item>
          </li>
        </ul>
        <v-alert
          :open="open"
          title="Delete Product"
          description="Are you sure you want to delete the product? This action cannot be undone."
          @confirm="onDeleteConfirm"
          @reject="onDeleteReject"
        ></v-alert>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import VAlert from '../Alert/index.vue';
import ProductCartItem from './ProductCartItem.vue';
import EmptyCart from './EmptyCart.vue';

import { Product } from '../../types/types';

import { useShoppingStore } from '../../store/shoppingCart';

export default {
  data(): Object {
    return {
      open: false,
      deletedProduct: null,
    };
  },
  components: {
    VAlert,
    ProductCartItem,
    EmptyCart,
  },
  computed: {
    isCartEmpty(): Boolean {
      return useShoppingStore().getCart.length === 0;
    },
    cartList(): Product[] {
      return useShoppingStore().getCart;
    },
  },
  methods: {
    onDelete(product): void {
      this.deletedProduct = { name: product.name, gtin: product.gtin };
      this.open = true;
    },
    onDeleteConfirm(): void {
      if (this.deletedProduct) {
        this.open = false;
        useShoppingStore().removeFromCart(this.deletedProduct.gtin);
      }
    },
    onDeleteReject(): void {
      this.open = false;
    },
  },
};
</script>
