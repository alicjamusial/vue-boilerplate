import '@babel/polyfill'
import Vue from 'vue';

import App from '@/App.vue';
import {router} from '@/router';
import {store} from '@/store';
import {vuetify} from '@/vuetify';
import {addAnalytics} from "@/Analytics";

Vue.config.productionTip = false;

addAnalytics();

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app');
