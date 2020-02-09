

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
      <router-link
             class="navbar-brand"
              to="/">Back</router-link>
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

          <b-row>
  <b-col lg="8" class="pb-2">
<div class="alert alert-primary" role="alert">
  
{{message}}
</div>
  </b-col>
  <b-col lg="4" class="pb-2">
     <b-button size="lg" variant="outline-secondary" v-b-modal.modal-generateaccess>Access Settings</b-button>
  </b-col>
</b-row>
<b-modal id="modal-generateaccess"  ref="modal-generateaccess" hide-footer centered title="Session settings">
    <h3 class="font-weight-light">{{errormsg}} </h3> 
     
    <p class="my-4">
        <b-form-input id="input-phrase"  v-model="newphrase" v-on:keyup="myevent"  placeholder="Your code/phrase"></b-form-input>
    <!-- <b-form-input id="input-phrase" v-on:keyup="myevent" v-model="newphrase"  placeholder="Your code/phrase"></b-form-input> -->
   
    </p>
    <p class="my-4">     
    <b-form-input id="range-1" v-model="value" type="range" min="0" max="120"></b-form-input>
    Your clipboard will be access time will be : {{ value }} Minutes
   </p>

     <b-button block variant="primary" @click="generatenewaccess()" v-show="IsShow">Save</b-button>
    
</b-modal>


<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" v-show="newstate" class="btn btn-secondary" @click="clearclipboard(true)">New</button>  
  <button type="button" v-show="savestate" class="btn btn-primary" @click="saveclipboard()">Save</button>
  <button type="button" v-show="deletestate" class="btn btn-danger" @click="deleteitem()">Destroy Session</button>  
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
  data(){
    return {
      showDismissibleAlert: true,
      livehttpurl:this.$store.state.url,
      sessioncode:'',  
      message:'Dear user you clipboard can be accessed using this code/phrase :',   
      userid:'1',
      title: "",
      notes:"",
      text:'',
      status:'',
      newphrase:'',
      value:0,
      errormsg:'',
      msgbox:'',
      IsShow:false,
      newstate:true,
      savestate:true,
      deletestate:false
    };
  },
  methods: 
  {
    myevent:function()
    {
      if(this.newphrase==null || this.newphrase.length===0)
      {
        this.errormsg = "😪 You cannot use empty phrase ! ";
        this.IsShow=false;
        return;
      }
      else
      {
      this.errormsg = "Your new code is "+this.newphrase+" 😊";
    this.IsShow=true;
    /* var jsonheader = { headers: { "Content-Type": "application/json" } };
      
      this.$http
        .get(this.livehttpurl+"api/getsession", {params:{'session':this.newphrase}},jsonheader)
        .then(response => 
        {
          if(response.data.success)
          {
            this.errormsg = "Already used 😪,choose another one ";
            this.IsShow=false;
          }
          else
          {
            this.errormsg = this.newphrase+" is available 😊 ";
            this.IsShow=true;       
          }

        }); */
      }
      //pass the session code to search

      //if it exists return a message
     
    },    
    initfunc: function()
    {
       var accessmodel =  this.$route.query.access; 
       this.sessioncode = accessmodel.sessioncode;
       if(this.sessioncode==='#')
       {
         this.clearclipboard(false);
       }   
       else
       { 
      //fetch the notes associated with this code
      var jsonheader = { headers: { "Content-Type": "application/json" } };
      
      this.$http
        .get(this.livehttpurl+"api/mynotes", {params:{'access':this.sessioncode}},jsonheader)
        .then(response => 
        {
         // alert(response.data.clipboard.length);
          if(!response.data.success)
          {
            this.sessioncode=null;
            this.message='Sorry we could not find anything with this code \n click New to create new clipboard.';
            this.savestate=false;
            this.deletestate=false;       
          }
          else
          {          
          this.message='we found your clipboard using access : '+this.sessioncode;   
          //window.console.log(response.name);
          this.notes = response.data.clipboard;
          this.title = response.data.title;
          this.name = response.data.name;
          this.savestate=false;
           this.deletestate=true;
          }
          

        });
       }

      //render the data to page
     
    },
    deleteitem:function()
    {
      //check first
      if(this.notes.length==0)
      { Swal.fire(
      'Sharecopy',
      'Your cannot destroy empty clipboard:)',
      'warning'
     );
    return;
      }
      if(this.sessioncode!=null)
      {
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
        this.title=null;
        this.notes = null;
        this.sessioncode=null;
        this.sessioncode =  this.generatePassword();//Math.floor(Math.random() * 100000000);
        this.message='You now paste your clipboard and share it via access : '+this.sessioncode;
       this.savestate=true;
       this.newstate=true;
       this.deletestate=false;
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
    generatenewaccess:function()
    {
      //

      this.sessioncode = this.newphrase;
      this.$refs['modal-generateaccess'].hide()
      this.message='You now paste your clipboard and share it via access : '+this.sessioncode;
 

    }, 
    generatePassword:function(){
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
    },
    clearclipboard:function(state)
    {
        this.title=null;
        this.notes = null;
        this.sessioncode =  this.generatePassword();//Math.floor(Math.random() * 100000000);
        this.message='You now paste your clipboard and share it via access : '+this.sessioncode;
      this.savestate=true;
      this.deletestate=false;
if(state)
{
      this.toastCount++;
      this.$bvToast.toast("Cleared clipboard, you can now paste.", {
        title: "Sharecopy",
        autoHideDelay: 5000,
        appendToast: false,
        variant:'primary'
      });
}

},
    
    makeToast(variant) 
    {
      this.toastCount++;
      this.$bvToast.toast("Successfully saved  Notes", {
        title: "Sharecopy",
        autoHideDelay: 5000,
        appendToast: false,
        variant:variant
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

         this.makeToast('success');
          window.console.log(response);
           this.savestate=false;
       this.newstate=true;
       this.deletestate=false;
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
