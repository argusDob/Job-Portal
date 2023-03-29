<template>
  <span class="icon-action">
    <b-icon
      :icon="icon"
      :animation="animation"
      :font-scale="fontScale"
      @click="handleIconClick"
      tabindex="0"
      role="button"
    ></b-icon>
  </span>
</template>

<script>
export default {
  props: {
    animation: {
      type: String,
      required: false,
    },
    fontScale: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      require: true,
    },
  },
  methods: {
    handleIconClick() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped src="./IconAction.scss"></style>
