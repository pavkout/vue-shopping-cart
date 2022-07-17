import { defineStore } from 'pinia';
import Storage from 'nuxt-storage/local-storage/index.js';

const { getData } = Storage;

const state = () => ({
  dark: getData('theme') === 'dark',
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
