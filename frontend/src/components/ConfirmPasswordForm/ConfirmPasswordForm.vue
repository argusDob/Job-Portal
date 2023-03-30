<template>
  <div class="confirm-password-input">
    <InputText
      v-for="(field, index) in inputTextProps"
      :key="index"
      v-bind="field"
      :index="index"
      @change="handleChange"
      @blur="handleBlur"
    />
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { sameAs } from "@vuelidate/validators";

import InputText from "../InputText/InputText.vue";

export default {
  setup() {
    return { rules: useVuelidate() };
  },
  validations() {
    return {
      password: {
        sameAs: sameAs(this.password1, { message: "Passwords do not match" }),
      },
    };
  },
  components: {
    InputText,
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
      fields: [],
      password: "",
      password1: "",
    };
  },
  computed: {
    inputTextProps() {
      return this.fields;
    },
  },
  methods: {
    handleChange(value) {
      const existingIndex = this.formValidationReport.findIndex(
        (item) => item.name === value.name
      );
      if (existingIndex >= 0) {
        this.formValidationReport.splice(existingIndex, 1, value);
      } else {
        this.formValidationReport.push(value);
      }

      this.trackPasswordValues(value);
      this.handleConfirmPasswordMessage();
      this.$emit("change", this.formValidationReport);
    },
    handleBlur(validationReport) {
      this.fields[validationReport.inputIndex].isValid =
        !validationReport.isInvalid;
    },
    handleConfirmPasswordMessage() {
      let isPasswordSame = this.rules.password.sameAs.$invalid;
      if (isPasswordSame) {
        this.fields[1].errorMessage = this.fields[1].notEqualErrorMessage;
      }
    },
    isFormValid() {
      let isValid = false;
      this.formValidationReport.forEach((element) => {
        isValid = !element.isInvalid;
      });
      return isValid;
    },
    trackPasswordValues(field) {
      if (field.name === "password") {
        this.password = field.value;
      } else {
        this.password1 = field.value;
      }
    },
    setupPasswordInputs() {
      this.confirmPasswordProps.forEach((field, index) => {
        this.$set(this.fields, index, field);
      });
    },
  },
  created() {
    this.setupPasswordInputs();
  },
};
</script>

<style lang="scss" scoped src="./ConfirmPasswordForm.scss"></style>
