(function(t){function e(e){for(var s,o,r=e[0],l=e[1],c=e[2],p=0,d=[];p<r.length;p++)o=r[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==n[l]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},i=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0cb4":function(t,e,a){},4991:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=a("8c4f"),i=a("5f5b"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],l={name:"app",components:{}},c=l,u=a("2877"),p=Object(u["a"])(c,o,r,!1,null,null,null),d=p.exports,m=a("3d20"),v=a.n(m),h=(a("ab8b"),a("2dd8"),a("bc3a")),b=a.n(h),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light shadow fixed-top"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Back Home")]),t._m(0),t._m(1)],1),a("br"),a("br"),a("br"),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-heading"},[a("div",{staticClass:"alert alert-primary",attrs:{role:"alert"}},[a("h5",[t._v(" Dear user this clipboard can be accessed with this Key : "+t._s(t.sessioncode)+" ")]),a("b-modal",{attrs:{id:"changeuser",title:"Sharecopy account"}},[a("form",{staticClass:"ui form",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("label",{attrs:{for:"input-live"}},[t._v("Your username:")]),a("b-form-input",{attrs:{id:"input-live",state:t.nameState,"aria-describedby":"input-live-help input-live-feedback",placeholder:"Enter your username",trim:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),a("b-form-invalid-feedback",{attrs:{id:"input-live-feedback"}},[t._v(" Username already exists ")])],1)])],1),a("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"Basic example"}},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return t.clearclipboard()}}},[t._v("New")]),a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return t.saveclipboard()}}},[t._v("Save")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.deleteitem()}}},[t._v("Destroy Session")])])]),a("br"),a("div",{staticClass:"form-group"},[t._m(2),a("b-form-input",{attrs:{id:"input-small",size:"sm",placeholder:"Enter your ttile"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),a("div",{staticClass:"form-group"},[a("div",{staticClass:"panel-body"},[a("label",{attrs:{for:"comment"}},[t._v("Clipboard")]),a("b-form-textarea",{staticClass:"form-control",attrs:{rows:"13",id:"notes","no-resize":""},model:{value:t.notes,callback:function(e){t.notes=e},expression:"notes"}})],1)])])])])},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[a("ul",{staticClass:"navbar-nav ml-auto"},[a("li",{staticClass:"nav-item active"},[a("a",{staticClass:"nav-link",attrs:{href:""}},[t._v(" Clipboard "),a("span",{staticClass:"badge badge-success"},[t._v("(Connected Beta 1.0)")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"title"}},[t._v("Clipboard Title ("),a("i",[t._v("optional")]),t._v("):")])}],C=(a("b0c0"),{name:"sharecopy",computed:{nameState:function(){return this.username.length>4}},data:function(){return{showDismissibleAlert:!0,livehttpurl:"https://api.sharecopy.greenbyte.systems/",idnumber:0,sessioncode:0,accessnumber:0,word:"",userid:"1",httpurl:"",info:"",title:"",notes:"",name:"",text:"",status:"",username:""}},watch:{$route:function(t){this.word=t.params.access},created:function(){this.word=this.$route.params.access,this.sessioncode=this.$route.params.access}},methods:{initfunc:function(){var t=this;this.sessioncode=Math.floor(1e5*Math.random()),null!=this.$route.params.access?this.sessioncode=this.$route.params.access:(this.title=null,this.notes=null,this.name=null,this.word=null);var e={headers:{"Content-Type":"application/json"}};this.$http.get(this.livehttpurl+"api/mynotes",{params:{access:this.sessioncode}},e).then((function(e){t.notes=e.data.clipboard,t.title=e.data.title,t.name=e.data.name}))},changeUsername:function(){this.$changeuser.msgBoxOk("Action completed").then((function(t){alert(t)})).catch((function(t){window.console.log(t)}))},addUser:function(){var t={headers:{"Content-Type":"application/json"}},e={name:this.username,email:this.username+"@sharecopy.com",password:"123456"};this.$http.post(this.localhttpurl+"api/adduser",e,t).then((function(t){window.console.log(t)}))},CheckIfAvailable:function(){this.text.length>0?this.status=name+"available":this.status=""},ChangeUsername:function(){var t=v.a.fire({title:"Your beutiful username",input:"text",inputPlaceholder:"felix,sergei,yuan,blacknight etc"});t.value},deleteitem:function(){var t=this;if(this.sessioncode.length>0){var e={headers:{"Content-Type":"application/json"}},a={access:this.sessioncode};v.a.fire({title:"Delete",text:"Do you want to to delete this item",icon:"error",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",reverseButtons:!1}).then((function(s){s.value?t.$http.post(t.livehttpurl+"api/deleteitembycode",a,e).then((function(t){window.console.log(t)})):s.dismiss===v.a.DismissReason.cancel&&v.a.fire("Cancelled","Your clipboard item  is safe :)","error")}))}},clearclipboard:function(){this.title=null,this.notes=null,this.word=null,this.sessioncode=Math.floor(1e8*Math.random()),this.toastCount++,this.$bvToast.toast("Cleared Notes",{title:"Sharecopy",autoHideDelay:5e3,appendToast:!1})},makeToast:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.toastCount++,this.$bvToast.toast("Successfully saved  Notes",{title:"Sharecopy",autoHideDelay:5e3,appendToast:t})},saveclipboard:function(){var t=this;if(this.notes.length>4){var e={headers:{"Content-Type":"application/json"}},a={userid:this.userid,title:this.title,notes:this.notes,access:this.sessioncode};this.$http.post(this.livehttpurl+"api/newclipboard",a,e).then((function(e){t.makeToast(),window.console.log(e)}))}}},mounted:function(){this.initfunc()}}),y=C,w=Object(u["a"])(y,f,g,!1,null,"23c241cb",null),_=w.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light shadow fixed-top"},[a("div",{staticClass:"container"},[t._m(0),a("span",{staticClass:"label label-default"},[t._v("Share faster ")]),t._m(1),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[a("ul",{staticClass:"navbar-nav ml-auto"},[a("li",{staticClass:"nav-item"},[a("b-link",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],staticClass:"nav-link"},[t._v("Contact us")]),a("b-modal",{attrs:{id:"modal-1",title:"Contact"}},[a("p",{staticClass:"my-4"},[t._v("Please contact us @ : 94apps.io@gmail.com")])])],1)])])])]),a("header",{staticClass:"masthead"},[a("div",{staticClass:"container h-100"},[a("div",{staticClass:"row h-100 align-items-center"},[a("div",{staticClass:"col-12 text-center"},[a("h1",{staticClass:"font-weight-light"},[a("font",{attrs:{color:"green"}},[t._v("Copy")]),t._v(" "),a("font",{attrs:{color:"brown"}},[t._v("Paste")]),t._v(" "),a("font",{attrs:{color:"blue"}},[t._v("Share")])],1),a("p",{staticClass:"lead"},[t._v("Access your clipboard anywhere, anytime with any device")]),a("router-link",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{to:"/clipboard/0",tag:"button"}},[t._v("Start ")]),a("br"),a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.access,expression:"access"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Your Access Phrase"},domProps:{value:t.access},on:{input:function(e){e.target.composing||(t.access=e.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("router-link",{staticClass:"btn btn-success btn-block",attrs:{to:{name:"clipboard",params:{access:t.access}},tag:"button"}},[t._v("View Shared Clipboard")])],1)]),a("b-toast",{attrs:{id:"example-toast",title:"Sharecopy",static:"","no-auto-hide":""}},[t._v("Provide Access Phrase Before Proceeding.")])],1)])])])])},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[a("h1",{staticClass:"font-weight-light"},[t._v(" Sharecopy ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],$={name:"Home",data:function(){return{httpurl:"https://api.sharecopy.greenbyte.systems/",access:""}},methods:{validate:function(){""===this.access&&this.message("b-toaster-bottom-full danger","Your access phrase cannot be empty",!0)},message:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.counter++,this.$bvToast.toast(e,{title:"Sharecopy",toaster:t,solid:!0,appendToast:a})}}},T=$,S=(a("b1f4"),Object(u["a"])(T,x,k,!1,null,"b878646a",null)),j=S.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("MyClipboard",{attrs:{email:t.email}}),a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light shadow fixed-top"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Account")]),t._m(0)],1),a("br"),a("br"),a("br"),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm"},[a("div",{staticClass:"card"},[t._m(1),a("div",{staticClass:"card-body"},[a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"formGroupExampleInput1"}},[t._v("Username")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",id:"username",placeholder:"sergei,kiprono etc"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"formGroupExampleInput2"}},[t._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"someone@mail.com"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"formGroupExampleInput3"}},[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"********"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.SaveUser()}}},[t._v("Register")])])])])]),a("div",{staticClass:"col-sm"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-heading"},[a("h4",[t._v("Login")]),a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"formGroupExampleInput4"}},[t._v("Username")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.loginusername,expression:"loginusername"}],staticClass:"form-control",attrs:{type:"text",id:"username",placeholder:""},domProps:{value:t.loginusername},on:{input:function(e){e.target.composing||(t.loginusername=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"formGroupExampleInput5"}},[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.loginpassword,expression:"loginpassword"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:""},domProps:{value:t.loginpassword},on:{input:function(e){e.target.composing||(t.loginpassword=e.target.value)}}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.Login()}}},[t._v("Login")])])])])])])])])],1)},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[a("ul",{staticClass:"navbar-nav ml-auto"},[a("li",{staticClass:"nav-item active"},[a("a",{staticClass:"nav-link",attrs:{href:""}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header"},[t._v("New User "),a("i",[t._v("(i swear we wont spam your email)")])])}],D={name:"User",data:function(){return{localhttpurl:"http://localhost:8000/",name:"",accessnumber:0,email:"",password:"",loginusername:"sergei",loginpassword:"123456"}},methods:{SaveUser:function(){var t=this,e={headers:{"Content-Type":"application/json"}},a={name:this.name,email:this.email,password:this.password};this.$http.post(this.localhttpurl+"api/adduser",a,e).then((function(e){t.makeToast(),window.console.log(e)}))},Login:function(){var t=this,e={headers:{"Content-Type":"application/json"}},a={name:this.loginusername,password:this.loginpassword};this.$http.post(this.localhttpurl+"api/login",a,e).then((function(e){var a=e.data.message;t.$UserId=a.id,t.$router.push({path:"/myaccount/",query:{user:a}})}))},makeToast:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.toastCount++,this.$bvToast.toast("Successfully Added User",{title:"Sharecopy",autoHideDelay:5e3,appendToast:t})}}},O=D,A=Object(u["a"])(O,E,P,!1,null,"811a92c2",null),N=A.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light shadow fixed-top"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v(" "+t._s(t.name)+" clipboard")]),a("br"),t._m(0)],1),a("div",{staticClass:"container-fluid"},[a("br"),a("br"),a("br"),a("b-alert",{attrs:{variant:"success",dismissible:""},model:{value:t.showDismissibleAlert,callback:function(e){t.showDismissibleAlert=e},expression:"showDismissibleAlert"}},[t._v(" "+t._s(t.message)+" ")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm"},[a("h6",{staticClass:"text-muted"},[t._v("New Clipboard")]),a("hr"),a("div",{staticClass:"form-group"},[t._m(1),a("b-form-input",{attrs:{id:"input-small",size:"sm",placeholder:"Enter your ttile"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),a("div",{staticClass:"form-group"},[a("div",{staticClass:"panel-body"},[a("label",{attrs:{for:"comment"}},[t._v("Clipboard")]),a("b-form-textarea",{staticClass:"form-control",attrs:{"no-resize":"",rows:"12",id:"notes"},model:{value:t.notes,callback:function(e){t.notes=e},expression:"notes"}})],1)]),a("div",{staticClass:"form-group"},[a("b-button",{attrs:{variant:"outline-primary"},on:{click:t.addclipboard}},[t._v("Save")])],1)]),a("div",{staticClass:"col-sm"},[a("h6",{staticClass:"text-muted"},[t._v("My Clipboard Items")]),a("b-input-group",{staticClass:"mt-3",attrs:{prepend:"Search By title"}},[a("b-form-input"),a("b-input-group-append",[a("b-button",{attrs:{variant:"info"},on:{click:function(e){return t.LoadClips(9)}}},[t._v("Search")])],1)],1),a("br"),a("ul",{staticClass:"list-group list-group-flush",staticStyle:{height:"400px"}},t._l(t.myclips,(function(e){return a("li",{key:e.id,staticClass:"list-group-item d-flex justify-content-between align-items-center list-group-item-action"},[t._v(" "+t._s(e.title)+" "),a("b-button-group",{staticClass:"mt-3",attrs:{size:"sm"}},[a("b-button",{attrs:{variant:"primary"},on:{click:function(a){return t.currentitem(e)}}},[t._v("View")]),a("b-button",{on:{click:function(a){return t.deleteitem(e)}}},[t._v("Delete")]),a("b-button",{attrs:{variant:"primary"}},[t._v("Share")])],1)],1)})),0)],1)])],1)])},U=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[a("ul",{staticClass:"navbar-nav ml-auto"},[a("li",{staticClass:"nav-item active"},[a("a",{staticClass:"nav-link",attrs:{href:""}},[t._v(" Logout ")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"title"}},[t._v("Clipboard Title ("),a("i",[t._v("optional")]),t._v("):")])}],M={name:"MyClipboard",data:function(){return{myclips:[],showDismissibleAlert:!0,localhttpurl:"http://localhost:8000/",notesid:"",id:"",notes:"",title:"",email:"",name:"",access:"",message:"You can view your clipboard items here."}},methods:{reloadClips:function(t){var e=this,a={headers:{"Content-Type":"application/json"}};this.$http.get(this.localhttpurl+"api/myclipboard/",{params:{userid:t}},a).then((function(t){window.console.log(t),e.myclips=t.data}))},LoadClips:function(t){var e={headers:{"Content-Type":"application/json"}};this.$http.get(this.localhttpurl+"api/myclipboard/",{params:{userid:t}},e).then((function(t){window.console.log(t.data)}))},currentitem:function(t){this.title=t.title,this.notes=t.clipboard,this.notesid=t.notesid},deleteitem:function(t){var e=this,a={headers:{"Content-Type":"application/json"}},s={notesid:t.notesid};v.a.fire({title:"Delete",text:"Do you want to to delete this item",icon:"error",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",reverseButtons:!1}).then((function(t){t.value&&e.$http.post(e.localhttpurl+"api/myclipboard",s,a).then((function(t){window.console.log(t)}))}))},addclipboard:function(){var t=this,e={headers:{"Content-Type":"application/json"}};if(this.notes.length>0){var a={id:this.notesid,userid:this.id,title:this.title,notes:this.notes,access:this.access};this.$http.post(this.localhttpurl+"api/newclipboard",a,e).then((function(e){t.message="Successfully Added New Clipboard",t.showDismissibleAlert=!0,t.reloadClips(t.id),window.console.log(e)}))}else alert("Cannot save empty results")},initfunc:function(){var t=this.$route.query.user;this.id=t.id,this.email=t.email,this.name=t.name,this.message="Dear "+t.name+" welcome aboard captain, you can manage your items here.",this.reloadClips(t.id)}},mounted:function(){this.initfunc()}},R=M,I=(a("fb59"),Object(u["a"])(R,B,U,!1,null,"3a88f240",null)),Y=I.exports;b.a.defaults.headers.common["Access-Control-Allow-Origin"]="*",s["default"].use(n["a"]),s["default"].prototype.$http=b.a,s["default"].prototype.$UserId=null,s["default"].use(i["a"]),s["default"].config.productionTip=!1;var L=[{path:"/",component:j},{path:"/clipboard/:access",component:_,name:"clipboard"},{path:"/user/",component:N,props:!0},{path:"/myaccount/",component:Y,props:!0}],z=new n["a"]({routes:L});new s["default"]({router:z,render:function(t){return t(d)}}).$mount("#app")},b1f4:function(t,e,a){"use strict";var s=a("0cb4"),n=a.n(s);n.a},fb59:function(t,e,a){"use strict";var s=a("4991"),n=a.n(s);n.a}});
//# sourceMappingURL=app.b9b9d478.js.map