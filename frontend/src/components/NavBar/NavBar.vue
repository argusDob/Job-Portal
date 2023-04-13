<template>
  <div class="navigation">
    <nav class="navigation__bar">
      <span><h1>ICT JOB PORTAL</h1></span>
      <b-icon
        @click="open"
        :class="additionalClasses"
        class="navigation__icon"
        icon="chevron-bar-right"
        font-scale="1"
      ></b-icon>
    </nav>
    <DialogBox
      @close="close"
      :show="show"
      position="right"
      transitionType="slide-left"
      ><NavBarList @navListClick="close" :list="navBarList"
    /></DialogBox>
  </div>
</template>

<script>
import DialogBox from "../DialogBox/DialogBox.vue";
import NavBarList from "../NavBarList/NavBarList.vue";

import getNavBarListConfig from "./NavBarList.config";

export default {
  components: {
    DialogBox,
    NavBarList,
  },
  data() {
    return {
      show: false,
      rotate: false,
      navBarList: getNavBarListConfig(),
    };
  },
  computed: {
    additionalClasses() {
      let classes = [];
      if (this.rotate) classes.push("navigation__icon-rotate-down");
      return classes;
    },
  },
  methods: {
    open() {
      this.show = true;
      this.rotate = true;
    },
    close() {
      this.show = false;
      this.rotate = false;
    },
  },
};
</script>
<style lang="scss" scoped src="./NavBar.scss"></style>
