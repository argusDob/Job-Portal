<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/NavBar/NavBar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>
<style lang="scss">
@import "./assets/scss/colors.scss";

#app {
  background-color: $background-color;
  height: 100vh;
}
</style>
