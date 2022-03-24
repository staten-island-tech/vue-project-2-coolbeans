<script>
export default {
  data() {
    return {
      clicked: true,
    };
  },
  methods: {
    disappear: function () {
      if (this.clicked === true) {
        this.clicked = false;
      }
    },
  },
};
</script>

<template>
  <div class="container" v-show="this.clicked" @click="disappear">
    <div class="form">
      <slot name="header">This is the default title! </slot>

      <slot name="body"> This is the default body! </slot>

      <slot name="footer"> This is the default footer! </slot>
    </div>
  </div>
</template>

<style scoped>
.form {
  width: 25%;
  height: 55%;
}
.container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.form {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}
</style>
