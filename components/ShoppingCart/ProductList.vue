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

<script>
import VAlert from '../Alert/index.vue';
import ProductCartItem from './ProductCartItem.vue';
import EmptyCart from './EmptyCart.vue';

import { useShoppingStore } from '../../store/shoppingCart';

export default {
  data() {
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
    isCartEmpty() {
      return useShoppingStore().getCart.length === 0;
    },
    cartList() {
      return useShoppingStore().getCart;
    },
  },
  methods: {
    onDelete(product) {
      this.deletedProduct = { name: product.name, gtin: product.gtin };
      this.open = true;
    },
    onDeleteConfirm() {
      if (this.deletedProduct) {
        this.open = false;
        useShoppingStore().removeFromCart(this.deletedProduct.gtin);
      }
    },
    onDeleteReject() {
      this.open = false;
    },
  },
};
</script>
