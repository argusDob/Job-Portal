<template>
  <div class="input-text input-text-password">
    <label :for="id" class="input-text__label">{{ label }}</label>
    <EyeIcon
      v-if="isPasswordVisible"
      icon="eye"
      font-scale="2"
      @click="handleIconClick"
    />
    <EyeSlashIcon
      v-else
      icon="eye-slash"
      font-scale="2"
      @click="handleIconClick"
    />

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

    <SoftError v-if="isInputValid === false">{{ errorMessage }}</SoftError>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, email } from "@vuelidate/validators";

import SoftError from "../SoftError/SoftError.vue";

//Icons
import EyeIcon from "../../assets/icons/IconAction/IconAction.vue";
import EyeSlashIcon from "../../assets/icons/IconAction/IconAction.vue";

export default {
  props: {
    autocomplete: {
      type: Boolean,
    },
    errorMessage: {
      type: String,
    },
    index: {
      type: Number,
      required: true,
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
  components: {
    EyeIcon,
    EyeSlashIcon,
    SoftError,
  },
  setup() {
    return { rules: useVuelidate() };
  },
  data() {
    return {
      valueData: "",
      validationReport: {},
      isPasswordVisible: false,
      fieldType: this.type,
    };
  },
  validations() {
    if (this.name === "email") {
      return {
        valueData: { minLength: minLength(this.minlength), required, email },
      };
    }
    return {
      valueData: { minLength: minLength(this.minlength), required }, // Matches this.firstName
    };
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
      this.contstructalidationReport();
      this.$emit("change", this.validationReport);
    },
    handleBlur() {
      this.contstructalidationReport();

      if (
        Object.prototype.hasOwnProperty.call(this.validationReport, "isInvalid")
      ) {
        this.$emit("blur", this.validationReport);
      }
    },
    contstructalidationReport() {
      (this.validationReport.value = this.valueData),
        (this.validationReport.isInvalid = this.rules.$invalid);
      this.validationReport.inputIndex = this.index;
      this.validationReport.name = this.name;
    },
    handleIconClick() {
      this.isPasswordVisible = !this.isPasswordVisible;
      this.handlePasswordInputType();
    },
    handlePasswordInputType() {
      if (this.isPasswordVisible) {
        this.fieldType = "text";
      } else {
        this.fieldType = "password";
      }
    },
  },
  mounted() {
    this.fieldType = this.type;
  },
};
</script>

<style lang="scss" scoped src="./PasswordInput.scss"></style>
