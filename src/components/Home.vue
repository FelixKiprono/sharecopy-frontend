

<template>
  <div>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">Sharecopy</a>
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
              <a class="nav-link" href="#">Premium</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <header class="masthead">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-12 text-center">
            <h1 class="font-weight-light">Welcome to sharecopy</h1>
            <p class="lead">Copy and share your content online</p>
            <router-link
              class="btn btn-primary btn-lg btn-block"
              to="/clipboard"
              tag="button">Shareclipboard</router-link>

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

               <!--  <button
                  class="btn btn-success btn-block"
                  type="submit"
                  @click="validate()"
                >View Shared Clipboard</button> -->
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
  name: "home",
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
