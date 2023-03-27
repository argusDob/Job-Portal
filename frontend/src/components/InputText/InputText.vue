<template>
  <div class="input-text typography">
    <label :for="id" class="input-text__label">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      class="input-text__field"
      :placeholder="placeholder"
      :name="name"
      :maxlength="maxlength"
      :minlength="minlength"
      :autocomplete="autocomplete"
      :required="required"
      v-model="valueData"
      @keyup="handleValue"
    />
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";

export default {
  props: {
    autocomplete: {
      type: Boolean,
    },
    label: {
      type: String,
      //   required: true,
    },
    maxlength: {
      type: Number,
      //   required: true,
    },
    minlength: {
      type: Number,
      //   required: true,
    },
    name: {
      type: String,
    },
    placeholder: {
      type: String,
      //   required: true,
    },
    required: {
      type: Boolean,
    },
    type: {
      type: String,
      //   required: true,
    },
  },
  setup() {
    return { rules: useVuelidate() };
  },
  data() {
    return {
      valueData: "",
    };
  },
  validations() {
    return {
      valueData: { minLength: minLength(this.minlength), required }, // Matches this.firstName
    };
  },
  computed: {
    id() {
      return "input-" + Math.random().toString(36).substr(2, 9);
    },
  },
  methods: {
    handleValue() {
      const validationReport = {};
      (validationReport.value = this.valueData),
        (validationReport.isInvalid = this.rules.$invalid);
      this.$emit("change", validationReport);
    },
  },
};
</script>

<style lang="scss" scoped src="./InputText.scss"></style>
