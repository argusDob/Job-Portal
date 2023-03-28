<template>
  <div class="input-text">
    <label :for="id" class="input-text__label">{{ label }}</label>
    <input
      :id="id"
      :type="type"
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
    SoftError,
  },
  setup() {
    return { rules: useVuelidate() };
  },
  data() {
    return {
      valueData: "",
      validationReport: {},
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
  },
};
</script>

<style lang="scss" scoped src="./InputText.scss"></style>
