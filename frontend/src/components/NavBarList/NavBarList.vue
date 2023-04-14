<template>
  <div class="nav-bar-list">
    <router-link
      v-for="(item, index) in navList"
      class="nav-bar-list__item"
      tag="div"
      :key="index"
      :to="item.pathTo"
    >
      <span>{{ item.title }}</span>
      <b-icon icon="chevron-right"></b-icon>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    navList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleClick() {
      this.$emit("navListClick");
    },
  },
};
</script>
<style lang="scss" scoped src="./NavBarList.scss"></style>
