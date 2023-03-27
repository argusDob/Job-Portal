<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <RegistrationForm />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm.vue";

export default {
  name: "HomeView",
  components: {
    RegistrationForm,
  },
};
</script>
