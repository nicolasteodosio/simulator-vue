/* eslint-disable no-new */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import VeeValidate from 'vee-validate';
import VueResource from 'vue-resource';
import App from './App';
import router from './router';
import msg from './pt_BR';


Vue.use(VueResource);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

Vue.use(VeeValidate, {

  locale: 'pt_BR',
  dictionary: {
    pt_BR: {
      messages: msg,
    },
  },
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
