import { defineStore } from 'pinia';
import nuxtStorage from 'nuxt-storage';

const state = () => ({
  dark: nuxtStorage.localStorage.getData('theme') === 'dark',
});

const getters = {
  getDark(state) {
    return state.dark;
  },
};

const actions = {
  setDark(dark: boolean) {
    this.dark = dark;
  },
};

export const useThemeStore = defineStore({
  id: 'themeStore',
  state,
  getters,
  actions,
});
