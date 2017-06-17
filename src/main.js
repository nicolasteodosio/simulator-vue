/* eslint-disable no-new */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import VeeValidate from 'vee-validate';
import VueResource from 'vue-resource';
import VueNotifications from 'vue-notifications';
import miniToastr from 'mini-toastr';
import App from './App';
import router from './router';
import msg from './pt_BR';

const toastTypes = {
  success: 'success',
  error: 'error',
  info: 'info',
  warn: 'warn',
};

miniToastr.init({ types: toastTypes });

function toast({ title, message, type, timeout, cb }) {
  return miniToastr[type](message, title, timeout, cb);
}

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast,
};
Vue.use(VueNotifications, options);
Vue.use(VueResource);
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
