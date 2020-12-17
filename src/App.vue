<template>
  <Header />
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/leagues">Leagues</router-link>
  </div>
  <div class="container">
    <router-view/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Fira Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
