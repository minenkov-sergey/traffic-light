<template>
  <div class="light" :class="[{active: isActive}, color]"></div>
</template>
<script>
export default {
  props: {
    path: String,
    color: String
  },
  computed: {
    isActive() {
      return this.$route.path === this.path;
    }
  }
};
</script>
<style scoped>
.light {
  width: 50px;
  height: 50px;
  margin: 5px;
  border-radius: 100%;
  opacity: 0.3;
}
.active {
  opacity: 1;
}
.red {
  background-color: red;
}
.yellow {
  background-color: yellow;
}
.green {
  background-color: rgb(23, 172, 9);
}
</style>
