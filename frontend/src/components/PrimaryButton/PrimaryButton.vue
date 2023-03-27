<template>
  <button class="primary-button typography">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped src="./PrimaryButton.scss"></style>
