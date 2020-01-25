

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
      <a class="navbar-brand" href="index.html">Sharecopy</a>
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
              Sergei Clipboard
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
          
            <b-button variant="outline-primary" @click=" fetchUsers()">Save</b-button>
          </div>
        </div>
        <div class="form-group">
          <label for="title">Notes Title:</label>
          <input type="text" class="form-control" id="title" v-model="title" />
        </div>
        <div class="form-group">
          <div class="panel-body">
            <label for="comment">Notes/Link/Text etc</label>
            <textarea class="form-control" rows="15" id="notes" v-model="notes"></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default 
{
  name: "sharecopy",
  data()
  {
    return {
      httpurl:'',
      info:'',
      title:'Felix videos',
      notes:'BootstrapVue is to be used with Bootstrap v4.4 CSS/SCSS. Please see Browsers and devices for more information about browsers currently supported by Bootstrap v4.'
    }
  },methods:
  {
    savenotes:function()
    {
      alert(this.title);  


    },
    makeToast(append = false) 
    {
        this.toastCount++
        this.$bvToast.toast('Successfully saved  Notes', {
          title: 'Sharecopy',
          autoHideDelay: 5000,
          appendToast: append
        })
      },     
      fetchUsers: function () {
   this.$http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => 
      { 
        window.console.log(response.data.title);
        
      });
     
    }
  }
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
