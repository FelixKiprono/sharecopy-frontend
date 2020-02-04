

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
      <router-link
             class="navbar-brand"
              to="/"
              >Back Home</router-link>
   <!--    <a class="navbar-brand" href="index.html">Home</a>
    -->   
    <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href>
              Clipboard
              <span class="badge badge-success">(Connected Beta 1.0)</span>
       
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <br />
    <br />
    <br />
    <div class="container-fluid">
      <div class="panel panel-default">
        <div class="panel-heading">
          <div class="alert alert-primary" role="alert">
 <h5>
Dear user this clipboard can be accessed with this Key : {{sessioncode}} </h5>  

<b-modal id="changeuser" title="Sharecopy account"> 

<form class="ui form" v-on:submit.prevent="onSubmit">

    <label for="input-live">Your username:</label>
    <b-form-input
      id="input-live"
      v-model="username"
      :state="nameState"
      aria-describedby="input-live-help input-live-feedback"
      placeholder="Enter your username"
      trim
    >
    </b-form-input>

    <!-- This will only be shown if the preceding input has an invalid state -->
    <b-form-invalid-feedback id="input-live-feedback">
      Username already exists
    </b-form-invalid-feedback> 
</form>
</b-modal>
</div>

<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary" @click="clearclipboard()">New</button>  
  <button type="button" class="btn btn-secondary" @click="saveclipboard()">Save</button>
  <button type="button" class="btn btn-danger" @click="deleteitem()">Destroy Session</button>  
 </div>

         
        </div>
        <br>
        <div class="form-group">
          <label for="title">Clipboard Title (<i>optional</i>):</label>
          <b-form-input id="input-small" size="sm" placeholder="Enter your ttile" v-model="title"></b-form-input>
        </div>
        <div class="form-group">
          <div class="panel-body">
            <label for="comment">Clipboard</label>
            <b-form-textarea class="form-control" rows="13" id="notes" v-model="notes" no-resize></b-form-textarea>
         
      </div>      
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import Swal from 'sweetalert2'

export default {
  name: "sharecopy",
   computed: {
      nameState(){
        if(this.username.length>4)
        {
          return true;
          //add the user here
          //this.addUser();
        }
        else
        {
          return false;
        }
      
      }},
  data(){
    return {
      showDismissibleAlert: true,   
      livehttpurl:'https://api.sharecopy.greenbyte.systems/',
    // livehttpurl:'http://localhost:8000/',
      idnumber:0,
      sessioncode:0,
      accessnumber:0,
      word:'',
      userid:'1',
      httpurl: "",
      info: "",
      title: "",
      notes:"",
      name:"",
      text:'',
      status:'',
      username:''
    };
  },
  
  watch:{
    '$route' (to)
    {
      this.word = to.params.access;      
     //alert(to.params.access);
    },
    created()
    {
       //alert(this.$route.params.access);
         this.word = this.$route.params.access;
         this.sessioncode = this.$route.params.access;
    }

  },
  methods: 
  {
    initfunc: function()
    {
       this.sessioncode =  Math.floor(Math.random() * 100000);
    
      //get word as a parameter
      if(this.$route.params.access!=null)
      {
        this.sessioncode = this.$route.params.access
      }
      else
      {
        this.title=null;
        this.notes = null;
        this.name=null;
        this.word=null;
      }
      //fetch the notes associated with this code
      var jsonheader = { headers: { "Content-Type": "application/json" } };
      
      this.$http
        .get(this.livehttpurl+"api/mynotes", {params:{'access':this.sessioncode}},jsonheader)
        .then(response => 
        {
          //window.console.log(response.name);
          //alert(response.data.name);
          this.notes = response.data.clipboard;
          this.title = response.data.title;
          this.name = response.data.name;

        });

      //render the data to page
     
    },
    changeUsername()
    {
      
       this.$changeuser.msgBoxOk('Action completed')
          .then(value => {
           alert(value);
          })
          .catch(err => {
            // An error occurred
            window.console.log(err);
          })
    },
    addUser: function() 
    {
     var jsonheader = { headers: { "Content-Type": "application/json" } };
      var postdata =
      {
        'name':this.username,
        'email':this.username+'@sharecopy.com',
        'password':'123456'        
      }
       this.$http
        .post(this.localhttpurl+"api/adduser", postdata,jsonheader)
        .then(response => 
        {                
          window.console.log(response);
        });

    },
    CheckIfAvailable:function()
    {
      if(this.text.length>0)
      {
        this.status = name+'available';
      }
      else
      {
        this.status = '';

      }

    },
    ChangeUsername:function()
    {
    const { value: username } =  Swal.fire({
      title: 'Your beutiful username',
      input: 'text',
      inputPlaceholder: 'felix,sergei,yuan,blacknight etc'
      });
      if (username) 
      {
        //Swal.fire(`Entered username: ${username}`)
      }
    },
    deleteitem:function()
    {
      if(this.sessioncode.length>0)
      {
        
      //alert(this.sessioncode);
      //get the item access code and delete
      var jsonheader = { headers: { "Content-Type": "application/json" } };     
      var postdata =
      {
        'access':this.sessioncode
      };
              
          Swal.fire({
  title: 'Delete',
  text: 'Do you want to to delete this item',
  icon: 'error',
  showCancelButton: true,
  confirmButtonText: 'Yes',
  cancelButtonText: 'No',
  reverseButtons: false
}).then((result) => {
  if (result.value) {
    this.$http
        .post(this.livehttpurl+"api/deleteitembycode", postdata,jsonheader)
        .then(response => 
        {
          window.console.log(response);          
        });
  } 
  else if(
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    Swal.fire(
      'Cancelled',
      'Your clipboard item  is safe :)',
      'error'
    )
  }
});
      }
         

    },   
    clearclipboard:function()
    {
        this.title=null;
        this.notes = null;
      //  this.name=null;
        this.word=null;
         this.sessioncode =  Math.floor(Math.random() * 100000000);
    

      this.toastCount++;
      this.$bvToast.toast("Cleared Notes", {
        title: "Sharecopy",
        autoHideDelay: 5000,
        appendToast: false
      });
},
    
    makeToast(append = false) 
    {
      this.toastCount++;
      this.$bvToast.toast("Successfully saved  Notes", {
        title: "Sharecopy",
        autoHideDelay: 5000,
        appendToast: append
      });
    },
    saveclipboard: function()
    {
      if(this.notes.length>4)
      {
      //var accessnumber =  Math.floor(Math.random() * 100);
      var jsonheader = { headers: { "Content-Type": "application/json" } };
      var postdata =
      {
        'userid':this.userid,
        'title':this.title,
        'notes':this.notes,
        'access':this.sessioncode
      }
       this.$http
        .post(this.livehttpurl+"api/newclipboard", postdata,jsonheader)
        .then(response => 
        {
          this.makeToast();
          window.console.log(response);
        });
    }
    }
  },
  mounted()
  {
    this.initfunc();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
