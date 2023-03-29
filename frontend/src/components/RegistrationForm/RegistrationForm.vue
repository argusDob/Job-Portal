<template>
  <div class="registration-form typography">
    <div class="registration-form__container">
      <h3>Register and unlock more features</h3>
      <form @submit.prevent="submit">
        <InputText
          v-bind="emailInputProps"
          @change="handleChange"
          @blur="handleBlur"
        />

        <ConfirmPasswordForm :confirmPasswordProps="confirmPasswordProps" />
        <div class="registration-form__submit-button">
          <SubmitButton text="Submit" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import ConfirmPasswordForm from "../ConfirmPasswordForm/ConfirmPaswordForm.vue";
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
    };
  },
  computed: {
    emailInputProps() {
      return getFormsConfig().emailProps;
    },
    confirmPasswordProps() {
      return getFormsConfig().confirmPasswordProps;
    },
  },
  methods: {
    handleChange(value) {
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
    handleBlur(validationReport) {
      this.fields[validationReport.inputIndex].isValid =
        !validationReport.isInvalid;
    },
    isFormValid() {
      let isValid = false;
      this.formValidationReport.forEach((element) => {
        isValid = !element.isInvalid;
      });
      return isValid;
    },
    submit() {
      if (this.isFormValid()) {
        console.log("sumbit");
      }
    },
  },
};
</script>

<style lang="scss" scoped src="./RegistrationForm.scss"></style>
