<template>
  <div id="app" style="height: 100%">
    <router-view/>
  </div>
</template>

<script>

  export default {
    name: 'App',
    mounted() {
      window.addEventListener('unload',this.saveState)
    },
    methods:{
      saveState(){
        sessionStorage.setItem('userState',JSON.stringify(this.$store.state.user));
      }
    }
  }
</script>

<style lang="scss">
  body,html {
    margin: 0;
    width:100%;
    height:100%;
    overflow:hidden;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

</style>