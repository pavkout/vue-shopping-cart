import { defineStore } from 'pinia';
import { useToast } from 'vue-toastification';
import * as Storage from 'nuxt-storage/local-storage/index.js';

const { getData, setData } = Storage;

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

const initialState: IState = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
  isCartOpen: false,
  selectedProduct: null,
};

const state = (): IState => initialState;

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

    this.updateLocalStorage();
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

    this.updateLocalStorage();
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

    this.updateLocalStorage();
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

    this.updateLocalStorage();
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

    this.updateLocalStorage(initialState);
  },
  updateLocalStorage(state?: IState) {
    const savedCart = state || {
      cart: this.cart,
      totalItems: this.totalItems,
      totalPrice: this.totalPrice,
      isCartOpen: false,
      selectedProduct: null,
    };

    setData('savedCart', savedCart, 24, 'h');
  },
  openCart() {
    this.isCartOpen = true;
  },
  closeCart() {
    this.isCartOpen = false;
  },
  initCart() {
    const state: IState = getData('savedCart') || undefined;

    if (state) {
      this.cart = state.cart;
      this.totalItems = state.totalItems;
      this.totalPrice = state.totalPrice;
      this.isCartOpen = state.isCartOpen;
    }
  },
};

export const useShoppingStore = defineStore({
  id: 'shoppingStore',
  state,
  getters,
  actions,
});
