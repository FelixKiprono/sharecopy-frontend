import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import axios from 'axios'

import Sharecopy from './components/Sharecopy.vue'
import Home from './components/Home.vue'

Vue.use(VueRouter);

Vue.prototype.$http = axios;

Vue.use(BootstrapVue)
Vue.config.productionTip = false 
 
const approutes = 
[
  {path:'/',component:Home},
  {path:'/clipboard/:access',component:Sharecopy,name:'clipboard'}
];

const router = new VueRouter(
  {
    routes:approutes
  }
);


new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
