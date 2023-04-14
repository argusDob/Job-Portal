<template>
  <div class="login-view">
    <div class="login-view__form">
      <RegistrationForm />
    </div>
    <div class="login-view__registration">
      <LoginForm />
    </div>
  </div>
</template>

<script>
import LoginForm from "../../components/LoginForm/LoginForm.vue";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm.vue";

export default {
  name: "LoginView",
  components: {
    RegistrationForm,
    LoginForm,
  },
};
</script>
<style lang="scss" src="./LoginView.scss" scoped></style>
