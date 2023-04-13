<template>
  <transition :name="transitionName">
    <div v-if="show" class="modal">
      <div class="modal__overlay"></div>
      <div class="modal__container-wrapper" :class="additionalClasses">
        <b-icon
          :class="additionalClasses"
          class="modal__close"
          icon="x-lg"
          font-scale="1"
          @click="close"
        ></b-icon>
        <div class="modal__container">
          <div class="modal__body">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      validator: function (value) {
        return ["left", "right", "centered"].indexOf(value) !== -1;
      },
    },
    show: {
      type: Boolean,
      default: false,
    },
    transitionType: {
      type: String,
      default: "slide-left",
      validator: function (value) {
        console.log(value);
        return ["slide-left", "slide-right", "fade"].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    transitionName() {
      return `${this.transitionType}`;
    },
    additionalClasses() {
      return [
        `modal__container-wrapper-${
          this.position === "centered" ? "centered" : this.position
        }`,
      ];
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped src="./DialogBox.scss"></style>
