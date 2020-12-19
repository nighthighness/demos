<template>
  <div id="app">
    
    <div id="nav">
      <tabs></tabs>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import Tabs from './views/Tabs'
  export default{
    components:{
      Tabs
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,body,div,nav,ul,li,h5,h4{
	margin:0;
	padding:0;
}

a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

a.router-link-exact-active {
  color: #42b983;
}

</style>
