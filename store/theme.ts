import { defineStore } from 'pinia';

const state = () => ({
  dark: false,
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
