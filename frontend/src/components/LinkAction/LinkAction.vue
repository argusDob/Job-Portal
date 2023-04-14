<template>
  <div class="link-action">
    <router-link :to="pathTo">{{ text }} </router-link>
  </div>
</template>

<script>
export default {
  props: {
    pathTo: { type: String },
    text: { type: String },
  },
};
</script>

<style lang="scss" scoped src="./LinkAction.scss"></style>
