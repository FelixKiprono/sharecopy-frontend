<template>
<div>
 <nav class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
      <router-link class="navbar-brand" to="/">My Account</router-link>
     <br>
    
      <!--    <a class="navbar-brand" href="index.html">Home</a>
    -->

      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href>
              {{email}}
            </a>
          </li>
        </ul>
      </div>
    </nav>

<div class="container-fluid">
  <br>
  <br>
  <br>
  <br>
<div class="row">
  
<div class="col-sm">
<div class="form-group">
          <label for="title">Clipboard Title (<i>optional</i>):</label>
          <input type="text" class="form-control" id="title" v-model="title" />
        </div>
        <div class="form-group">
          <div class="panel-body">
            <label for="comment">Clipboard</label>
            <textarea class="form-control" rows="13" id="notes" v-model="notes"></textarea>
          </div>
        </div>
         <div class="form-group">
             <b-button variant="outline-primary" @click="addclipboard">Save</b-button>
        </div>
</div>

<div class="col-sm">
  <!-- <ul class="list-group"> -->
 <ul class="list-group list-group-flush">
  <li class="list-group-item"><b>My Clipboard Items</b></li>
 <li class="list-group-item d-flex justify-content-between align-items-center" v-for="clipboard in myclips" v-bind:key="clipboard.id">
    {{ clipboard.title }}

    
      <b-button-group class="mx-1">
      <b-button>Share</b-button>      
    </b-button-group>
  
  </li>
</ul>
</div>

</div>
</div>
</div>
</template>
<script>
export default {
  name: "MyClipboard",  
   
  data() 
  {    
  return {
    
    myclips:[],    
      localhttpurl: "http://localhost:8000/",  
      id:'',     
      notes:'',
      title:'',
      email:'',
      access:'4234234'
    }
    },
  methods:{
    reloadClips:function(userid)
    {
//fetch posts with this user id
       var jsonheader = { headers: { "Content-Type": "application/json" } };
        this.$http
        .get(this.localhttpurl+"api/myclipboard/",{params:{'userid':userid}}, jsonheader)
        .then(response => 
        {
         window.console.log(response.data);
         this.myclips = response.data;
       
        });
    },
    addclipboard:function()
    {
//var accessnumber =  Math.floor(Math.random() * 100);
      var jsonheader = { headers: { "Content-Type": "application/json" } };
      var postdata =
      {
        'userid':this.id,
        'title':this.title,
        'notes':this.notes,
        'access':this.access
      }
       this.$http
        .post(this.localhttpurl+"api/newclipboard", postdata,jsonheader)
        .then(response => 
        {          
          this.reloadClips(response.data.userid);
          window.console.log(response);
          
        });
    },
       initfunc: function()
       {
        
         //fetch data from the other component
      var user =  this.$route.query.user;
      this.id = user.id;
      this.email = user.email;

    //fetch posts with this user id
       var jsonheader = { headers: { "Content-Type": "application/json" } };
        this.$http
        .get(this.localhttpurl+"api/myclipboard/",{params:{'userid':this.id}}, jsonheader)
        .then(response => 
        {
         window.console.log(response.data);
         this.myclips = response.data;
       
        });

        
        
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
</style>
