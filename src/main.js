// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import lodash from 'lodash';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import VeeValidate, { Validator } from 'vee-validate';
import App from './App';
import router from './router';


Vue.use(VeeValidate);
Validator.setLocale('pt_BR');
Vue.use(BootstrapVue);
Vue.use(lodash);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
