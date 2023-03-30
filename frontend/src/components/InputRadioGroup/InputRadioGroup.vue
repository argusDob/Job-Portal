<template>
  <div class="input-radio-group" :class="additionalClasses">
    <div
      class="input-radio-group--item"
      v-for="(option, index) in options"
      :key="index"
    >
      <input
        :id="'radio-' + index"
        :name="option.name"
        type="radio"
        :value="option.value"
        v-model="selectedValue"
        @change="handleChange"
      />
      <label :for="'radio-' + index" class="radio-label">{{
        option.label
      }}</label>
      <SoftError></SoftError>
    </div>
  </div>
</template>

<script>
import SoftError from "../SoftError/SoftError.vue";
export default {
  components: {
    SoftError,
  },
  props: {
    options: {
      type: Array,
      required: true,
    },
    directionColumn: {
      type: Boolean,
      require: false,
      default: false,
    },
  },
  data() {
    return {
      selectedValue: this.options.length > 0 ? this.options[0].value : "",
    };
  },
  computed: {
    additionalClasses() {
      let classes = [];
      if (this.directionColumn) classes.push("input-radio-group--column");
      return classes;
    },
  },
  //TODO IMPLEMENT VALIDATION
  methods: {
    handleChange() {
      this.$emit("change", this.selectedValue);
    },
    getSelectedValue() {
      let validationReport = {
        isInvalid: this.selectedValue === "",
        value: this.selectedValue,
      };

      return validationReport;
    },
  },
};
</script>

<style lang="scss" scoped src="./InputRadioGroup.scss"></style>
