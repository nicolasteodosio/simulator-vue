import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';

const Login = () => System.import('@/components/Login');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
