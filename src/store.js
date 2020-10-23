import Vue from 'vue';
import Vuex from 'vuex';
import {vuetify} from '@/vuetify';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    darkTheme: false,
  },
  mutations: {
    changeTheme(state, value) {
      state.darkTheme = value;
      vuetify.framework.theme.dark = value;
      // Pure JS trick to add class to main <html> tag to be able to style main scrollbars
      if (value) {
        document.documentElement.classList.add("app-dark");
      } else {
        document.documentElement.classList.remove("app-dark");
      }
    },
  },
  getters: {},
  actions: {}
});