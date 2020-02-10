<template>
<div>
 <nav class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
      <div class="navbar-brand"> {{name}} clipboard</div>
     <br>
    
      <!--    <a class="navbar-brand" href="index.html">Home</a>
    -->

      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href>
            Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>

<div class="container-fluid">
  <br>
  <br>
  <br>
  <b-alert v-model="showDismissibleAlert" variant="success" dismissible>
      {{message}}
    </b-alert>

<div class="row">
  
<div class="col-sm">

     <h6 class="text-muted">New Clipboard</h6> 

 
   <hr>
<div class="form-group">
          <label for="title">Clipboard Title (<i>optional</i>):</label>
           <b-form-input id="input-small" size="sm" placeholder="Enter your ttile" v-model="title"></b-form-input>
  
         </div>
        <div class="form-group">
          <div class="panel-body">
            <label for="comment">Clipboard</label>
            <b-form-textarea class="form-control" no-resize rows="12" id="notes" v-model="notes">

            </b-form-textarea>
          </div>
        </div>
         <div class="form-group">
            <b-button variant="outline-primary" @click="clearclipboard">Clear</b-button>
             <b-button variant="outline-success" @click="addclipboard">Save</b-button>
       
        </div>
</div>

<div class="col-sm">
  
  <h6 class="text-muted">My Clipboard Items</h6> 

<b-input-group prepend="Search By title" class="mt-3">
    <b-form-input></b-form-input>
    <b-input-group-append>
      <b-button variant="info" @click="LoadClips(9)">Search</b-button>
    </b-input-group-append>
  </b-input-group>
  <br>
<!-- <ul class="list-group"> -->
<ul class="list-group list-group-flush" style="height: 400px;">
<li class="list-group-item d-flex justify-content-between align-items-center list-group-item-action"   v-for="clipboard in myclips" v-bind:key="clipboard.id" >
{{ clipboard.title }}
<b-button-group size="sm" class="mt-3">
      <b-button variant="primary" @click="currentitem(clipboard)">View</b-button>   
      <b-button @click="deleteitem(clipboard)">Delete</b-button>
      <b-button v-b-modal.modal-share variant="primary">Share</b-button>   
</b-button-group>

<b-modal  :header-bg-variant="headerBgVariant" id="modal-share"  title="Share your clipboard" centered hide-footer>
  Your can use this code {{fixedsharecode}} to access this clipboard
  <p class="my-4">
        <b-form-input id="sharecode" v-on:keyup="myevent" v-model="sharecode" placeholder="Your share code/phrase"></b-form-input>
  </p>
  <p class="my-4">     
    <b-form-input id="range-1" v-model="value"  type="range" min="0" max="120"></b-form-input>
    Your clipboard will be access time will be : {{ value }} Minutes
   </p>

     <b-button  variant="primary" @click="shareClipboard()">Share</b-button>
    
</b-modal>

</li>
</ul>
</div>

</div>
</div>
</div>
</template>
<script>
import Swal from 'sweetalert2'

export default {
  name: "myclipboard",   
  data() 
  {    
  return {
     headerBgVariant: 'light',
     myclips:[], 
     showDismissibleAlert: true,   
      localhttpurl:"http://localhost:8000/",    
      notesid:'',
      id:'',     
      notes:'',
      title:'',
      email:'',
      name:'',
      access:'',
      value:60,
      sharecode:null,
      fixedsharecode:'GVJHBJ',
      message:'You can view your clipboard items here.'
    }
    },
  methods:{
    logout:function()
    {
      //clear the cache
      this.localStorage.removeItem('id');
      this.localStorage.removeItem('name');
      this.localStorage.removeItem('email');
      //redirect to home
      this.$router.push({ path: '/'});
       

    },
    myevent:function()
    {
      this.fixedsharecode = this.sharecode;

    },
    reloadClips:function(userid)
    {
      //fetch posts with this user id
       var jsonheader = { headers: { "Content-Type": "application/json" }};
       this.$http.get(this.localhttpurl+"api/myclipboard/",{params:{'userid':userid}}, jsonheader)
        .then(response => 
        {
       
         this.myclips = response.data;
       
        });
    },
    shareClipboard:function(item)
    {
      var code = 'FTRG34234234';
      var name = item.title;
      Swal.fire({
          title: '<strong>Share <u>'+name+'</u></strong>',
          icon: 'info',
          html: 'You can use <b>'+code+'</b>for this clipboard or change to',
          input: 'text',
          inputPlaceholder: 'Enter your access code',
          showCloseButton: true,
          showCancelButton: true,
          focusConfirm: true,
          confirmButtonText:'<i class="fa fa-thumbs-up"></i> Yes, Share!',
          confirmButtonAriaLabel: 'Thumbs up',
          cancelButtonText:'<i class="fa fa-thumbs-down"> Dont share</i>',
          cancelButtonAriaLabel: 'Thumbs down'
          })
    
    },
   
     currentitem:function(item)
    {
      this.title = item.title;
      this.notes = item.clipboard;
      this.notesid = item.notesid;
    },
    deleteitem:function(item)
    {
      var jsonheader = { headers: { "Content-Type": "application/json" } };     
      var postdata =
      {
        'notesid':item.notesid
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
        .post(this.localhttpurl+"api/myclipboard", postdata,jsonheader)
        .then(() => 
        {        
        });
  }
})
         
        //reload list items 

    },
    clearclipboard:function()
    {
      this.title=null;
      this.notes=null;
      this.reloadClips(this.id);

    },
    addclipboard:function()
    {
      var jsonheader = { headers: { "Content-Type": "application/json" } };
     
      if(this.notes.length>0)
      {
      var postdata =
      {
        'id':this.notesid,
        'userid':this.id,
        'title':this.title,
        'notes':this.notes,
        'access':this.access
      }
       this.$http
        .post(this.localhttpurl+"api/newclipboard", postdata,jsonheader)
        .then(() => 
        {
          this.message ='Successfully Added New Clipboard';
          this.showDismissibleAlert=true;
          this.reloadClips(this.id);
          
        });
      }
      else
      {
        alert("Cannot save empty results");

      }
    },
    initfunc: function()
    {
      //testing the global variable
      
         //fetch data from the other component
      var id = localStorage.getItem('id');
      var name = localStorage.getItem('name');
      var email = localStorage.getItem('email');
   
      this.id = id;    
      this.email = email;
      this.name = name;
      this.message = 'Dear '+name+' welcome aboard captain, you can manage your items here.';

      //fetch posts with this user id
       this.reloadClips(this.id);          
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
 /*
.list-group{
   max-height: 150px;
    margin-bottom: 50px;
     overflow-y: scroll;
     height:150px;
    -webkit-overflow-scrolling: touch;
}*/
.list-group{
position: relative;
height: 200px;
overflow: auto;
}
.table-wrapper-scroll-y {
display: block;
}
body{
  padding: 2rem 0rem;
}
</style>
