import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import 'sweetalert2'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import axios from 'axios'

import Sharecopy from './components/Sharecopy.vue'
import Home from './components/Home.vue'
import User from './components/User.vue'
import MyClipboard from './components/MyClipboard.vue'
Vue.use(VueRouter);

Vue.prototype.$http = axios;
Vue.prototype.$UserId = null;
Vue.use(BootstrapVue)
Vue.config.productionTip = false 
 
const approutes = 
[
  {path:'/',component:Home},
  {path:'/clipboard/:access',component:Sharecopy,name:'clipboard'},
  {path:'/user/',component:User,props: true},
  {path:'/myaccount/',component:MyClipboard,props: true}
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
