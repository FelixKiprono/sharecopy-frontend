(function(t){function a(a){for(var s,o,r=a[0],l=a[1],c=a[2],p=0,d=[];p<r.length;p++)o=r[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(a);while(d.length)d.shift()();return n.push.apply(n,c||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],s=!0,r=1;r<e.length;r++){var l=e[r];0!==i[l]&&(s=!1)}s&&(n.splice(a--,1),t=o(o.s=e[0]))}return t}var s={},i={app:0},n=[];function o(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=s,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)o.d(e,s,function(a){return t[a]}.bind(null,s));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=a,r=r.slice();for(var c=0;c<r.length;c++)a(r[c]);var u=l;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),i=e("8c4f"),n=e("5f5b"),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},r=[],l={name:"app",components:{}},c=l,u=e("2877"),p=Object(u["a"])(c,o,r,!1,null,null,null),d=p.exports,m=e("3d20"),v=e.n(m),h=(e("ab8b"),e("2dd8"),e("bc3a")),b=e.n(h),f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light shadow fixed-top"},[e("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Back Home")]),t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item active"},[e("a",{staticClass:"nav-link",attrs:{href:""}},[t._v(" "+t._s(t.name)+" Clipboard "),e("span",{staticClass:"badge badge-success"},[t._v("(Connected)")])])])])])],1),e("br"),e("br"),e("br"),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"panel panel-default"},[e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"alert alert-primary",attrs:{role:"alert"}},[e("h4",[t._v("Your Clipboard can be accessed with this Key : "+t._s(t.accessnumber)+" ")])]),e("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"Basic example"}},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(a){return t.clearclipboard()}}},[t._v("New")]),e("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(a){return t.saveclipboard()}}},[t._v("Save")]),e("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(a){return t.deleteitem()}}},[t._v("Delete")]),e("button",{staticClass:"btn btn-secondary",attrs:{type:"button"}},[t._v("ShareLink")])])]),e("br"),e("div",{staticClass:"form-group"},[t._m(1),e("b-form-input",{attrs:{id:"input-small",size:"sm",placeholder:"Enter your ttile"},model:{value:t.title,callback:function(a){t.title=a},expression:"title"}})],1),e("div",{staticClass:"form-group"},[e("div",{staticClass:"panel-body"},[e("label",{attrs:{for:"comment"}},[t._v("Clipboard")]),e("b-form-textarea",{staticClass:"form-control",attrs:{rows:"13",id:"notes","no-resize":""},model:{value:t.notes,callback:function(a){t.notes=a},expression:"notes"}})],1)])])])])},g=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("label",{attrs:{for:"title"}},[t._v("Clipboard Title ("),e("i",[t._v("optional")]),t._v("):")])}],C=(e("b0c0"),{name:"sharecopy",data:function(){return{showDismissibleAlert:!0,livehttpurl:"http://localhost:8000/",localhttp:"https://api.sharecopy.greenbyte.systems/",idnumber:0,sessioncode:0,accessnumber:0,word:"",userid:"1",httpurl:"",info:"",title:"",notes:"",name:""}},watch:{$route:function(t){this.word=t.params.access},created:function(){this.word=this.$route.params.access,this.sessioncode=this.$route.params.access}},methods:{initfunc:function(){var t=this;this.accessnumber=Math.floor(1e5*Math.random());var a=null;null!=this.$route.params.access?a=this.$route.params.access:(this.title=null,this.notes=null,this.name=null,this.word=null);var e={headers:{"Content-Type":"application/json"}};this.$http.get(this.livehttpurl+"api/mynotes",{params:{access:a}},e).then((function(a){t.notes=a.data.clipboard,t.title=a.data.title,t.name=a.data.name}))},deleteitem:function(){var t=this;alert(this.sessioncode);var a={headers:{"Content-Type":"application/json"}},e={access:this.sessioncode};v.a.fire({title:"Delete",text:"Do you want to to delete this item",icon:"error",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",reverseButtons:!1}).then((function(s){s.value?t.$http.post(t.livehttpurl+"api/deleteitembycode",e,a).then((function(t){window.console.log(t)})):s.dismiss===v.a.DismissReason.cancel&&v.a.fire("Cancelled","Your clipboard item  is safe :)","error")}))},clearclipboard:function(){this.title=null,this.notes=null,this.word=null,this.toastCount++,this.$bvToast.toast("Cleared Notes",{title:"Sharecopy",autoHideDelay:5e3,appendToast:!1})},makeToast:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.toastCount++,this.$bvToast.toast("Successfully saved  Notes",{title:"Sharecopy",autoHideDelay:5e3,appendToast:t})},saveclipboard:function(){var t=this,a={headers:{"Content-Type":"application/json"}},e={userid:this.userid,title:this.title,notes:this.notes,access:this.accessnumber};this.$http.post(this.livehttpurl+"api/newclipboard",e,a).then((function(a){t.makeToast(),window.console.log(a)}))}},mounted:function(){this.initfunc()}}),y=C,_=Object(u["a"])(y,f,g,!1,null,"28e95612",null),w=_.exports,x=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light shadow fixed-top"},[e("div",{staticClass:"container"},[t._m(0),t._m(1),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[t._m(2),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/user"}},[t._v("Account")])],1),e("li",{staticClass:"nav-item"},[e("b-link",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],staticClass:"nav-link"},[t._v("Contact us")]),e("b-modal",{attrs:{id:"modal-1",title:"Contact"}},[e("p",{staticClass:"my-4"},[t._v("Please contact us @ : 94apps.io@gmail.com")])])],1)])])])]),e("header",{staticClass:"masthead"},[e("div",{staticClass:"container h-100"},[e("div",{staticClass:"row h-100 align-items-center"},[e("div",{staticClass:"col-12 text-center"},[e("h1",{staticClass:"font-weight-light"},[t._v("Sharecopy")]),e("p",{staticClass:"lead"},[t._v("Share your clipboard ")]),e("router-link",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{to:"/clipboard/0",tag:"button"}},[t._v("Start Sharing clipboard")]),e("br"),e("div",{staticClass:"input-group mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.access,expression:"access"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Your Access Word"},domProps:{value:t.access},on:{input:function(a){a.target.composing||(t.access=a.target.value)}}}),e("div",{staticClass:"input-group-append"},[e("router-link",{staticClass:"btn btn-success btn-block",attrs:{to:{name:"clipboard",params:{access:t.access}},tag:"button"}},[t._v("View Shared Clipboard")])],1)]),e("b-toast",{attrs:{id:"example-toast",title:"Sharecopy",static:"","no-auto-hide":""}},[t._v("Provide Access Code Before Proceeding.")])],1)])])])])},k=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[e("h1",{staticClass:"font-weight-light"},[t._v("Sharecopy ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav-item active"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v(" Home "),e("span",{staticClass:"sr-only"},[t._v("(current)")])])])}],$={name:"Home",data:function(){return{httpurl:"",access:""}},methods:{validate:function(){""===this.access&&this.message("b-toaster-bottom-full danger","Please Provide Access Code",!0)},message:function(t,a){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.counter++,this.$bvToast.toast(a,{title:"Sharecopy",toaster:t,solid:!0,appendToast:e})}}},T=$,S=(e("68a5"),Object(u["a"])(T,x,k,!1,null,"7ab66bd4",null)),j=S.exports,E=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("MyClipboard",{attrs:{email:t.email}}),e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light shadow fixed-top"},[e("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Account")]),t._m(0)],1),e("br"),e("br"),e("br"),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm"},[e("div",{staticClass:"card"},[t._m(1),e("div",{staticClass:"card-body"},[e("form",[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"formGroupExampleInput1"}},[t._v("Username")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",id:"username",placeholder:"sergei,kiprono etc"},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"formGroupExampleInput2"}},[t._v("Email")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"someone@mail.com"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"formGroupExampleInput3"}},[t._v("Password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"********"},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}})]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return t.SaveUser()}}},[t._v("Register")])])])])]),e("div",{staticClass:"col-sm"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"panel panel-default"},[e("div",{staticClass:"panel-heading"},[e("h4",[t._v("Login")]),e("form",[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"formGroupExampleInput4"}},[t._v("Username")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.loginusername,expression:"loginusername"}],staticClass:"form-control",attrs:{type:"text",id:"username",placeholder:""},domProps:{value:t.loginusername},on:{input:function(a){a.target.composing||(t.loginusername=a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"formGroupExampleInput5"}},[t._v("Password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.loginpassword,expression:"loginpassword"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:""},domProps:{value:t.loginpassword},on:{input:function(a){a.target.composing||(t.loginpassword=a.target.value)}}})]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return t.Login()}}},[t._v("Login")])])])])])])])])],1)},P=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item active"},[e("a",{staticClass:"nav-link",attrs:{href:""}})])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card-header"},[t._v("New User "),e("i",[t._v("(i swear we wont spam your email)")])])}],D={name:"User",data:function(){return{livehttpurl:"https://api.sharecopy.greenbyte.systems/",localhttpurl:"http://localhost:8000/",name:"",accessnumber:0,email:"",password:"",loginusername:"sergei",loginpassword:"123456"}},methods:{SaveUser:function(){var t=this,a={headers:{"Content-Type":"application/json"}},e={name:this.name,email:this.email,password:this.password};this.$http.post(this.localhttpurl+"api/user",e,a).then((function(a){t.makeToast(),window.console.log(a)}))},Login:function(){var t=this,a={headers:{"Content-Type":"application/json"}},e={name:this.loginusername,password:this.loginpassword};this.$http.post(this.localhttpurl+"api/login",e,a).then((function(a){var e=a.data.message;t.$UserId=e.id,t.$router.push({path:"/myaccount/",query:{user:e}})}))},makeToast:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.toastCount++,this.$bvToast.toast("Successfully Added User",{title:"Sharecopy",autoHideDelay:5e3,appendToast:t})}}},O=D,N=Object(u["a"])(O,E,P,!1,null,"612d755e",null),A=N.exports,B=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light shadow fixed-top"},[e("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v(" "+t._s(t.name)+" clipboard")]),e("br"),t._m(0)],1),e("div",{staticClass:"container-fluid"},[e("br"),e("br"),e("br"),e("b-alert",{attrs:{variant:"success",dismissible:""},model:{value:t.showDismissibleAlert,callback:function(a){t.showDismissibleAlert=a},expression:"showDismissibleAlert"}},[t._v(" "+t._s(t.message)+" ")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm"},[e("h6",{staticClass:"text-muted"},[t._v("New Clipboard")]),e("hr"),e("div",{staticClass:"form-group"},[t._m(1),e("b-form-input",{attrs:{id:"input-small",size:"sm",placeholder:"Enter your ttile"},model:{value:t.title,callback:function(a){t.title=a},expression:"title"}})],1),e("div",{staticClass:"form-group"},[e("div",{staticClass:"panel-body"},[e("label",{attrs:{for:"comment"}},[t._v("Clipboard")]),e("b-form-textarea",{staticClass:"form-control",attrs:{"no-resize":"",rows:"12",id:"notes"},model:{value:t.notes,callback:function(a){t.notes=a},expression:"notes"}})],1)]),e("div",{staticClass:"form-group"},[e("b-button",{attrs:{variant:"outline-primary"},on:{click:t.addclipboard}},[t._v("Save")])],1)]),e("div",{staticClass:"col-sm"},[e("h6",{staticClass:"text-muted"},[t._v("My Clipboard Items")]),e("b-input-group",{staticClass:"mt-3",attrs:{prepend:"Search By title"}},[e("b-form-input"),e("b-input-group-append",[e("b-button",{attrs:{variant:"info"}},[t._v("Search")])],1)],1),e("br"),e("ul",{staticClass:"list-group list-group-flush",staticStyle:{height:"400px"}},t._l(t.myclips,(function(a){return e("li",{key:a.id,staticClass:"list-group-item d-flex justify-content-between align-items-center list-group-item-action"},[t._v(" "+t._s(a.title)+" "),e("b-button-group",{staticClass:"mt-3",attrs:{size:"sm"}},[e("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.currentitem(a)}}},[t._v("View")]),e("b-button",{on:{click:function(e){return t.deleteitem(a)}}},[t._v("Delete")]),e("b-button",{attrs:{variant:"primary"}},[t._v("Share")])],1)],1)})),0)],1)])],1)])},R=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item active"},[e("a",{staticClass:"nav-link",attrs:{href:""}},[t._v(" Logout ")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("label",{attrs:{for:"title"}},[t._v("Clipboard Title ("),e("i",[t._v("optional")]),t._v("):")])}],M={name:"MyClipboard",data:function(){return{myclips:[],showDismissibleAlert:!0,localhttpurl:"http://localhost:8000/",notesid:"",id:"",notes:"",title:"",email:"",name:"",access:"4234234",message:"You can view your clipboard items here."}},methods:{reloadClips:function(t){var a=this,e={headers:{"Content-Type":"application/json"}};this.$http.get(this.localhttpurl+"api/myclipboard/",{params:{userid:t}},e).then((function(t){window.console.log(t.data),a.myclips=t.data}))},currentitem:function(t){this.title=t.title,this.notes=t.clipboard,this.notesid=t.notesid},deleteitem:function(t){var a=this,e={headers:{"Content-Type":"application/json"}},s={notesid:t.notesid};v.a.fire({title:"Delete",text:"Do you want to to delete this item",icon:"error",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",reverseButtons:!1}).then((function(t){t.value?a.$http.post(a.localhttpurl+"api/myclipboard",s,e).then((function(t){window.console.log(t)})):t.dismiss===v.a.DismissReason.cancel&&v.a.fire("Cancelled","Your clipboard item  is safe :)","error")}))},addclipboard:function(){var t=this,a={headers:{"Content-Type":"application/json"}};if(this.notes.length>0){var e={id:this.notesid,userid:this.id,title:this.title,notes:this.notes,access:this.access};this.$http.post(this.localhttpurl+"api/newclipboard",e,a).then((function(a){t.message="Successfully Added New Clipboard",t.showDismissibleAlert=!0,t.reloadClips(t.id),window.console.log(a)}))}else alert("Cannot save empty results")},initfunc:function(){var t=this,a=this.$route.query.user;this.id=a.id,this.email=a.email,this.name=a.name,this.message="Dear "+a.name+" welcome aboard captain, you can manage your items here.";var e={headers:{"Content-Type":"application/json"}};this.$http.get(this.localhttpurl+"api/myclipboard/",{params:{userid:this.id}},e).then((function(a){window.console.log(a.data),t.myclips=a.data}))}},mounted:function(){this.initfunc()}},U=M,I=(e("6eae"),Object(u["a"])(U,B,R,!1,null,"5bc6b95c",null)),Y=I.exports;s["default"].use(i["a"]),s["default"].prototype.$http=b.a,s["default"].prototype.$UserId=null,s["default"].use(n["a"]),s["default"].config.productionTip=!1;var H=[{path:"/",component:j},{path:"/clipboard/:access",component:w,name:"clipboard"},{path:"/user/",component:A,props:!0},{path:"/myaccount/",component:Y,props:!0}],L=new i["a"]({routes:H});new s["default"]({router:L,render:function(t){return t(d)}}).$mount("#app")},"68a5":function(t,a,e){"use strict";var s=e("d50c"),i=e.n(s);i.a},"6eae":function(t,a,e){"use strict";var s=e("e787"),i=e.n(s);i.a},d50c:function(t,a,e){},e787:function(t,a,e){}});
//# sourceMappingURL=app.5ef82c4b.js.map