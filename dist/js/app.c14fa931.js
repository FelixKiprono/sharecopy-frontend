(function(t){function e(e){for(var a,o,n=e[0],l=e[1],c=e[2],d=0,p=[];d<n.length;d++)o=n[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,n=1;n<s.length;n++){var l=s[n];0!==i[l]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},i={app:0},r=[];function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var u=l;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=s("8c4f"),r=s("5f5b"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],l={name:"app",components:{}},c=l,u=s("2877"),d=Object(u["a"])(c,o,n,!1,null,null,null),p=d.exports,m=s("3d20"),h=s.n(m),v=(s("ab8b"),s("2dd8"),s("bc3a")),g=s.n(v),b=s("2f62");a["default"].use(b["a"]);var f=new b["a"].Store({state:{url:"http://localhost:8000/",phrasecode:"",userid:"",loginstate:!1},mutations:{},actions:{}}),w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light shadow fixed-top"},[s("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Back")]),t._m(0),t._m(1)],1),s("br"),s("br"),s("br"),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"panel panel-default"},[s("div",{staticClass:"panel-heading"},[s("b-row",[s("b-col",{staticClass:"pb-2",attrs:{lg:"8"}},[s("div",{staticClass:"alert alert-primary",attrs:{role:"alert"}},[t._v(" "+t._s(t.message)+" ")])]),s("b-col",{staticClass:"pb-2",attrs:{lg:"4"}},[s("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-generateaccess",modifiers:{"modal-generateaccess":!0}}],attrs:{size:"lg",variant:"outline-secondary"}},[t._v("Access Settings")])],1)],1),s("b-modal",{ref:"modal-generateaccess",attrs:{id:"modal-generateaccess","hide-footer":"",centered:"",title:"Session settings"}},[s("h3",{staticClass:"font-weight-light"},[t._v(t._s(t.errormsg)+" ")]),s("p",{staticClass:"my-4"},[s("b-form-input",{attrs:{id:"input-phrase",placeholder:"Your code/phrase"},on:{keyup:t.myevent},model:{value:t.newphrase,callback:function(e){t.newphrase=e},expression:"newphrase"}})],1),s("p",{staticClass:"my-4"},[s("b-form-input",{attrs:{id:"range-1",type:"range",min:"0",max:"120"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" Your clipboard will be access time will be : "+t._s(t.value)+" Minutes ")],1),s("b-button",{directives:[{name:"show",rawName:"v-show",value:t.IsShow,expression:"IsShow"}],attrs:{block:"",variant:"primary"},on:{click:function(e){return t.generatenewaccess()}}},[t._v("Save")])],1),s("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"Basic example"}},[s("button",{directives:[{name:"show",rawName:"v-show",value:t.newstate,expression:"newstate"}],staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return t.clearclipboard(!0)}}},[t._v("New")]),s("button",{directives:[{name:"show",rawName:"v-show",value:t.savestate,expression:"savestate"}],staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.saveclipboard()}}},[t._v("Save")]),s("button",{directives:[{name:"show",rawName:"v-show",value:t.deletestate,expression:"deletestate"}],staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.deleteitem()}}},[t._v("Destroy Session")])])],1),s("br"),s("div",{staticClass:"form-group"},[t._m(2),s("b-form-input",{attrs:{id:"input-small",size:"sm",placeholder:"Enter your ttile"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),s("div",{staticClass:"form-group"},[s("div",{staticClass:"panel-body"},[s("label",{attrs:{for:"comment"}},[t._v("Clipboard")]),s("b-form-textarea",{staticClass:"form-control",attrs:{rows:"13",id:"notes","no-resize":""},model:{value:t.notes,callback:function(e){t.notes=e},expression:"notes"}})],1)])])])])},y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[s("ul",{staticClass:"navbar-nav ml-auto"},[s("li",{staticClass:"nav-item active"},[s("a",{staticClass:"nav-link",attrs:{href:""}},[t._v(" Clipboard "),s("span",{staticClass:"badge badge-success"},[t._v("(Connected Beta 1.0)")])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"title"}},[t._v("Clipboard Title ("),s("i",[t._v("optional")]),t._v("):")])}],C=(s("b0c0"),{name:"sharecopy",data:function(){return{showDismissibleAlert:!0,livehttpurl:this.$store.state.url,sessioncode:"",message:"Dear user you clipboard can be accessed using this code/phrase :",userid:"1",title:"",notes:"",text:"",status:"",newphrase:"",value:0,errormsg:"",msgbox:"",IsShow:!1,newstate:!0,savestate:!0,deletestate:!1}},methods:{myevent:function(){if(null==this.newphrase||0===this.newphrase.length)return this.errormsg="😪 You cannot use empty phrase ! ",void(this.IsShow=!1);this.errormsg="Your new code is "+this.newphrase+" 😊",this.IsShow=!0},initfunc:function(){var t=this,e=this.$route.query.access;if(this.sessioncode=e.sessioncode,"#"===this.sessioncode)this.clearclipboard(!1);else{var s={headers:{"Content-Type":"application/json"}};this.$http.get(this.livehttpurl+"api/mynotes",{params:{access:this.sessioncode}},s).then((function(e){e.data.success?(t.message="we found your clipboard using access : "+t.sessioncode,t.notes=e.data.clipboard,t.title=e.data.title,t.name=e.data.name,t.savestate=!1,t.deletestate=!0):(t.sessioncode=null,t.message="Sorry we could not find anything with this code \n click New to create new clipboard.",t.savestate=!1,t.deletestate=!1)}))}},deleteitem:function(){var t=this;if(0!=this.notes.length){if(null!=this.sessioncode){var e={headers:{"Content-Type":"application/json"}},s={access:this.sessioncode};h.a.fire({title:"Delete",text:"Do you want to to delete this item",icon:"error",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",reverseButtons:!1}).then((function(a){a.value?t.$http.post(t.livehttpurl+"api/deleteitembycode",s,e).then((function(){t.title=null,t.notes=null,t.sessioncode=null,t.sessioncode=t.generatePassword(),t.message="You now paste your clipboard and share it via access : "+t.sessioncode,t.savestate=!0,t.newstate=!0,t.deletestate=!1})):a.dismiss===h.a.DismissReason.cancel&&h.a.fire("Cancelled","Your clipboard item  is safe :)","error")}))}}else h.a.fire("Sharecopy","Your cannot destroy empty clipboard:)","warning")},generatenewaccess:function(){this.sessioncode=this.newphrase,this.$refs["modal-generateaccess"].hide(),this.message="You now paste your clipboard and share it via access : "+this.sessioncode},generatePassword:function(){for(var t=8,e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",s="",a=0,i=e.length;a<t;++a)s+=e.charAt(Math.floor(Math.random()*i));return s},clearclipboard:function(t){this.title=null,this.notes=null,this.sessioncode=this.generatePassword(),this.message="You now paste your clipboard and share it via access : "+this.sessioncode,this.savestate=!0,this.deletestate=!1,t&&(this.toastCount++,this.$bvToast.toast("Cleared clipboard, you can now paste.",{title:"Sharecopy",autoHideDelay:5e3,appendToast:!1,variant:"primary"}))},makeToast:function(t){this.toastCount++,this.$bvToast.toast("Successfully saved  Notes",{title:"Sharecopy",autoHideDelay:5e3,appendToast:!1,variant:t})},saveclipboard:function(){var t=this;if(this.notes.length>4){var e={headers:{"Content-Type":"application/json"}},s={userid:this.userid,title:this.title,notes:this.notes,access:this.sessioncode};this.$http.post(this.livehttpurl+"api/newclipboard",s,e).then((function(){t.makeToast("success"),t.savestate=!1,t.newstate=!0,t.deletestate=!1}))}}},mounted:function(){this.initfunc()}}),_=C,x=Object(u["a"])(_,w,y,!1,null,"63998152",null),S=x.exports,k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light shadow fixed-top"},[s("div",{staticClass:"container"},[t._m(0),s("span",{staticClass:"label label-default"},[s("font",{attrs:{color:"red"}},[t._v("Beta version")])],1),t._m(1),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[s("ul",{staticClass:"navbar-nav ml-auto"},[s("li",{staticClass:"nav-item"},[s("b-link",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-maillist",modifiers:{"modal-maillist":!0}}],staticClass:"nav-link"},[t._v("Account")]),s("b-modal",{ref:"modal-maillist",attrs:{id:"modal-maillist",title:"Join our mailing list","hide-footer":""}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.mailstatus,expression:"mailstatus"}],staticClass:"alert alert-danger",attrs:{variant:"danger",role:"alert"}},[t._v(t._s(t.mailmsg))]),s("b-input-group",{staticClass:"mt-3",attrs:{prepend:"Your Email"}},[s("b-form-input",{attrs:{id:"usermail"},model:{value:t.usermail,callback:function(e){t.usermail=e},expression:"usermail"}}),s("b-input-group-append",[s("b-button",{attrs:{disabled:t.btnstate,variant:"success"},on:{click:function(e){return t.MailList()}}},[t._v("Submit")])],1)],1)],1)],1),s("li",{staticClass:"nav-item"},[s("b-link",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],staticClass:"nav-link"},[t._v("Contact us")]),s("b-modal",{attrs:{id:"modal-1",title:"Contact"}},[s("p"),s("b-list-group-item",{attrs:{active:""}},[t._v("Share your feedback")]),s("b-list-group",[s("b-list-group-item",{attrs:{href:"mailto:info.sharecopy@gmail.com?Subject=Sharecopy"}},[t._v(" info.sharecopy@gmail.com")]),s("b-list-group-item",{attrs:{href:"https://twitter.com/sharecopy"}},[t._v("Twitter @sharecopy")])],1)],1)],1)])])])]),s("header",{staticClass:"masthead"},[s("div",{staticClass:"container h-100"},[s("div",{staticClass:"row h-100 align-items-center"},[s("div",{staticClass:"col-12 text-center"},[s("h1",{staticClass:"font-weight-light"},[s("font",{attrs:{color:"green"}},[t._v("Copy")]),t._v(" "),s("font",{attrs:{color:"brown"}},[t._v("Paste")]),t._v(" "),s("font",{attrs:{color:"blue"}},[t._v("Share")])],1),s("p",{staticClass:"lead"},[t._v("Access your clipboard anywhere, anytime with any device ")]),s("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{id:"start-here",block:"",variant:"btn btn-primary \n            btn-lg btn-block"},on:{click:function(e){return t.openSharecopy(!1)}}},[t._v("Start (without login)")]),s("br"),s("div",{staticClass:"input-group mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.access,expression:"access"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Your Access phrase or code"},domProps:{value:t.access},on:{input:function(e){e.target.composing||(t.access=e.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{id:"view-shared",block:"",variant:"btn btn-success"},on:{click:function(e){return t.openSharecopy(!0)}}},[t._v(" View Shared Clipboard")])],1)]),s("b-alert",{attrs:{show:"",variant:"danger"},model:{value:t.showDismissibleAlert,callback:function(e){t.showDismissibleAlert=e},expression:"showDismissibleAlert"}},[t._v("Provide access phrase/code before proceeding!")]),s("b-toast",{attrs:{id:"example-toast",title:"Sharecopy",static:"","no-auto-hide":""}},[t._v("Provide Access Phrase Before Proceeding.")]),s("b-tooltip",{attrs:{target:"start-here",triggers:"hover"}},[t._v(" Create new clipboard,text or code by clicking this button ")])],1)])])]),t._m(2)])},$=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[s("h1",{staticClass:"font-weight-light"},[t._v(" Sharecopy ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"py-4 bg-light text-black-50",attrs:{id:"sticky-footer"}},[s("div",{staticClass:"container text-center"},[s("small",[t._v("Copyright © 2020 Sharecopy")])])])}],T={name:"Home",data:function(){return{showDismissibleAlert:!1,localhttpurl:this.$store.state.url,access:"",sessions:null,usermail:"",mailmsg:"",mailstatus:!1,btnstate:!0}},methods:{CountSession:function(){var t=this;this.$http.get(this.localhttpurl+"api/countsessions/").then((function(e){window.console.log(e.data),t.sessions=e.data.sessioncount}))},MailList:function(){var t=this;if(this.usermail.length>0){this.mailstatus=!1,this.mailmsg="";var e={email:this.usermail},s={headers:{"Content-Type":"application/json"}};this.$http.post(this.localhttpurl+"api/maillist",e,s).then((function(){alert("Successfully added you to sharecopy mail list, will keep you posted"),t.$refs["modal-maillist"].hide()}))}else this.mailstatus=!0,this.mailmsg="Please provide a valid mail address"},validate:function(){""===this.access&&this.message("b-toaster-bottom-full danger","Your access phrase cannot be empty",!0)},openSharecopy:function(t){if(t||(this.access="#"),0==this.access.length)this.showDismissibleAlert=!0;else{this.showDismissibleAlert=!1;var e={sessioncode:this.access};this.$store.state.phrase=this.access,this.$router.push({path:"/clipboard/",query:{access:e}})}},message:function(t,e){var s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.counter++,this.$bvToast.toast(e,{title:"Sharecopy",toaster:t,solid:!0,appendToast:s})}},watch:{usermail:function(t){var e=/\S+@\S+\.\S+/.test(t);e?(this.mailstatus=!1,this.mailmsg="",this.btnstate=!1):(this.mailstatus=!0,this.mailmsg="Your email address is invalid",this.btnstate=!0)}},mounted:function(){}},A=T,N=(s("c509"),Object(u["a"])(A,k,$,!1,null,"5000c544",null)),E=N.exports,P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("MyClipboard",{attrs:{email:t.email}}),s("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light shadow fixed-top"},[s("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Home")]),t._m(0)],1),s("br"),s("br"),s("br"),s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm"},[s("div",{staticClass:"panel panel-default"},[s("div",{staticClass:"panel-heading"},[s("h4",[t._v("New User")]),s("hr"),s("form",[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"formGroupExampleInput1"}},[t._v("Username")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",id:"username",placeholder:"sergei,kiprono etc"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"formGroupExampleInput2"}},[t._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"someone@mail.com"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"formGroupExampleInput3"}},[t._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"********"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),s("label",{attrs:{for:"formGroupExampleInput3"}},[t._v("Re-Enter password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password2,expression:"password2"}],staticClass:"form-control",attrs:{type:"password",id:"reenterpassword",placeholder:"********"},domProps:{value:t.password2},on:{input:function(e){e.target.composing||(t.password2=e.target.value)}}})]),s("button",{directives:[{name:"show",rawName:"v-show",value:t.registerbuttonstate,expression:"registerbuttonstate"}],staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.SaveUser()}}},[t._v("Register")])]),s("br"),s("div",{directives:[{name:"show",rawName:"v-show",value:t.registermsgstate,expression:"registermsgstate"}],staticClass:"alert alert-danger",attrs:{variant:"danger",role:"alert"}},[t._v(t._s(t.registermessage))]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.registermsgstate2,expression:"registermsgstate2"}],staticClass:"alert alert-success",attrs:{variant:"success",role:"alert"}},[t._v(t._s(t.registermessage2))])])])]),s("div",{staticClass:"col-sm"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"panel panel-default"},[s("div",{staticClass:"panel-heading"},[s("h4",[t._v("Login")]),s("hr"),s("form",[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"formGroupExampleInput4"}},[t._v("Username")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.loginusername,expression:"loginusername"}],staticClass:"form-control",attrs:{type:"text",id:"loginusername",placeholder:""},domProps:{value:t.loginusername},on:{input:function(e){e.target.composing||(t.loginusername=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"formGroupExampleInput5"}},[t._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.loginpassword,expression:"loginpassword"}],staticClass:"form-control",attrs:{type:"password",id:"loginpassword",placeholder:""},domProps:{value:t.loginpassword},on:{input:function(e){e.target.composing||(t.loginpassword=e.target.value)}}})]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.Login()}}},[t._v("Login")])]),s("br"),s("div",{directives:[{name:"show",rawName:"v-show",value:t.loginmsgstate,expression:"loginmsgstate"}],staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v(" "+t._s(t.loginmessage)+" ")])])])])])])])],1)},j=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[s("ul",{staticClass:"navbar-nav ml-auto"},[s("li",{staticClass:"nav-item active"},[s("a",{staticClass:"nav-link",attrs:{href:""}})])])])}],D={name:"user",data:function(){return{localhttpurl:this.$store.state.url,name:null,accessnumber:0,email:null,password:"",password2:"",loginusername:"",loginpassword:"",loginmessage:"",registermessage:"",registermessage2:"",loginmsgstate:!1,registermsgstate:!1,registermsgstate2:!1,registerbuttonstate:!1}},methods:{SaveUser:function(){var t=this;if(null===this.name)this.registermessage="Cannot register with empty user information ",this.registermsgstate=!0,this.registermsgstate2=!1;else{var e={headers:{"Content-Type":"application/json"}},s={name:this.name,email:this.email,password:this.password};this.$http.post(this.localhttpurl+"api/adduser",s,e).then((function(){t.registermessage2="Successfully registered user ",t.registermsgstate2=!0,t.registermsgstate=!1}))}},Login:function(){var t=this;if(""===this.loginusername||""===this.loginpassword)this.loginmessage="Cannot login with empty password or username",this.loginmsgstate=!0;else{this.loginmsgstate=!1;var e={headers:{"Content-Type":"application/json"}},s={name:this.loginusername,password:this.loginpassword};this.$http.post(this.localhttpurl+"api/login",s,e).then((function(e){var s={id:e.data.message.id,name:e.data.message.name,email:e.data.message.email};localStorage.setItem("id",e.data.message.id),localStorage.setItem("name",e.data.message.name),localStorage.setItem("email",e.data.message.email),e.data.status?t.$router.push({path:"/myaccount/",query:{userData:s}}):(t.loginmessage="Wrong username or password ",t.loginmsgstate=!0)}))}}},watch:{email:function(t){var e=/\S+@\S+\.\S+/.test(t);e?(this.registermsgstate=!1,this.registermessage=""):(this.registermsgstate=!0,this.registermessage="Your email address is invalid")},password:function(t){t.length<=6?(this.registermsgstate=!0,this.registermessage="Your password length is too short"):(this.registermsgstate=!1,this.registermessage="")},password2:function(t){t!=this.password?(this.registermsgstate=!0,this.registermessage="Your password does not match",this.registerbuttonstate=!1):(this.registermsgstate=!1,this.registermessage="",this.registerbuttonstate=!0)}}},I=D,O=Object(u["a"])(I,P,j,!1,null,"a10d9bb2",null),Y=O.exports,B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light shadow fixed-top"},[s("div",{staticClass:"navbar-brand"},[t._v(" "+t._s(t.name)+" clipboard")]),s("br"),t._m(0)]),s("div",{staticClass:"container-fluid"},[s("br"),s("br"),s("br"),s("b-alert",{attrs:{variant:"success",dismissible:""},model:{value:t.showDismissibleAlert,callback:function(e){t.showDismissibleAlert=e},expression:"showDismissibleAlert"}},[t._v(" "+t._s(t.message)+" ")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm"},[s("h6",{staticClass:"text-muted"},[t._v("New Clipboard")]),s("hr"),s("div",{staticClass:"form-group"},[t._m(1),s("b-form-input",{attrs:{id:"input-small",size:"sm",placeholder:"Enter your ttile"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),s("div",{staticClass:"form-group"},[s("div",{staticClass:"panel-body"},[s("label",{attrs:{for:"comment"}},[t._v("Clipboard")]),s("b-form-textarea",{staticClass:"form-control",attrs:{"no-resize":"",rows:"12",id:"notes"},model:{value:t.notes,callback:function(e){t.notes=e},expression:"notes"}})],1)]),s("div",{staticClass:"form-group"},[s("b-button",{attrs:{variant:"outline-primary"},on:{click:t.clearclipboard}},[t._v("Clear")]),s("b-button",{attrs:{variant:"outline-success"},on:{click:t.addclipboard}},[t._v("Save")])],1)]),s("div",{staticClass:"col-sm"},[s("h6",{staticClass:"text-muted"},[t._v("My Clipboard Items")]),s("b-input-group",{staticClass:"mt-3",attrs:{prepend:"Search By title"}},[s("b-form-input",{attrs:{id:"searchtext"},model:{value:t.searchtext,callback:function(e){t.searchtext=e},expression:"searchtext"}}),s("b-input-group-append",[s("b-button",{attrs:{variant:"info"},on:{click:function(e){return t.FilterItems()}}},[t._v("Search")])],1)],1),s("br"),s("ul",{staticClass:"list-group list-group-flush",staticStyle:{height:"400px"}},t._l(t.myclips,(function(e){return s("li",{key:e.id,staticClass:"list-group-item d-flex justify-content-between align-items-center list-group-item-action"},[t._v(" "+t._s(e.title)+" "),s("b-button-group",{staticClass:"mt-3",attrs:{size:"sm"}},[s("b-button",{attrs:{variant:"primary"},on:{click:function(s){return t.currentitem(e)}}},[t._v("View")]),s("b-button",{on:{click:function(s){return t.deleteitem(e)}}},[t._v("Delete")]),s("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-shareitem",modifiers:{"modal-shareitem":!0}}],attrs:{variant:"primary"},on:{click:function(s){return t.shareitem(e)}}},[t._v("Share")])],1)],1)})),0),s("b-modal",{ref:"modal-shareitem",attrs:{id:"modal-shareitem",title:"Share your clipboard",centered:"","hide-footer":""}},[t._v(" "+t._s(t.sharemessage)+" "+t._s(t.fixedsharecode)+" "),s("p",{staticClass:"my-4"},[s("b-form-input",{attrs:{id:"sharecode",placeholder:"Your share code/phrase"},on:{keyup:t.myevent},model:{value:t.sharecode,callback:function(e){t.sharecode=e},expression:"sharecode"}})],1),s("p",{staticClass:"my-4"},[s("b-form-input",{attrs:{id:"range-1",type:"range",min:"0",max:"120"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" Your clipboard will be access time will be : "+t._s(t.value)+" Minutes ")],1),s("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.share()}}},[t._v("Share")])],1)],1)])],1)])},M=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[s("ul",{staticClass:"navbar-nav ml-auto"},[s("li",{staticClass:"nav-item active"},[s("a",{staticClass:"nav-link",attrs:{href:""}},[t._v(" Logout ")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"title"}},[t._v("Clipboard Title ("),s("i",[t._v("optional")]),t._v("):")])}],R=(s("4de4"),{name:"myclipboard",data:function(){return{headerBgVariant:"light",myclips:[],showDismissibleAlert:!0,localhttpurl:"http://localhost:8000/",notesid:"",id:"",notes:"",title:"",email:"",name:"",access:"",value:60,sharecode:null,fixedsharecode:"GVJHBJ",message:"You can view your clipboard items here.",ShowShare:!1,sharemessage:"",itemnotesid:"",mastercopy:[],searchtext:""}},methods:{FilterItems:function(){var t=this.searchtext,e=this.myclips,s=e.filter((function(s){return""===t||0===t.length?e:s.title===t}));this.myclips=s},logout:function(){this.localStorage.removeItem("id"),this.localStorage.removeItem("name"),this.localStorage.removeItem("email"),this.$router.push({path:"/"})},myevent:function(){this.fixedsharecode=this.sharecode},reloadClips:function(t){var e=this,s={headers:{"Content-Type":"application/json"}};this.$http.get(this.localhttpurl+"api/myclipboard/",{params:{userid:t}},s).then((function(t){e.myclips=t.data}))},shareitem:function(t){this.itemnotesid=t.notesid,this.sharemessage=t.title+" will be accessed via "},share:function(){var t=this,e={notesid:this.itemnotesid,userid:this.id,access:this.fixedsharecode},s={headers:{"Content-Type":"application/json"}};this.$http.post(this.localhttpurl+"api/createsession",e,s).then((function(){t.message="Successfully created sharable session via "+t.fixedsharecode,t.showDismissibleAlert=!0,t.$refs["modal-shareitem"].hide()}))},currentitem:function(t){this.title=t.title,this.notes=t.clipboard,this.notesid=t.notesid},deleteitem:function(t){var e=this,s={headers:{"Content-Type":"application/json"}},a={notesid:t.notesid};h.a.fire({title:"Delete",text:"Do you want to to delete this item",icon:"error",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",reverseButtons:!1}).then((function(t){t.value&&e.$http.post(e.localhttpurl+"api/myclipboard",a,s).then((function(){}))}))},clearclipboard:function(){this.title=null,this.notes=null,this.reloadClips(this.id)},addclipboard:function(){var t=this,e={headers:{"Content-Type":"application/json"}};if(this.notes.length>0){var s={id:this.notesid,userid:this.id,title:this.title,notes:this.notes,access:this.access};this.$http.post(this.localhttpurl+"api/newclipboard",s,e).then((function(){t.message="Successfully Added New Clipboard",t.showDismissibleAlert=!0,t.reloadClips(t.id)}))}else alert("Cannot save empty results")},initfunc:function(){var t=localStorage.getItem("id"),e=localStorage.getItem("name"),s=localStorage.getItem("email");this.id=t,this.email=s,this.name=e,this.message="Dear "+e+" welcome aboard captain, you can manage your items here.",this.reloadClips(this.id)}},mounted:function(){this.initfunc(),this.$http.get(this.localhttpurl+"api/countsessions/").then((function(t){window.console.log(t.data)}))}}),G=R,L=(s("8c26"),Object(u["a"])(G,B,M,!1,null,"b1dc6ffc",null)),U=L.exports,z=s("0284"),H=s.n(z);g.a.defaults.headers.common["Access-Control-Allow-Origin"]=!0,g.a.defaults.headers.common["Access-Control-Allow-Origin"]="*",g.a.defaults.headers.common["Access-Control-Allow-Methods"]="GET,PUT,POST,DELETE,OPTIONS",g.a.defaults.headers.common["Access-Control-Allow-Headers"]="Content-type,Accept,X-Access-Token,X-Key",a["default"].use(i["a"]),a["default"].prototype.$http=g.a,a["default"].prototype.$UserId=null,a["default"].use(r["a"]),a["default"].config.productionTip=!1;var J=[{path:"/",component:E},{path:"/clipboard/",component:S,props:!0},{path:"/user/",component:Y,props:!0,beforeEnter:function(t,e,s){f.loginstate?s():s(!1)}},{path:"/myaccount/",component:U,props:!0}],V=new i["a"]({routes:J});a["default"].use(H.a,{id:"UA-157958865-1",router:V}),new a["default"]({store:f,router:V,render:function(t){return t(p)}}).$mount("#app")},"8c26":function(t,e,s){"use strict";var a=s("b5c9"),i=s.n(a);i.a},b5c9:function(t,e,s){},c509:function(t,e,s){"use strict";var a=s("e8c2"),i=s.n(a);i.a},e8c2:function(t,e,s){}});
//# sourceMappingURL=app.c14fa931.js.map