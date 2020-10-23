import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from "@/components/Dashboard";

Vue.use(Router);

const BaseUrl = process.env.BASE_URL;

export const router = new Router({
  base: BaseUrl,
  routes: [
   {
      path: '*',
      component: Dashboard
    }
  ],
  mode: 'history'
});