import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import 'sweetalert2'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import axios from 'axios'

import VueAnalytics from 'vue-analytics';


axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';


import Sharecopy from './components/Sharecopy.vue'
import Home from './components/Home.vue'
import User from './components/User.vue'
import MyClipboard from './components/MyClipboard.vue'
//import VeeValidate from 'vee-validate'
Vue.use(VueRouter);

Vue.prototype.$http = axios;
Vue.prototype.$UserId = null;
Vue.use(BootstrapVue)
Vue.config.productionTip = false 

//Vue.use(VeeValidate);
 
const approutes = 
[
  {path:'/',component:Home},
  {path:'/clipboard/',component:Sharecopy,props: true},
  {path:'/user/',component:User,props: true},
  {path:'/myaccount/',component:MyClipboard,props: true}
];

const router = new VueRouter(
  {
    routes:approutes
  }
);
// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: 'UA-157958865-1',
  // [Required] The name of your app as specified in Google Analytics.
  appName: 'sharecopy',
  // [Required] The version of your app.
  appVersion: '1.0',
  vueRouter: router,
});


new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
