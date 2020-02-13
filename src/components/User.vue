
<template>

  <div>
    <MyClipboard :email="email"></MyClipboard>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
      <router-link class="navbar-brand" to="/">Home</router-link>
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
               <div class="panel panel-default">
              <div class="panel-heading">
                <h4>New User</h4>
                <hr>
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
                  <label for="formGroupExampleInput3">Re-Enter password</label>
                  <input
                    type="password"
                     v-model="password2"
                    class="form-control"
                    id="reenterpassword"                    
                    placeholder="********"
                  />
                </div>
                <button type="button" @click="SaveUser()" class="btn btn-primary" v-show="registerbuttonstate">Register</button>
              </form>
              <br>
               <div class="alert alert-danger" variant="danger" role="alert" v-show="registermsgstate">{{registermessage}}</div>
              <div class="alert alert-success" variant="success" role="alert" v-show="registermsgstate2">{{registermessage2}}</div>
              </div>
</div>
    
        </div>

        <div class="col-sm">
          <div class="container-fluid">
           <!--where the error stayed-->
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4>Login</h4>
                <hr>

                <form>
                  <div class="form-group">
                    <label for="formGroupExampleInput4" >Username</label>
                    <input
                      type="text"
                      class="form-control"
                      id="loginusername"
                      v-model="loginusername"
                      placeholder=""
                    />
                  </div>

                  <div class="form-group">
                    <label for="formGroupExampleInput5" >Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="loginpassword"
                      v-model="loginpassword"
                      placeholder=""
                    />
                  </div>
                  <button type="button" @click="Login()" class="btn btn-primary">Login</button>
                </form>
                <br>
                  <div class="alert alert-danger" role="alert" v-show="loginmsgstate">  
{{loginmessage}}
</div>
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
  name: 'user',
  data() {
    return {
      localhttpurl: this.$store.state.url,
      name: null,
      accessnumber: 0,
      email: null,
      password: '',
      password2:'',
      loginusername:'',
      loginpassword:'',
      loginmessage:'',
      registermessage:'',registermessage2:'',
      loginmsgstate:false,
      registermsgstate:false,registermsgstate2:false,
      registerbuttonstate:false,
      //reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
 
    };
  },
  methods: {
    SaveUser: function() 
    {
      if(this.name===null)
      {
        this.registermessage="Cannot register with empty user information ";
        this.registermsgstate=true;  
         this.registermsgstate2=false;    

      }
      else
      {
     var jsonheader = { headers: { "Content-Type": "application/json" } };
      var postdata =
      {
        'name':this.name,
        'email':this.email,
        'password':this.password        
      }
       this.$http
        .post(this.localhttpurl+"api/adduser", postdata,jsonheader)
        .then(() => 
        {
          this.registermessage2="Successfully registered user ";
          this.registermsgstate2=true;  
          this.registermsgstate=false;   

        });
      }


    },
    Login:function()
    {
      //check if  username and password is empty
      if(this.loginusername==='' || this.loginpassword==='')
      {
        this.loginmessage='Cannot login with empty password or username';
        this.loginmsgstate=true;
      }
      else
      {
        this.loginmsgstate=false;
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
           //save the user id in the store global variable         
            var userData = 
          {
            id:response.data.message.id,
            name:response.data.message.name,
            email:response.data.message.email
          }

          localStorage.setItem('id',response.data.message.id);
          localStorage.setItem('name',response.data.message.name);
          localStorage.setItem('email',response.data.message.email);
          if(response.data.status)
          {    
       
          this.$router.push({ path: '/myaccount/', query: {userData} });
          }
          else
          {
            //wrong username/password
            this.loginmessage="Wrong username or password ";
            this.loginmsgstate=true;

          }
        });
      }

    }
    //makeToast(append = false) {
      //this.toastCount++;
      
     /*this.$bvToast.toast("Successfully Added User", {
        title: "Sharecopy",
        autoHideDelay: 5000,
        appendToast: append
      });*/
   // }
  },
  watch:{
    email:function(val)
    {
      var state = /\S+@\S+\.\S+/.test(val);
     // var mailformat =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!state)
        {
        this.registermsgstate=true;
        this.registermessage='Your email address is invalid';   
        
        }
        else
        {
        this.registermsgstate=false;
        this.registermessage='';   

        }
   
    },
    password:function(val)
    {
       if(val.length<=6)
      {             
        //show error they are not the same
        this.registermsgstate=true;
        this.registermessage='Your password length is too short';
     
      }
      else
      {
          this.registermsgstate=false;
          this.registermessage='';

      }

    },   
     password2:function(val)
    {
      //window.console.log('Password 1 : '+val+' Password 2 : '+this.password2);
      if(val!=this.password)
      {
             
        //show error they are not the same
        this.registermsgstate=true;
        this.registermessage='Your password does not match';
        //hide the save button
        this.registerbuttonstate=false;

      }
      else
      {
          this.registermsgstate=false;
          this.registermessage='';
        //hide the save button
        this.registerbuttonstate=true;


      }
    }


  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
