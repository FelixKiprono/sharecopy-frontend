(function(t){function e(e){for(var s,r,n=e[0],l=e[1],c=e[2],p=0,d=[];p<n.length;p++)r=n[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,n=1;n<a.length;n++){var l=a[n];0!==i[l]&&(s=!1)}s&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={app:0},o=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"24ee":function(t,e,a){"use strict";var s=a("af46"),i=a.n(s);i.a},"40da":function(t,e,a){},"44dc":function(t,e,a){"use strict";var s=a("40da"),i=a.n(s);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=a("8c4f"),o=a("5f5b"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},n=[],l={name:"app",components:{}},c=l,u=a("2877"),p=Object(u["a"])(c,r,n,!1,null,null,null),d=p.exports,m=a("3d20"),v=a.n(m),h=(a("ab8b"),a("2dd8"),a("bc3a")),b=a.n(h),f=a("2f62");s["default"].use(f["a"]);var g=new f["a"].Store({state:{url:"https://api.sharecopy.greenbyte.systems/",phrasecode:"",userid:""},mutations:{},actions:{}}),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light shadow fixed-top"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Back")]),t._m(0),t._m(1)],1),a("br"),a("br"),a("br"),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-heading"},[a("b-row",[a("b-col",{staticClass:"pb-2",attrs:{lg:"8"}},[a("div",{staticClass:"alert alert-primary",attrs:{role:"alert"}},[t._v(" "+t._s(t.message)+" ")])]),a("b-col",{staticClass:"pb-2",attrs:{lg:"4"}},[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-generateaccess",modifiers:{"modal-generateaccess":!0}}],attrs:{size:"lg",variant:"outline-secondary"}},[t._v("set access phrase/code")])],1)],1),a("b-modal",{ref:"modal-generateaccess",attrs:{id:"modal-generateaccess","hide-footer":"",centered:"",title:"Session settings"}},[a("h3",{staticClass:"font-weight-light"},[t._v(t._s(t.errormsg)+" ")]),a("p",{staticClass:"my-4"},[a("b-form-input",{attrs:{id:"input-phrase",placeholder:"Your code/phrase"},on:{keyup:t.myevent},model:{value:t.newphrase,callback:function(e){t.newphrase=e},expression:"newphrase"}})],1),a("p",{staticClass:"my-4"},[a("b-form-input",{attrs:{id:"range-1",type:"range",min:"0",max:"120"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" Your clipboard will be access time will be : "+t._s(t.value)+" Minutes ")],1),a("b-button",{directives:[{name:"show",rawName:"v-show",value:t.IsShow,expression:"IsShow"}],attrs:{block:"",variant:"primary"},on:{click:function(e){return t.generatenewaccess()}}},[t._v("Save")])],1),a("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"Basic example"}},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return t.clearclipboard(!0)}}},[t._v("New")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.saveclipboard()}}},[t._v("Save")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button",disabled:""},on:{click:function(e){return t.deleteitem()}}},[t._v("Destroy Session")])])],1),a("br"),a("div",{staticClass:"form-group"},[t._m(2),a("b-form-input",{attrs:{id:"input-small",size:"sm",placeholder:"Enter your ttile"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),a("div",{staticClass:"form-group"},[a("div",{staticClass:"panel-body"},[a("label",{attrs:{for:"comment"}},[t._v("Clipboard")]),a("b-form-textarea",{staticClass:"form-control",attrs:{rows:"13",id:"notes","no-resize":""},model:{value:t.notes,callback:function(e){t.notes=e},expression:"notes"}})],1)])])])])},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[a("ul",{staticClass:"navbar-nav ml-auto"},[a("li",{staticClass:"nav-item active"},[a("a",{staticClass:"nav-link",attrs:{href:""}},[t._v(" Clipboard "),a("span",{staticClass:"badge badge-success"},[t._v("(Connected Beta 1.0)")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"title"}},[t._v("Clipboard Title ("),a("i",[t._v("optional")]),t._v("):")])}],C=(a("b0c0"),{name:"sharecopy",data:function(){return{showDismissibleAlert:!0,livehttpurl:this.$store.state.url,sessioncode:"",message:"Dear user you clipboard can be accessed using this code/phrase :",userid:"1",title:"",notes:"",text:"",status:"",newphrase:"",value:0,errormsg:"",msgbox:"",IsShow:!1}},methods:{myevent:function(){if(null==this.newphrase||0===this.newphrase.length)return this.errormsg="😪 You cannot use empty phrase ! ",void(this.IsShow=!1);this.errormsg="Your new code is "+this.newphrase+" 😊",this.IsShow=!0},initfunc:function(){var t=this,e=this.$route.query.access;if(this.sessioncode=e.sessioncode,"#"===this.sessioncode)this.clearclipboard(!1);else{var a={headers:{"Content-Type":"application/json"}};this.$http.get(this.livehttpurl+"api/mynotes",{params:{access:this.sessioncode}},a).then((function(e){0===e.data.clipboard.length?(t.sessioncode=null,t.message="Sorry we could not find anything with this code \n click New to create new clipboard."):(t.message="we found your clipboard using access : "+t.sessioncode,t.notes=e.data.clipboard,t.title=e.data.title,t.name=e.data.name)}))}},deleteitem:function(){var t=this;if(0!=this.notes.length){if(null!=this.sessioncode){var e={headers:{"Content-Type":"application/json"}},a={access:this.sessioncode};v.a.fire({title:"Delete",text:"Do you want to to delete this item",icon:"error",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",reverseButtons:!1}).then((function(s){s.value?t.$http.post(t.livehttpurl+"api/deleteitembycode",a,e).then((function(e){t.title=null,t.notes=null,t.sessioncode=null,t.sessioncode=t.generatePassword(),t.message="You now paste your clipboard and share it via access : "+t.sessioncode,window.console.log(e)})):s.dismiss===v.a.DismissReason.cancel&&v.a.fire("Cancelled","Your clipboard item  is safe :)","error")}))}}else v.a.fire("Sharecopy","Your cannot destroy empty clipboard:)","warning")},generatenewaccess:function(){this.sessioncode=this.newphrase,this.$refs["modal-generateaccess"].hide(),this.message="You now paste your clipboard and share it via access : "+this.sessioncode},generatePassword:function(){for(var t=8,e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",a="",s=0,i=e.length;s<t;++s)a+=e.charAt(Math.floor(Math.random()*i));return a},clearclipboard:function(t){this.title=null,this.notes=null,this.sessioncode=this.generatePassword(),this.message="You now paste your clipboard and share it via access : "+this.sessioncode,t&&(this.toastCount++,this.$bvToast.toast("Cleared clipboard, you can now paste.",{title:"Sharecopy",autoHideDelay:5e3,appendToast:!1,variant:"primary"}))},makeToast:function(t){this.toastCount++,this.$bvToast.toast("Successfully saved  Notes",{title:"Sharecopy",autoHideDelay:5e3,appendToast:!1,variant:t})},saveclipboard:function(){var t=this;if(this.notes.length>4){var e={headers:{"Content-Type":"application/json"}},a={userid:this.userid,title:this.title,notes:this.notes,access:this.sessioncode};this.$http.post(this.livehttpurl+"api/newclipboard",a,e).then((function(e){t.makeToast("success"),window.console.log(e)}))}}},mounted:function(){this.initfunc()}}),_=C,x=Object(u["a"])(_,w,y,!1,null,"381fa8e7",null),k=x.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light shadow fixed-top"},[a("div",{staticClass:"container"},[t._m(0),a("span",{staticClass:"label label-default"},[a("font",{attrs:{color:"red"}},[t._v("Beta version")])],1),t._m(1),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[a("ul",{staticClass:"navbar-nav ml-auto"},[a("li",{staticClass:"nav-item"},[a("b-link",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-2",modifiers:{"modal-2":!0}}],staticClass:"nav-link"},[t._v("Account")]),a("b-modal",{attrs:{id:"modal-2",title:"My account"}},[a("p",[t._v("Dear visitor/future user 😊"),a("br"),t._v("This feature is currently under development 👩🏾‍💻")])])],1),a("li",{staticClass:"nav-item"},[a("b-link",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],staticClass:"nav-link"},[t._v("Contact us")]),a("b-modal",{attrs:{id:"modal-1",title:"Contact"}},[a("p"),a("b-list-group-item",{attrs:{active:""}},[t._v("Share your feedback")]),a("b-list-group",[a("b-list-group-item",{attrs:{href:"mailto:info.sharecopy@gmail.com?Subject=Sharecopy"}},[t._v(" info.sharecopy@gmail.com")]),a("b-list-group-item",{attrs:{href:"https://twitter.com/sharecopy"}},[t._v("Twitter @sharecopy")])],1)],1)],1)])])])]),a("header",{staticClass:"masthead"},[a("div",{staticClass:"container h-100"},[a("div",{staticClass:"row h-100 align-items-center"},[a("div",{staticClass:"col-12 text-center"},[a("h1",{staticClass:"font-weight-light"},[a("font",{attrs:{color:"green"}},[t._v("Copy")]),t._v(" "),a("font",{attrs:{color:"brown"}},[t._v("Paste")]),t._v(" "),a("font",{attrs:{color:"blue"}},[t._v("Share")])],1),t._m(2),a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{id:"start-here",block:"",variant:"btn btn-primary \n            btn-lg btn-block"},on:{click:function(e){return t.openSharecopy(!1)}}},[t._v("Start (without login)")]),a("br"),a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.access,expression:"access"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Your Access Phrase"},domProps:{value:t.access},on:{input:function(e){e.target.composing||(t.access=e.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{id:"view-shared",block:"",variant:"btn btn-success"},on:{click:function(e){return t.openSharecopy(!0)}}},[t._v(" View Shared Clipboard")])],1)]),a("b-alert",{attrs:{show:"",variant:"danger"},model:{value:t.showDismissibleAlert,callback:function(e){t.showDismissibleAlert=e},expression:"showDismissibleAlert"}},[t._v("Provide access phrase/code before proceeding!")]),a("b-toast",{attrs:{id:"example-toast",title:"Sharecopy",static:"","no-auto-hide":""}},[t._v("Provide Access Phrase Before Proceeding.")]),a("b-tooltip",{attrs:{target:"start-here",triggers:"hover"}},[t._v(" Create new clipboard,text or code by clicking this button ")])],1)])])])])},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[a("h1",{staticClass:"font-weight-light"},[t._v(" Sharecopy ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"lead"},[t._v("Access your clipboard anywhere, anytime with any device "),a("br"),a("b",[t._v("N:B")]),t._v(" if you start without account you will only have one sessions at a time")])}],T={name:"Home",data:function(){return{showDismissibleAlert:!1,livehttpurl:this.$store.state.url,access:"",inputRules:[function(t){return t.length<1||"You have to provide access code"}]}},methods:{validate:function(){""===this.access&&this.message("b-toaster-bottom-full danger","Your access phrase cannot be empty",!0)},openSharecopy:function(t){if(t||(this.access="#"),0==this.access.length)this.showDismissibleAlert=!0;else{this.showDismissibleAlert=!1;var e={sessioncode:this.access};this.$store.state.phrase=this.access,this.$router.push({path:"/clipboard/",query:{access:e}})}},message:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.counter++,this.$bvToast.toast(e,{title:"Sharecopy",toaster:t,solid:!0,appendToast:a})}}},j=T,D=(a("44dc"),Object(u["a"])(j,S,$,!1,null,"b8757c36",null)),P=D.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("MyClipboard",{attrs:{email:t.email}}),a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light shadow fixed-top"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Account")]),t._m(0)],1),a("br"),a("br"),a("br"),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm"},[a("div",{staticClass:"card"},[t._m(1),a("div",{staticClass:"card-body"},[a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"formGroupExampleInput1"}},[t._v("Username")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",id:"username",placeholder:"sergei,kiprono etc"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"formGroupExampleInput2"}},[t._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"someone@mail.com"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"formGroupExampleInput3"}},[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"********"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.SaveUser()}}},[t._v("Register")])])])])]),a("div",{staticClass:"col-sm"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-heading"},[a("h4",[t._v("Login")]),a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"formGroupExampleInput4"}},[t._v("Username")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.loginusername,expression:"loginusername"}],staticClass:"form-control",attrs:{type:"text",id:"username",placeholder:""},domProps:{value:t.loginusername},on:{input:function(e){e.target.composing||(t.loginusername=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"formGroupExampleInput5"}},[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.loginpassword,expression:"loginpassword"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:""},domProps:{value:t.loginpassword},on:{input:function(e){e.target.composing||(t.loginpassword=e.target.value)}}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.Login()}}},[t._v("Login")])])])])])])])])],1)},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[a("ul",{staticClass:"navbar-nav ml-auto"},[a("li",{staticClass:"nav-item active"},[a("a",{staticClass:"nav-link",attrs:{href:""}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header"},[t._v("New User "),a("i",[t._v("(i swear we wont spam your email)")])])}],N={name:"User",data:function(){return{localhttpurl:this.$store.state.url,name:"",accessnumber:0,email:"",password:"",loginusername:"sergei",loginpassword:"123456"}},methods:{SaveUser:function(){var t=this,e={headers:{"Content-Type":"application/json"}},a={name:this.name,email:this.email,password:this.password};this.$http.post(this.localhttpurl+"api/adduser",a,e).then((function(e){t.makeToast(),window.console.log(e)}))},Login:function(){var t=this,e={headers:{"Content-Type":"application/json"}},a={name:this.loginusername,password:this.loginpassword};this.$http.post(this.localhttpurl+"api/login",a,e).then((function(e){var a=e.data.message;t.$store.state.userid=a.id,t.$UserId=a.id,t.$router.push({path:"/myaccount/",query:{user:a}})}))},makeToast:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.toastCount++,this.$bvToast.toast("Successfully Added User",{title:"Sharecopy",autoHideDelay:5e3,appendToast:t})}}},O=N,B=Object(u["a"])(O,A,E,!1,null,"ab646bba",null),Y=B.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light shadow fixed-top"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v(" "+t._s(t.name)+" clipboard")]),a("br"),t._m(0)],1),a("div",{staticClass:"container-fluid"},[a("br"),a("br"),a("br"),a("b-alert",{attrs:{variant:"success",dismissible:""},model:{value:t.showDismissibleAlert,callback:function(e){t.showDismissibleAlert=e},expression:"showDismissibleAlert"}},[t._v(" "+t._s(t.message)+" ")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm"},[a("h6",{staticClass:"text-muted"},[t._v("New Clipboard")]),a("hr"),a("div",{staticClass:"form-group"},[t._m(1),a("b-form-input",{attrs:{id:"input-small",size:"sm",placeholder:"Enter your ttile"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),a("div",{staticClass:"form-group"},[a("div",{staticClass:"panel-body"},[a("label",{attrs:{for:"comment"}},[t._v("Clipboard")]),a("b-form-textarea",{staticClass:"form-control",attrs:{"no-resize":"",rows:"12",id:"notes"},model:{value:t.notes,callback:function(e){t.notes=e},expression:"notes"}})],1)]),a("div",{staticClass:"form-group"},[a("b-button",{attrs:{variant:"outline-primary"},on:{click:t.addclipboard}},[t._v("Save")])],1)]),a("div",{staticClass:"col-sm"},[a("h6",{staticClass:"text-muted"},[t._v("My Clipboard Items")]),a("b-input-group",{staticClass:"mt-3",attrs:{prepend:"Search By title"}},[a("b-form-input"),a("b-input-group-append",[a("b-button",{attrs:{variant:"info"},on:{click:function(e){return t.LoadClips(9)}}},[t._v("Search")])],1)],1),a("br"),a("ul",{staticClass:"list-group list-group-flush",staticStyle:{height:"400px"}},t._l(t.myclips,(function(e){return a("li",{key:e.id,staticClass:"list-group-item d-flex justify-content-between align-items-center list-group-item-action"},[t._v(" "+t._s(e.title)+" "),a("b-button-group",{staticClass:"mt-3",attrs:{size:"sm"}},[a("b-button",{attrs:{variant:"primary"},on:{click:function(a){return t.currentitem(e)}}},[t._v("View")]),a("b-button",{on:{click:function(a){return t.deleteitem(e)}}},[t._v("Delete")]),a("b-button",{attrs:{variant:"primary"}},[t._v("Share")])],1)],1)})),0)],1)])],1)])},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[a("ul",{staticClass:"navbar-nav ml-auto"},[a("li",{staticClass:"nav-item active"},[a("a",{staticClass:"nav-link",attrs:{href:""}},[t._v(" Logout ")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"title"}},[t._v("Clipboard Title ("),a("i",[t._v("optional")]),t._v("):")])}],R={name:"MyClipboard",data:function(){return{myclips:[],showDismissibleAlert:!0,localhttpurl:"http://localhost:8000/",notesid:"",id:"",notes:"",title:"",email:"",name:"",access:"",message:"You can view your clipboard items here."}},methods:{reloadClips:function(t){var e=this,a={headers:{"Content-Type":"application/json"}};this.$http.get(this.localhttpurl+"api/myclipboard/",{params:{userid:t}},a).then((function(t){window.console.log(t),e.myclips=t.data}))},LoadClips:function(t){var e={headers:{"Content-Type":"application/json"}};this.$http.get(this.localhttpurl+"api/myclipboard/",{params:{userid:t}},e).then((function(t){window.console.log(t.data)}))},currentitem:function(t){this.title=t.title,this.notes=t.clipboard,this.notesid=t.notesid},deleteitem:function(t){var e=this,a={headers:{"Content-Type":"application/json"}},s={notesid:t.notesid};v.a.fire({title:"Delete",text:"Do you want to to delete this item",icon:"error",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",reverseButtons:!1}).then((function(t){t.value&&e.$http.post(e.localhttpurl+"api/myclipboard",s,a).then((function(t){window.console.log(t)}))}))},addclipboard:function(){var t=this,e={headers:{"Content-Type":"application/json"}};if(this.notes.length>0){var a={id:this.notesid,userid:this.id,title:this.title,notes:this.notes,access:this.access};this.$http.post(this.localhttpurl+"api/newclipboard",a,e).then((function(e){t.message="Successfully Added New Clipboard",t.showDismissibleAlert=!0,t.reloadClips(t.id),window.console.log(e)}))}else alert("Cannot save empty results")},initfunc:function(){alert(this.$store.state.userid);var t=this.$route.query.user;this.id=t.id,this.email=t.email,this.name=t.name,this.message="Dear "+t.name+" welcome aboard captain, you can manage your items here.",this.reloadClips(t.id)}},mounted:function(){this.initfunc()}},U=R,L=(a("24ee"),Object(u["a"])(U,I,M,!1,null,"56f8b43e",null)),z=L.exports,G=a("0284"),q=a.n(G);b.a.defaults.headers.common["Access-Control-Allow-Origin"]="*",s["default"].use(i["a"]),s["default"].prototype.$http=b.a,s["default"].prototype.$UserId=null,s["default"].use(o["a"]),s["default"].config.productionTip=!1;var H=[{path:"/",component:P},{path:"/clipboard/",component:k,props:!0},{path:"/user/",component:Y,props:!0},{path:"/myaccount/",component:z,props:!0}],J=new i["a"]({routes:H});s["default"].use(q.a,{id:"UA-157958865-1",router:J}),new s["default"]({store:g,router:J,render:function(t){return t(d)}}).$mount("#app")},af46:function(t,e,a){}});
//# sourceMappingURL=app.cc7dfbdc.js.map