<template>
  <button class="primary-button typography">
    <SpinIcon v-if="isLoading" />
    <span v-else>{{ text }}</span>
  </button>
</template>

<script>
import SpinIcon from "../../assets/icons/SpinIcon.vue";

export default {
  components: {
    SpinIcon,
  },
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    primaryButtonLoadingStart() {
      this.isLoading = true;
    },
    primaryButtonLoadingFinish() {
      this.isLoading = true;
    },
  },
};
</script>

<style lang="scss" scoped src="./PrimaryButton.scss"></style>
