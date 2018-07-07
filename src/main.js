import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
import App from './App';
import Products from './components/Products';
import Cart from './components/Cart';

Vue.use(VueRouter);

// Define routes
const routes = [
  { path: '/', component: Products },
  { path: '/cart', component: Cart },
];

// Register routes
const router = new VueRouter({
  routes,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
});
