

<template>
  <div>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
      <div class="container">
        <!-- <img src="../../public/logo.png">
         -->
        <a class="navbar-brand" href="#"> <h1 class="font-weight-light">Sharecopy </h1></a>
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
            <li class="nav-item active">
               <a class="nav-link" href="#">
                Home
                <span class="sr-only">(current)</span>
              </a> 
            </li>
           <li class="nav-item">
               <router-link class="nav-link"
              to="/user"
              >Account</router-link>
              
            </li>

            <li class="nav-item">
              <b-link  class="nav-link" v-b-modal.modal-1>Contact us</b-link>
            
             <!-- <a class="nav-link" href="#" v-b-modal.modal-1>Contact</a>
              -->
              <b-modal id="modal-1" title="Contact">
               <p class="my-4">Please contact us @ : 94apps.io@gmail.com</p>
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
            <h1 class="font-weight-light">Sharecopy</h1>
            <p class="lead">Share your clipboard </p>
           <router-link
              class="btn btn-primary btn-lg btn-block"
              to="/clipboard/0"
              tag="button">Start Sharing clipboard</router-link>
 
            <br />
            <div class="input-group mb-3">
             <input
                type="text"
                class="form-control"
                placeholder="Your Access Word"
                v-model="access"
              />
              <div class="input-group-append">
                <router-link
             class="btn btn-success btn-block"
              :to="{name:'clipboard',params:{access:access}}"
              tag="button">View Shared Clipboard</router-link> 
                
              </div>
            </div>
            <b-toast
              id="example-toast"
              title="Sharecopy"
              static
              no-auto-hide
            >Provide Access Code Before Proceeding.</b-toast>
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
      httpurl: "",
      access: ""
    };
  },
  methods: {
    validate: function() {
      if (this.access === "") {
        //  this.$bvToast.show('example-toast');
        this.message(
          "b-toaster-bottom-full danger",
          "Please Provide Access Code",
          true
        );
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
