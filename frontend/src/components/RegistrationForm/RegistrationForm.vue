<template>
  <div class="registration-form">
    <div class="registration-form__container">
      <h3>{{ header }}</h3>
      <form @submit.prevent="submit">
        <InputText
          v-bind="emailInputProps"
          @change="handleEmailChange"
          @blur="handleBlur"
        />
        <InputRadioGroup :options="radioInputOptions" ref="inputRadioGroup" />
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
import InputRadioGroup from "../InputRadioGroup/InputRadioGroup.vue";
import SubmitButton from "../PrimaryButton/PrimaryButton.vue";

import getFormsConfig from "./RegistrationFormConfig/registration.form.config";

export default {
  components: {
    ConfirmPasswordForm,
    InputText,
    InputRadioGroup,
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
    header() {
      return getFormsConfig().header;
    },
    emailInputProps() {
      return this.inputField;
    },
    confirmPasswordProps() {
      return getFormsConfig().confirmPasswordProps;
    },
    radioInputOptions() {
      return getFormsConfig().options;
    },
  },
  methods: {
    handleEmailChange(value) {
      let existingIndex = this.findFormFieldIndex(value);
      this.updateLastInsertedValue(existingIndex, value);
    },
    handlePasswordForm(value) {
      value.forEach((element) => {
        let existingIndex = this.findFormFieldIndex(element);
        this.updateLastInsertedValue(existingIndex, element);
      });
    },
    updateLastInsertedValue(existingIndex, value) {
      if (existingIndex >= 0) {
        this.formValidationReport.splice(existingIndex, 1, value);
      } else {
        this.formValidationReport.push(value);
      }
    },
    findFormFieldIndex(value) {
      const existingIndex = this.formValidationReport.findIndex(
        (item) => item.name === value.name
      );
      return existingIndex;
    },
    addSelectedOption() {
      let selectedValidationReport =
        this.$refs.inputRadioGroup.getSelectedValue();
      this.formValidationReport.push(selectedValidationReport);
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
        this.addSelectedOption();

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
