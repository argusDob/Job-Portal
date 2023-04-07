<template>
  <div class="input-text">
    <label :for="id" class="input-text__label">{{ label }}</label>
    <input
      :id="id"
      :type="fieldType"
      class="input-text__field"
      :class="{
        'input-text__field-valid': isInputValid,
        'input-text__field-invalid': isInputValid === false,
      }"
      :placeholder="placeholder"
      :name="name"
      :maxlength="maxlength"
      :minlength="minlength"
      :autocomplete="autocomplete"
      :required="required"
      :index="index"
      v-model="valueData"
      @keyup="handleValue()"
      @blur="handleBlur"
    />
    <EyeIcon
      v-if="!isPasswordVisible && type === 'password'"
      icon="eye"
      font-scale="2"
      @click="handleIconClick"
    />
    <EyeSlashIcon
      v-if="isPasswordVisible && type === 'password'"
      icon="eye-slash"
      font-scale="2"
      @click="handleIconClick"
    />
    <SoftError v-if="isInputValid === false">{{ errorMessage }}</SoftError>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, email } from "@vuelidate/validators";

import EyeIcon from "../../assets/icons/IconAction/IconAction.vue";
import EyeSlashIcon from "../../assets/icons/IconAction/IconAction.vue";
import SoftError from "../SoftError/SoftError.vue";

export default {
  components: {
    SoftError,
    EyeIcon,
    EyeSlashIcon,
  },
  props: {
    autocomplete: {
      type: Boolean,
    },
    errorMessage: {
      type: String,
    },
    index: {
      type: Number,
    },
    isValid: {
      type: Boolean,
      default: null,
    },
    label: {
      type: String,
      required: true,
    },
    maxlength: {
      type: Number,
    },
    minlength: {
      type: Number,
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
    },
    required: {
      type: Boolean,
    },
    type: {
      type: String,
      required: true,
    },
  },
  setup() {
    return { rules: useVuelidate() };
  },
  data() {
    return {
      valueData: "",
      validationReport: {},
      isPasswordVisible: true,
      fieldType: this.type,
    };
  },
  validations() {
    if (this.type === "email") {
      return this.emailValidation();
    } else if (this.type === "password") {
      return this.passwordValidation();
    } else {
      return {
        valueData: { minLength: minLength(this.minlength), required }, // Matches this.firstName
      };
    }
  },
  computed: {
    id() {
      return "input-" + Math.random().toString(36).substr(2, 9);
    },
    isInputValid() {
      return this.isValid;
    },
  },
  methods: {
    handleValue() {
      this.constructValidationReport();
      this.$emit("change", this.validationReport);
    },
    handleBlur() {
      this.constructValidationReport();

      if (
        Object.prototype.hasOwnProperty.call(this.validationReport, "isInvalid")
      ) {
        this.$emit("blur", this.validationReport);
      }
    },
    passwordValidation() {
      if (this.type === "password") {
        return {
          valueData: {
            required,
            valid: function (value) {
              const containsUppercase = /[A-Z]/.test(value);
              const containsLowercase = /[a-z]/.test(value);
              const containsNumber = /[0-9]/.test(value);
              const containsSpecial = /[#?!@$%^&*-]/.test(value);
              return (
                containsUppercase &&
                containsLowercase &&
                containsNumber &&
                containsSpecial
              );
            },
          },
        };
      }
    },
    emailValidation() {
      if (this.type === "email") {
        return {
          valueData: { minLength: minLength(this.minlength), required, email },
        };
      }
    },
    handleIconClick() {
      this.isPasswordVisible = !this.isPasswordVisible;
      this.handlePasswordInputType();
    },
    handlePasswordInputType() {
      this.fieldType = this.isPasswordVisible ? "password" : "text";
    },
    constructValidationReport() {
      (this.validationReport.value = this.valueData),
        (this.validationReport.isInvalid = this.rules.$invalid);
      this.validationReport.inputIndex = this.index;
      this.validationReport.name = this.name;
    },
  },
  mounted() {
    this.fieldType = this.type;
  },
};
</script>

<style lang="scss" scoped src="./InputText.scss"></style>
