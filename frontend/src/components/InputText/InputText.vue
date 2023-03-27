<template>
  <div class="input-text typography">
    <label :for="id" class="input-text__label">{{ label }}</label>
    <input
      :id="id"
      :type="inputType"
      class="input-text__field"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :minlength="minlength"
      :autocomplete="autocomplete"
      :required="required"
      v-model="valueData"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    maxlength: {
      type: Number,
      required: true,
    },
    minlength: {
      type: Number,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      valueData: "",
    };
  },
  computed: {
    id() {
      return "input-" + Math.random().toString(36).substr(2, 9);
    },
  },
};
</script>

<style lang="scss" scoped src="./InputText.scss"></style>
