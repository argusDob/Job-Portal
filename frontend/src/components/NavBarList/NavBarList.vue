<template>
  <div class="nav-bar-list">
    <div
      v-for="(item, index) in list"
      :key="index"
      class="nav-bar-list__item"
      @click="handleClick()"
    >
      <router-link :to="item.pathTo">
        <span>{{ item.title }}</span>
      </router-link>
      <b-icon icon="chevron-right"></b-icon>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
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
