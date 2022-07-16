import { defineStore } from 'pinia';
import { useToast } from 'vue-toastification';

import { IState, Product } from '../types/types';
import {
  addProductToCart,
  increaseProductQuantity,
  increaseQuantity,
  increaseTotalPrice,
  removeProductFromCart,
  subtractProductQuantity,
  subtractQuantity,
  subtractTotalPrice,
} from '../utils/storeHelpers';

const toast = useToast();

const state = (): IState => ({
  cart: [],
  totalItems: 0,
  totalPrice: 0,
  isCartOpen: false,
  selectedProduct: null,
});

const getters = {
  getCart(state: IState) {
    return state.cart;
  },
  getTotalItems(state: IState) {
    return state.totalItems;
  },
  getTotalPrice(state: IState) {
    return state.totalPrice;
  },
  getIsCartOpen(state: IState) {
    return state.isCartOpen;
  },
  getSelectedProduct(state: IState) {
    return state.selectedProduct;
  },
};

const actions = {
  addToCart(product: Product) {
    this.cart = addProductToCart(this.cart, product);
    this.totalItems = increaseQuantity(this.totalItems, product.quantity);
    this.totalPrice = increaseTotalPrice(
      this.totalPrice,
      product.recommendedRetailPrice,
      product.quantity
    );
    toast.success(`${product.name} has successfully added to the cart.`);
  },
  removeFromCart(gtin: string) {
    // Find the product in order to get the quantity.
    const product: Product | undefined = this.cart.find((p) => p.gtin === gtin);

    this.cart = removeProductFromCart(this.cart, gtin);
    this.totalItems = subtractQuantity(this.totalItems, product?.quantity);
    this.totalPrice = subtractTotalPrice(
      this.totalPrice,
      product?.recommendedRetailPrice,
      product?.quantity
    );
    toast.info(`${product.name} has successfully removed from the cart.`);
  },
  increaseCartQuantity(gtin: string) {
    // Find the product in order to get the quantity.
    const product = this.cart.find((p) => p.gtin === gtin);

    this.cart = increaseProductQuantity(this.cart, gtin);
    this.totalItems = increaseQuantity(this.totalItems);
    this.totalPrice = increaseTotalPrice(
      this.totalPrice,
      product?.recommendedRetailPrice
    );
  },
  subtractCartQuantity(gtin: string) {
    // Find the product in order to get the quantity.
    let product = this.cart.find((p) => p.gtin === gtin);

    this.cart = subtractProductQuantity(this.cart, gtin);
    this.totalItems = subtractQuantity(this.totalItems);
    this.totalPrice = subtractTotalPrice(
      this.totalPrice,
      product?.recommendedRetailPrice
    );
  },
  selectProduct(product: Product) {
    this.selectedProduct = product;
  },
  resetProduct() {
    this.selectedProduct = null;
  },
  resetCart() {
    this.cart = [];
    this.totalItems = 0;
    this.totalPrice = 0;
    this.isCartOpen = false;

    toast.info('The cart has successfully erased.');
  },
  openCart() {
    this.isCartOpen = true;
  },
  closeCart() {
    this.isCartOpen = false;
  },
  initCart(state: IState) {
    this.cart = state.cart;
    this.totalItems = state.totalItems;
    this.totalPrice = state.totalPrice;
    this.isCartOpen = state.isCartOpen;
  },
};

export const useShoppingStore = defineStore({
  id: 'shoppingStore',
  state,
  getters,
  actions,
});
