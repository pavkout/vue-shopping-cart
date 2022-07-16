<template>
  <footer class="bg-gray-200 bg-opacity-40 w-screen pt-8 pb-4 dark:bg-gray-700">
    <div
      class="flex flex-col md:flex-row w-5/6 2xl:w-7/12 m-auto justify-between space-y-12 md:space-y-0"
    >
      <div class="text-center md:text-left m-auto w-full md:w-0">
        <h1
          class="font-display font-medium text-2xl text-gray-900 dark:text-gray-200"
        >
          Join the Qogita Family
        </h1>
        <p class="font-body py-4 w-72 text-gray-700 dark:text-gray-400">
          Get notified of new products, special promotions, sales, and more.
        </p>
        <div class="flex mt-6">
          <input
            class="h-12 p-4 rounded-l font-body bg-gray-100 border-gray-400 hover:border-gray-700 focus:border-gray-700 focus: border-2 focus:outline-none dark:bg-gray-600"
            type="text"
            placeholder="Enter Your Email..."
          />
          <button
            class="h-12 p-4 w-28 font-body text-sm bg-purple-500 text-white rounded-r transition duration-300 border-purple-900 hover:bg-transparent hover:text-gray-900 hover:border"
          >
            Subscribe
          </button>
        </div>
      </div>

      <div
        class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 p-6 sm:px-20 lg:px-20 px-6"
      >
        <div class="flex flex-col space-y-4">
          <NuxtLink to="/">
            <h1
              class="font-display font-medium md:text-lg text-gray-900 dark:text-gray-200"
            >
              Our offers
            </h1>
          </NuxtLink>
          <NuxtLink to="/">
            <p
              class="font-body text-sm md:text-base text-gray-700 dark:text-gray-400"
            >
              View catalog
            </p>
          </NuxtLink>
          <NuxtLink to="/">
            <p
              class="font-body text-sm md:text-base text-gray-700 dark:text-gray-400"
            >
              Sell First, Pay Later
            </p>
          </NuxtLink>
        </div>

        <div class="flex flex-col space-y-4">
          <NuxtLink to="/">
            <h1
              class="font-display font-medium md:text-lg text-gray-900 dark:text-gray-200"
            >
              Information
            </h1>
          </NuxtLink>
          <NuxtLink to="/">
            <p
              class="font-body text-sm md:text-base text-gray-700 dark:text-gray-400"
            >
              Why Qogita
            </p>
          </NuxtLink>
          <NuxtLink to="/">
            <p
              class="font-body text-sm md:text-base text-gray-700 dark:text-gray-400"
            >
              Buyers
            </p>
          </NuxtLink>
          <NuxtLink to="/">
            <p
              class="font-body text-sm md:text-base text-gray-700 dark:text-gray-400"
            >
              Sellers
            </p>
          </NuxtLink>
        </div>

        <div class="flex flex-col space-y-4">
          <NuxtLink to="/">
            <h1
              class="font-display font-medium md:text-lg text-gray-900 dark:text-gray-200"
            >
              Support
            </h1>
          </NuxtLink>
          <NuxtLink to="/">
            <p
              class="font-body text-sm md:text-base text-gray-700 dark:text-gray-400"
            >
              Help
            </p>
          </NuxtLink>
          <NuxtLink to="/">
            <p
              class="font-body text-sm md:text-base text-gray-700 dark:text-gray-400"
            >
              Contact
            </p>
          </NuxtLink>
          <NuxtLink to="/">
            <p
              class="font-body text-sm md:text-base text-gray-700 dark:text-gray-400"
            >
              Developers
            </p>
          </NuxtLink>
        </div>

        <div class="flex flex-col space-y-4">
          <NuxtLink to="/">
            <h1
              class="font-display font-medium md:text-lg text-gray-900 dark:text-gray-200"
            >
              Company
            </h1>
          </NuxtLink>
          <NuxtLink to="/">
            <p
              class="font-body text-sm md:text-base text-gray-700 dark:text-gray-400"
            >
              About
            </p>
          </NuxtLink>
          <NuxtLink to="/">
            <p
              class="font-body text-sm md:text-base text-gray-700 dark:text-gray-400"
            >
              Careers
            </p>
          </NuxtLink>
          <NuxtLink to="/">
            <p
              class="font-body text-sm md:text-base text-gray-700 dark:text-gray-400"
            >
              FAQ
            </p>
          </NuxtLink>
        </div>

        <div class="flex flex-col space-y-4">
          <h1
            class="font-display font-medium md:text-lg text-gray-900 dark:text-gray-200"
          >
            Contact
          </h1>
          <p class="font-body text-sm text-gray-700 dark:text-gray-400">
            pkoutoglou@gmail.com
          </p>
        </div>
      </div>
    </div>
    <span
      class="flex items-end justify-center w-full h-20 text-gray-900 dark:text-gray-200"
    >
      © {{ getYear }} Qogita. All rights reserved.
    </span>
  </footer>
</template>

<script>
export default {
  computed: {
    getYear() {
      return new Date().getFullYear();
    },
  },
};
</script>
