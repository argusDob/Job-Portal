<template>
  <div class="confirm-password-input">
    <PasswordInput
      v-for="(field, index) in confirmPasswordProps"
      :key="index"
      v-bind="field"
      :index="index"
    />
  </div>
</template>

<script>
import PasswordInput from "../../components/PasswordInput/PasswordInput.vue";

export default {
  components: {
    PasswordInput,
  },
  props: {
    confirmPasswordProps: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      formValidationReport: [],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped src="./ConfirmPasswordForm.scss"></style>
