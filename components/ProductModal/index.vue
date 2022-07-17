<template>
  <TransitionRoot as="template" :show="open" v-if="open">
    <Dialog as="div" class="relative z-10" @close="onClose">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block dark:bg-gray-500 dark:bg-opacity-50"
        />
      </TransitionChild>

      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div
          class="flex items-stretch md:items-center justify-center min-h-full text-center md:px-2 lg:px-4"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            enter-to="opacity-100 translate-y-0 md:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 md:scale-100"
            leave-to="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
          >
            <DialogPanel
              class="flex text-base text-left transform transition w-full md:max-w-2xl md:px-4 md:my-8 lg:max-w-4xl"
            >
              <div
                class="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8 dark:bg-gray-900"
              >
                <button
                  type="button"
                  class="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                  @click="onClose"
                >
                  <span class="sr-only">Close</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </button>

                <div
                  class="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8"
                >
                  <div
                    class="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5"
                  >
                    <img
                      :src="product.imageUrl"
                      :alt="product.name"
                      class="object-center object-cover dark:bg-gray-900"
                    />
                  </div>
                  <div class="sm:col-span-8 lg:col-span-7">
                    <h2
                      class="text-2xl font-extrabold text-gray-900 sm:pr-12 dark:text-gray-200"
                    >
                      {{ product.name }}
                    </h2>

                    <section aria-labelledby="information-heading" class="mt-2">
                      <h3 id="information-heading" class="sr-only">
                        Product information
                      </h3>

                      <p class="text-2xl text-gray-900 dark:text-gray-200">
                        {{ formatedPrice }}
                      </p>

                      <!-- Reviews -->
                      <div class="mt-6">
                        <h4 class="sr-only">Reviews</h4>
                        <div class="flex items-center">
                          <div class="flex items-center">
                            <StarIcon
                              v-for="rating in [0, 1, 2, 3, 4]"
                              :key="rating"
                              :class="[
                                ratingStars > rating
                                  ? 'text-gray-900 dark:text-gray-200'
                                  : 'text-gray-200 dark:text-gray-700',
                                'h-5 w-5 flex-shrink-0',
                              ]"
                              aria-hidden="true"
                            />
                          </div>
                          <p class="sr-only">
                            {{ ratingStars }} out of 5 stars
                          </p>
                          <a
                            href="#"
                            class="ml-3 text-sm font-medium text-purple-600 hover:text-purple-500"
                            >{{ reviewsNum }} reviews</a
                          >
                        </div>
                      </div>
                    </section>

                    <section aria-labelledby="options-heading" class="mt-10">
                      <h3 id="options-heading" class="sr-only">
                        Product options
                      </h3>
                      <p class="mt-1 text-sm text-gray-500">
                        Brand: {{ product.brandName }}
                      </p>
                      <p class="mt-1 text-sm text-gray-500">
                        Category: {{ product.categoryName }}
                      </p>
                      <div class="flex justify-center items-center mt-6 gap-4">
                        <item-quantity
                          internalState="true"
                          :gtin="product.gtin"
                          :quantity="selectedQuantity"
                          @increase-quantity="addQuantity"
                          @subtract-quantity="subtractQuantity"
                        ></item-quantity>
                        <button
                          type="submit"
                          @click="onAddProduct"
                          class="w-3/4 bg-purple-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 select-none"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script lang="ts">
import {
  Dialog,
  DialogPanel,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';
import { XIcon } from '@heroicons/vue/outline/index.js';
import { StarIcon } from '@heroicons/vue/solid/index.js';
import { formatPrice } from '../../utils/index';
import ItemQuantity from '../ItemQuantity/index.vue';
import { Product } from '../../types/types';
import { useShoppingStore } from '../../store/shoppingCart';

export default {
  props: {
    open: { type: Boolean, default: false },
    ratingStars: { type: Number, default: 1 },
    reviewsNum: { type: Number, default: 1 },
  },
  data(): Object {
    return {
      selectedQuantity: 1,
    };
  },
  components: {
    Dialog,
    DialogPanel,
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
    TransitionChild,
    TransitionRoot,
    ItemQuantity,
    XIcon,
    StarIcon,
  },
  computed: {
    product(): Product {
      return useShoppingStore().getSelectedProduct;
    },
    formatedPrice(): String {
      return formatPrice(
        this.product.recommendedRetailPriceCurrency,
        this.product.recommendedRetailPrice
      );
    },
  },
  methods: {
    addQuantity(): void {
      this.selectedQuantity++;
    },
    subtractQuantity(): void {
      this.selectedQuantity--;
    },
    onAddProduct(): void {
      // Update the cart list.
      useShoppingStore().addToCart({
        ...this.product,
        quantity: this.selectedQuantity,
      });

      // Reset the quantity data.
      this.selectedQuantity = 1;

      // Reset the selected product.
      useShoppingStore().resetProduct();
    },
    onClose(): void {
      // Reset the selected product.
      useShoppingStore().resetProduct();

      // Reset the quantity data.
      this.selectedQuantity = 1;
    },
  },
};
</script>
