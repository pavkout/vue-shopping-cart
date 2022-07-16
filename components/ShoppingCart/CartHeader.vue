<template>
  <div class="flex items-start justify-between">
    <DialogTitle class="text-lg font-medium text-gray-900 dark:text-gray-200">
      Shopping cart
    </DialogTitle>
    <div class="ml-3 flex h-7 items-center">
      <button
        type="button"
        class="-m-2 p-2 text-gray-400 hover:text-gray-500"
        @click="onClose"
      >
        <span class="sr-only">Close panel</span>
        <XIcon class="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>

<script>
import { DialogTitle } from '@headlessui/vue';
import { XIcon } from '@heroicons/vue/outline';
import { useShoppingStore } from '../../store/shoppingCart';

export default {
  components: {
    DialogTitle,
    XIcon,
  },
  methods: {
    onClose() {
      const store = useShoppingStore();
      store.closeCart();
    },
  },
};
</script>
