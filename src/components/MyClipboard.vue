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

<b-input-group  prepend="Search By title" class="mt-3">
    <b-form-input id="searchtext" v-model="searchtext"></b-form-input>
    <b-input-group-append>
      <b-button variant="info" @click="FilterItems()">Search</b-button>
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
      <b-button @click="shareitem(clipboard)" v-b-modal.modal-shareitem variant="primary">Share</b-button>   
</b-button-group>



</li>
</ul>
<b-modal id="modal-shareitem" ref="modal-shareitem" title="Share your clipboard" centered hide-footer>
  {{sharemessage}} {{fixedsharecode}}
  <p class="my-4">
        <b-form-input id="sharecode" v-on:keyup="myevent" v-model="sharecode" placeholder="Your share code/phrase"></b-form-input>
  </p>
  <p class="my-4">     
    <b-form-input id="range-1" v-model="value"  type="range" min="0" max="120"></b-form-input>
    Your clipboard will be access time will be : {{ value }} Minutes
   </p>

     <b-button  variant="primary" @click="share()">Share</b-button>
    
</b-modal>
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
      message:'You can view your clipboard items here.',
      ShowShare:false,
      sharemessage:'',
      itemnotesid:'',
      mastercopy:[],
      searchtext:''
    }
    },
  methods:{
    FilterItems:function()
    {
     var stxt=  this.searchtext;
     var mastercopy = this.myclips;
      let newclips = mastercopy.filter(function(item){
        if(stxt==='' ||stxt.length===0)
        {
         return mastercopy;
        }
        else
        {
        return item.title===stxt;
        }
      });

     this.myclips = newclips;

      

    },
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
    shareitem:function(item)
    {
      //create session object
      this.itemnotesid =  item.notesid;    
      this.sharemessage = item.title+' will be accessed via ';

    }, 
    share:function()
    {
      var shareitem={
        'notesid': this.itemnotesid,
        'userid':this.id,
        'access':this.fixedsharecode
      }
        var jsonheader = { headers: { "Content-Type": "application/json" } };     
    
       this.$http
        .post(this.localhttpurl+"api/createsession", shareitem,jsonheader)
        .then(() => 
        {
          this.message ='Successfully created sharable session via '+this.fixedsharecode;
          this.showDismissibleAlert=true;          
          //hide the modal
           this.$refs['modal-shareitem'].hide()
        });


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
    
     this.$http.get(this.localhttpurl+"api/countsessions/")
           .then(response => 
        {
          window.console.log(response.data);         
         // this.sessions=response.data.sessioncount;      

         
        });
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
