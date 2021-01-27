<template>
  <div class="light" :class="[{active: isActive}, {attention: isOn}, color ]"></div>
</template>
<script>
export default {
  props: {
    path: String,
    color: String,
    attention: Boolean
  },
  computed: {
    isActive() {
      return this.$route.path === this.path;
    },
    isOn() {
      return this.attention === true;
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
.active.attention {
  -webkit-animation: blink 1s infinite;
  -moz-animation: blink 1s infinite;
  animation: blink 1s infinite;
}

@-webkit-keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.2;
  }
}

@keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.2;
  }
}
@-moz-keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.2;
  }
}
</style>
