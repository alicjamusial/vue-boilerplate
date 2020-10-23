import Vue from 'vue';
import Vuetify from 'vuetify';

export const LightTheme = {
  primary: '#C94277',
};

export const DarkTheme = {
  primary: '#C94277',
};

Vue.use(Vuetify);

export const vuetify = new Vuetify({
  theme: {
    themes: {
      light: LightTheme,
      dark: DarkTheme,
    }}}
  );

import VuetifyConfirm from 'vuetify-confirm';
Vue.use(VuetifyConfirm, {
  vuetify,
  buttonTrueText: 'yes',
  buttonTrueColor: 'primary',
  buttonFalseText: 'no',
  buttonFalseColor: 'tooltips',
  color: 'secondary',
  icon: 'warning',
  title: 'warning',
  width: 300,
  property: '$confirm'
});