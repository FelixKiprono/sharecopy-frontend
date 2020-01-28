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
          aria-label="Toggle navigation"
        >
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
              <b-link  class="nav-link" v-b-modal.modal-1>Contact us</b-link>
            
             <!-- <a class="nav-link" href="#" v-b-modal.modal-1>Contact</a>
              -->
              <b-modal id="modal-1" title="Contact">
               <p class="my-4">Email : 94apps.io@gmail.com</p>
               </b-modal>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "head"
  
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
