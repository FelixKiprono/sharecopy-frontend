(function(t){function a(a){for(var s,o,i=a[0],l=a[1],c=a[2],p=0,d=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(a);while(d.length)d.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,i=1;i<e.length;i++){var l=e[i];0!==n[l]&&(s=!1)}s&&(r.splice(a--,1),t=o(o.s=e[0]))}return t}var s={},n={app:0},r=[];function o(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=s,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)o.d(e,s,function(a){return t[a]}.bind(null,s));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=a,i=i.slice();for(var c=0;c<i.length;c++)a(i[c]);var u=l;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"0084":function(t,a,e){},"3ad8":function(t,a,e){"use strict";var s=e("0084"),n=e.n(s);n.a},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),n=e("8c4f"),r=e("5f5b"),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},i=[],l={},c=l,u=e("2877"),p=Object(u["a"])(c,o,i,!1,null,null,null),d=p.exports,v=(e("ab8b"),e("2dd8"),e("bc3a")),h=e.n(v),b=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light shadow fixed-top"},[e("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Back Home")]),t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item active"},[e("a",{staticClass:"nav-link",attrs:{href:""}},[t._v(" "+t._s(t.name)+" Clipboard "),e("span",{staticClass:"badge badge-success"},[t._v("(Connected)")])])])])])],1),e("br"),e("br"),e("br"),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"panel panel-default"},[e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"form-group"},[e("b-button",{attrs:{variant:"outline-primary"},on:{click:function(a){return t.clearclipboard()}}},[t._v("New")]),e("b-button",{attrs:{variant:"outline-primary"},on:{click:function(a){return t.saveclipboard()}}},[t._v("Save")])],1)]),e("br"),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"title"}},[t._v("Clipboard Title:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",id:"title"},domProps:{value:t.title},on:{input:function(a){a.target.composing||(t.title=a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("div",{staticClass:"panel-body"},[e("label",{attrs:{for:"comment"}},[t._v("Clipboard")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.notes,expression:"notes"}],staticClass:"form-control",attrs:{rows:"15",id:"notes"},domProps:{value:t.notes},on:{input:function(a){a.target.composing||(t.notes=a.target.value)}}})])])])])])},f=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],m=(e("b0c0"),{name:"sharecopy",data:function(){return{livehttpurl:"https://api.sharecopy.greenbyte.systems/",word:"",userid:"1",httpurl:"",info:"",title:"",notes:"",name:""}},watch:{$route:function(t){this.word=t.params.access},created:function(){this.word=this.$route.params.access}},methods:{initfunc:function(){var t=this,a=null;null!=this.$route.params.access?a=this.$route.params.access:(this.title=null,this.notes=null,this.name=null,this.word=null);var e={headers:{"Content-Type":"application/json"}};this.$http.get(this.livehttpurl+"api/myclipboard",{params:{access:a}},e).then((function(a){t.notes=a.data.clipboard,t.title=a.data.title,t.name=a.data.name}))},clearclipboard:function(){this.title=null,this.notes=null,this.word=null,this.toastCount++,this.$bvToast.toast("Cleared Notes",{title:"Sharecopy",autoHideDelay:5e3,appendToast:!1})},makeToast:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.toastCount++,this.$bvToast.toast("Successfully saved  Notes",{title:"Sharecopy",autoHideDelay:5e3,appendToast:t})},saveclipboard:function(){var t=this,a={headers:{"Content-Type":"application/json"}},e={userid:this.userid,title:this.title,notes:this.notes};this.$http.post(this.livehttpurl+"api/newclipboard",e,a).then((function(a){t.makeToast(),window.console.log(a)}))},fetchnotes:function(){var t={headers:{"Content-Type":"application/json"}};this.$http.get(this.livehttpurl+"api/allclipboard/word?",t).then((function(t){window.console.log(t)}))}},mounted:function(){this.initfunc()}}),g=m,C=Object(u["a"])(g,b,f,!1,null,"54e2d737",null),y=C.exports,_=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._m(0),e("header",{staticClass:"masthead"},[e("div",{staticClass:"container h-100"},[e("div",{staticClass:"row h-100 align-items-center"},[e("div",{staticClass:"col-12 text-center"},[e("h1",{staticClass:"font-weight-light"},[t._v("Welcome to sharecopy")]),e("p",{staticClass:"lead"},[t._v("Copy and share your content online")]),e("router-link",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{to:"/clipboard",tag:"button"}},[t._v("Shareclipboard")]),e("br"),e("div",{staticClass:"input-group mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.access,expression:"access"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Your Access Word"},domProps:{value:t.access},on:{input:function(a){a.target.composing||(t.access=a.target.value)}}}),e("div",{staticClass:"input-group-append"},[e("router-link",{staticClass:"btn btn-success btn-block",attrs:{to:{name:"clipboard",params:{access:t.access}},tag:"button"}},[t._v("View Shared Clipboard")])],1)]),e("b-toast",{attrs:{id:"example-toast",title:"Sharecopy",static:"","no-auto-hide":""}},[t._v("Provide Access Code Before Proceeding.")])],1)])])])])},w=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light shadow fixed-top"},[e("div",{staticClass:"container"},[e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Sharecopy")]),e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})]),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item active"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v(" Home "),e("span",{staticClass:"sr-only"},[t._v("(current)")])])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Premium")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Contact")])])])])])])}],x={name:"home",data:function(){return{httpurl:"",access:""}},methods:{validate:function(){""===this.access&&this.message("b-toaster-bottom-full danger","Please Provide Access Code",!0)},message:function(t,a){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.counter++,this.$bvToast.toast(a,{title:"Sharecopy",toaster:t,solid:!0,appendToast:e})}}},k=x,T=(e("3ad8"),Object(u["a"])(k,_,w,!1,null,"20375b5f",null)),$=T.exports;s["default"].use(n["a"]),s["default"].prototype.$http=h.a,s["default"].use(r["a"]),s["default"].config.productionTip=!1;var j=[{path:"/",component:$},{path:"/clipboard/:access",component:y,name:"clipboard"}],P=new n["a"]({routes:j});new s["default"]({router:P,render:function(t){return t(d)}}).$mount("#app")}});
//# sourceMappingURL=app.7239a186.js.map