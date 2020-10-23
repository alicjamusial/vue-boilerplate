import Vue from 'vue';
import {router} from '@/router';
import VueAnalytics from 'vue-analytics';

export const addAnalytics = () => {
  Vue.use(VueAnalytics, {
    id: process.env.VUE_APP_ANALYTICS,
    router,
    autoTracking: {
      pageviewTemplate(route) {
        return {
          page: route.path,
          title: document.title,
          location: window.location.href
        }
      }
    },
    debug: {
      enabled: false
    }
  });
};
