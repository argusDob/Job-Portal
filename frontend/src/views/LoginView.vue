<template>
  <div class="home">
    <RegistrationForm />
    <LoginForm />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import LoginForm from "../components/LoginForm/LoginForm.vue";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm.vue";

export default {
  name: "LoginView",
  components: {
    RegistrationForm,
    LoginForm,
  },
};
</script>
