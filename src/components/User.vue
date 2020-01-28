<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
      <router-link class="navbar-brand" to="/">Account</router-link>
      <!--    <a class="navbar-brand" href="index.html">Home</a>
    -->

      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href>
        
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <br />
    <br />
    <br />

    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div class="card">
            <div class="card-header">New User <i>(i swear we wont spam your email)</i></div>
            <div class="card-body">
              <form>
                <div class="form-group">
                  <label for="formGroupExampleInput1">Username</label>
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    v-model="name"
                    placeholder="sergei,kiprono etc"
                  />
                </div>
                <div class="form-group">
                  <label for="formGroupExampleInput2">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                     v-model="email"
                    placeholder="someone@mail.com"
                  />
                </div>

                <div class="form-group">
                  <label for="formGroupExampleInput3">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                     v-model="password"
                    placeholder="********"
                  />
                </div>
                <button type="button" @click="SaveUser()" class="btn btn-primary">Register</button>
              </form>
            </div>
          </div>
        </div>

        <div class="col-sm">
          <div class="container-fluid">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4>Login</h4>

                <form>
                  <div class="form-group">
                    <label for="formGroupExampleInput4" >Username</label>
                    <input
                      type="text"
                      class="form-control"
                      id="username"
                      v-model="loginusername"
                      placeholder=""
                    />
                  </div>

                  <div class="form-group">
                    <label for="formGroupExampleInput5" >Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      v-model="loginpassword"
                      placeholder=""
                    />
                  </div>
                  <button type="button" @click="Login()" class="btn btn-primary">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {
      livehttpurl: "https://api.sharecopy.greenbyte.systems/",
      localhttpurl: "http://localhost:8000/",
      name: '',
      accessnumber: 0,
      email: '',
      password: '',
      loginusername:'',
      loginpassword:''
    };
  },
  methods: {
    SaveUser: function() 
    {
     var jsonheader = { headers: { "Content-Type": "application/json" } };
      var postdata =
      {
        'name':this.name,
        'email':this.email,
        'password':this.password
        
      }
       this.$http
        .post(this.localhttpurl+"api/user", postdata,jsonheader)
        .then(response => 
        {
          this.makeToast();
       
          window.console.log(response);
        });


    },
    Login:function()
    {
      var jsonheader = { headers: { "Content-Type": "application/json" } };
      var postdata =
      {
        'name':this.loginusername,
        'password':this.loginpassword
        
      }
       this.$http
        .post(this.localhttpurl+"api/login", postdata,jsonheader)
        .then(response => 
        {
         // alert('Successfully Loggedin');       
          window.console.log(response);
        });

    },
    makeToast(append = false) {
      this.toastCount++;
      this.$bvToast.toast("Successfully Added User", {
        title: "Sharecopy",
        autoHideDelay: 5000,
        appendToast: append
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
