<template>
  <div
    class="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4 dark:bg-gray-900"
  >
    <div
      class="lg:w-3/5 w-full flex items-center justify-between border-t border-gray-200"
    >
      <div role="button" :class="getPreviousClass" @click="goBack">
        <svg
          width="14"
          height="8"
          view-box="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.1665 4H12.8332"
            stroke="currentColor"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1.1665 4L4.49984 7.33333"
            stroke="currentColor"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1.1665 4.00002L4.49984 0.666687"
            stroke="currentColor"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p class="text-sm ml-3 font-medium leading-none">Previous</p>
      </div>
      <div class="sm:flex hidden">
        <p
          v-for="num in numberArray"
          :key="num"
          :class="getNumberClass(num)"
          @click="numberClick(num)"
        >
          {{ num }}
        </p>
      </div>
      <div role="button" :class="getNextClass" @click="goNext">
        <p class="text-sm font-medium leading-none mr-3">Next</p>
        <svg
          width="14"
          height="8"
          view-box="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.1665 4H12.8332"
            stroke="currentColor"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.5 7.33333L12.8333 4"
            stroke="currentColor"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.5 0.666687L12.8333 4.00002"
            stroke="currentColor"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['numberOfPages', 'onChange'],
  data() {
    return {
      active: 1,
      numberArray: Array.from(
        Array(this.numberOfPages),
        (val, index) => index + 1
      ),
    };
  },
  computed: {
    getPreviousClass() {
      return {
        'flex items-center pt-3': true,
        'text-gray-600 hover:text-indigo-700 cursor-pointer dark:text-gray-300 dark:hover:text-indigo-700':
          this.active > 1,
        'text-gray-300 cursor-default dark:text-gray-600': this.active <= 1,
      };
    },
    getNextClass() {
      return {
        'flex items-center pt-3': true,
        'text-gray-600 hover:text-indigo-700 cursor-pointer dark:text-gray-300 dark:hover:text-indigo-700':
          this.active < this.numberOfPages,
        'text-gray-300 cursor-default dark:text-gray-600':
          this.active >= this.numberOfPages,
      };
    },
  },
  methods: {
    goBack() {
      if (this.active > 1) {
        this.active -= 1;
        this.onChange(this.active);
      }
    },
    goNext() {
      if (this.active < this.numberOfPages) {
        this.active += 1;
        this.onChange(this.active);
      }
    },
    numberClick(i) {
      this.active = i;
      this.onChange(i);
    },
    getNumberClass(i) {
      const defaultClasses =
        'text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2';
      const activeClasses =
        'text-sm font-medium leading-none cursor-pointer text-indigo-700 border-t border-indigo-400 pt-3 mr-4 px-2';

      return {
        [activeClasses]: this.active === i,
        [defaultClasses]: this.active !== i,
      };
    },
  },
};
</script>
