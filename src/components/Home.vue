

<template>
  <div>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
      <div class="container">
        <!-- <img src="../../public/logo.png">
         -->
        <a class="navbar-brand" href="#"> <h1 class="font-weight-light">
           Sharecopy </h1></a><span class="label label-default"><font color='red'>Beta version</font></span>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation">

          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
           <!--  <li class="nav-item active">
               <a class="nav-link" href="#">
                Demo
                <span class="sr-only">(current)</span>
              </a> 
            </li> -->
            <li class="nav-yarnitem">
               <router-link class="nav-link"
              to="/user"
              >Account</router-link>
              
            </li>

            <li class="nav-item">
              <b-link  class="nav-link" v-b-modal.modal-1>Contact us</b-link>
            
             <!-- <a class="nav-link" href="#" v-b-modal.modal-1>Contact</a>
              -->
              <b-modal id="modal-1" title="Contact">
                 <p></p>
             
                  <b-list-group-item active>Share your feedback</b-list-group-item>
               <b-list-group>
  <b-list-group-item href="mailto:info.sharecopy@gmail.com?Subject=Sharecopy"> 
    info.sharecopy@gmail.com</b-list-group-item>
  <b-list-group-item href="https://twitter.com/sharecopy">Twitter @sharecopy</b-list-group-item>
 </b-list-group>
</b-modal>
</li>
</ul>
        </div>
      </div>
    </nav>
    

    <header class="masthead">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-12 text-center">
            <h1 class="font-weight-light"><font color="green">Copy</font> <font color="brown">Paste</font> <font color="blue">Share</font></h1>
            <p class="lead">Access your clipboard anywhere, anytime with any device <br><b>N:B</b> if you login without account you will only have one sessions at a time</p>
  <!--          <router-link
              class="btn btn-primary btn-lg btn-block"
              to="/clipboard/0"
              tag="button" id="start-here" v-b-tooltip.hover>
              Start 
          </router-link> -->
           
            <b-button  id="start-here" v-b-tooltip.hover block variant="btn btn-primary btn-lg btn-block" @click="openSharecopy(false)">Start (without login)</b-button>
            <br />
            <div class="input-group mb-3">
             <input
                type="text"
                class="form-control"
                placeholder="Your Access Phrase"
                v-model="access"
              />
              <div class="input-group-append">
                 <b-button  id="view-shared" v-b-tooltip.hover block variant="btn btn-success" @click="openSharecopy(true)">
                   View Shared Clipboard</b-button>
                   
    
               <!--  <router-link 
             class="btn btn-success btn-block"
              :to="{path:'clipboard',query:{sessioncode:access}}"
              tag="button" >View Shared Clipboard</router-link>  -->
                
              </div>
              
            </div>
             <b-alert v-model="showDismissibleAlert" show variant="danger">Provide access phrase/code before proceeding!</b-alert>
       
            <b-toast
              id="example-toast"
              title="Sharecopy"
              static
              no-auto-hide
            >Provide Access Phrase Before Proceeding.</b-toast>


            <b-tooltip  target="start-here" triggers="hover">
    Create new clipboard,text or code by clicking this button
  </b-tooltip>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      showDismissibleAlert: false,
       livehttpurl:this.$store.state.url,
     // httpurl: "https://api.sharecopy.greenbyte.systems/",
     // httpurl: "http://localhost:8000/",   
      access: '',
      inputRules:[v=>v.length<1 || 'You have to provide access code']
    };
  },
  methods: {
    validate: function() {
      if (this.access === "") 
      {      
        //  this.$bvToast.show('example-toast');
        this.message(
          "b-toaster-bottom-full danger",
          "Your access phrase cannot be empty",
          true
        );
      }
    },
    openSharecopy:function(state)
    {
      if(!state)
      {
        this.access='#';

      }     

      if(this.access.length==0)
      {
        this.showDismissibleAlert=true;
      }
      else
      {
         this.showDismissibleAlert=false;
      var access =
      {
        sessioncode : this.access
      }
      this.$store.state.phrase = this.access;
      this.$router.push({ path: '/clipboard/', query: {access} });
      }   
    
   
   },
    message(toaster, body, append = false) {
      this.counter++;
      this.$bvToast.toast(body, {
        title: "Sharecopy",
        toaster: toaster,
        solid: true,
        appendToast: append
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.masthead {
  height: 100vh;
  min-height: 500px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
