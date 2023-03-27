<template>
  <div class="registration-form">
    <div class="registration-form__container">
      <div v-for="(field, index) in fields" :key="index">
        <InputText v-bind="field" @change="handleChange" />
      </div>
      <div class="registration-form__submit-button">
        <SubmitButton text="Submit" />
      </div>
    </div>
  </div>
</template>

<script>
import InputText from "../InputText/InputText.vue";
import SubmitButton from "../PrimaryButton/PrimaryButton.vue";

import getFormsConfig from "../../components/LoginForm/FormConfig/FormConfig";

export default {
  components: {
    InputText,
    SubmitButton,
  },
  props: {},
  data() {
    return {
      fields: getFormsConfig(),
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="scss" scoped src="./LoginForm.scss"></style>
