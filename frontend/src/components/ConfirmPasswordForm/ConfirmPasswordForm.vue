<template>
  <div class="confirm-password-input">
    {{ inputTextProps }}
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
import InputText from "../InputText/InputText.vue";

export default {
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
      this.checkPasswordEquality(value);
      // this.handleConfirmPasswordMessage();
      this.$emit("change", this.formValidationReport);
    },
    handleBlur(validationReport) {
      this.fields[validationReport.inputIndex].isValid =
        !validationReport.isInvalid;
      this.checkPasswordEquality();
    },
    handleConfirmPasswordMessage() {
      let isPasswordSame = this.rules.password.sameAs.$invalid;
      if (isPasswordSame) {
        this.fields[1].errorMessage = this.fields[1].notEqualErrorMessage;
      }
    },
    checkPasswordEquality() {
      const passwordField = this.fields.find(
        (field) => field.name === "password"
      );
      const password1Field = this.fields.find(
        (field) => field.name === "password1"
      );

      if (!passwordField || !password1Field) {
        return;
      }

      const passwordValidation = this.formValidationReport.find(
        (report) => report.name === "password"
      );
      const password1Validation = this.formValidationReport.find(
        (report) => report.name === "password1"
      );

      if (!passwordValidation || !password1Validation) {
        return;
      }

      if (this.password !== this.password1) {
        password1Validation.isInvalid = true;
        password1Field.errorMessage = password1Field.notEqualErrorMessage;
        this.$set(password1Field, "isValid", false);
      } else {
        password1Validation.isInvalid = false;
        this.$set(password1Field, "isValid", true);
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
