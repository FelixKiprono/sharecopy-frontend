import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({

    state:{
      url:'https://api.sharecopy.cc/',
      // url:'http://localhost:8000/',
        phrasecode:'',
        userid:'',
        password:'',
        IsNew:false,
        loginstate:false
    },
    mutations:{

    },
    actions:{

    }
});
