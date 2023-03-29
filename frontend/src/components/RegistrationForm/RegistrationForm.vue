<template>
  <div class="registration-form">
    <div class="registration-form__container">
      <h3>Register and unlock more features</h3>
      <form @submit.prevent="submit">
        <InputText
          v-bind="emailInputProps"
          @change="handleEmailChange"
          @blur="handleBlur"
        />
        <ConfirmPasswordForm
          :confirmPasswordProps="confirmPasswordProps"
          @change="handlePasswordForm"
        />
        <div class="registration-form__submit-button">
          <SubmitButton text="Submit" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import ConfirmPasswordForm from "../ConfirmPasswordForm/ConfirmPasswordForm.vue";
import InputText from "../InputText/InputText.vue";
import SubmitButton from "../PrimaryButton/PrimaryButton.vue";

import getFormsConfig from "./RegistrationFormConfig/registration.form.config";

export default {
  components: {
    ConfirmPasswordForm,
    InputText,
    SubmitButton,
  },
  props: {},
  data() {
    return {
      formValidationReport: [],
      inputField: {},
    };
  },
  computed: {
    emailInputProps() {
      return this.inputField;
    },
    confirmPasswordProps() {
      return getFormsConfig().confirmPasswordProps;
    },
  },
  methods: {
    handleEmailChange(value) {
      console.log(value);
      const existingIndex = this.formValidationReport.findIndex(
        (item) => item.name === value.name
      );
      if (existingIndex >= 0) {
        this.formValidationReport.splice(existingIndex, 1, value);
      } else {
        this.formValidationReport.push(value);
      }
    },
    handlePasswordForm(value) {
      const existingIndex = this.formValidationReport.findIndex(
        (item) => item.name === value.name
      );
      if (existingIndex >= 0) {
        this.formValidationReport.splice(existingIndex, 1, value);
      } else {
        this.formValidationReport.push(value);
      }
    },
    handleBlur(validationReport) {
      this.inputField.isValid = !validationReport.isInvalid;
    },
    isFormValid() {
      let isValid = false;
      this.formValidationReport.forEach((element) => {
        isValid = !element.isInvalid;
      });
      return isValid;
    },
    setupEmailInput() {
      for (let props in getFormsConfig().emailProps) {
        this.$set(this.inputField, props, getFormsConfig().emailProps[props]);
      }
    },
    submit() {
      if (this.isFormValid()) {
        console.log(this.formValidationReport);
        console.log("sumbit");
      }
    },
  },
  created() {
    this.setupEmailInput();
  },
};
</script>

<style lang="scss" scoped src="./RegistrationForm.scss"></style>
