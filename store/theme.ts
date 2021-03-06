import { defineStore } from 'pinia';
import { getData } from '../utils/localStorage';

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
