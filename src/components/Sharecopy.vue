

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
              {{name}} Clipboard
              <span class="badge badge-success">(Connected)</span>
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
            
         <div class="form-group">
            <b-button variant="outline-primary"  @click=" clearclipboard()">New</b-button>
            <b-button variant="outline-primary"  @click=" saveclipboard()">Save</b-button>
          </div> 
            
         
        </div>
        <br>
        <div class="form-group">
          <label for="title">Clipboard Title:</label>
          <input type="text" class="form-control" id="title" v-model="title" />
        </div>
        <div class="form-group">
          <div class="panel-body">
            <label for="comment">Clipboard</label>
            <textarea class="form-control" rows="15" id="notes" v-model="notes"></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sharecopy",
  data() {
    return {
      word:'',
      userid:'1',
      httpurl: "",
      info: "",
      title: "",
      notes:"",
      name:""
    };
  },
  watch:{
    '$route' (to)
    {
      this.word = to.params.access;
     //alert(to.params.access);
    },
    created(){
       //alert(this.$route.params.access);
         this.word = this.$route.params.access;
    }

  },
  methods: 
  {
    initfunc: function()
    {
      //get word as a parameter
      var word = null;
      if(this.$route.params.access!=null)
      {
        word = this.$route.params.access
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
        .get("http://localhost:8000/api/myclipboard", {params:{'access':word}},jsonheader)
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
clearclipboard:function()
{
        this.title=null;
        this.notes = null;
      //  this.name=null;
        this.word=null;

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
      var jsonheader = { headers: { "Content-Type": "application/json" } };
      var postdata =
      {
        'userid':this.userid,
        'title':this.title,
        'notes':this.notes
      }
      this.$http
        .post("http://localhost:8000/api/newclipboard", postdata,jsonheader)
        .then(response => 
        {
          this.makeToast();
          window.console.log(response);
        });

    },
    fetchnotes: function() {
      var jsonheader = { headers: { "Content-Type": "application/json" } };
      this.$http
        .get("http://localhost:8000/api/allclipboard/word?", jsonheader)
        .then(response => {
          window.console.log(response);
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
</style>
