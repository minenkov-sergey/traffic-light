<template>
  <div class="counter">{{ timer }}</div>
</template>
<script>
export default {
  props: {
    time: Number,
  },
  data() {
    return {
      timer: this.time,
    };
  },
  watch: {
    timer(newTimer) {
      localStorage.timer = newTimer;
    }
  },
  mounted() {
    setInterval(() => {
      if (this.timer === 0) {
        this.timer = this.time;
      }
      if (this.timer === 3) {
        this.$emit("blink");
      }
      this.timer--;
    }, 1000);
  },
};
</script>
<style scoped>
.counter {
  background-color: rgb(158, 182, 190);
  margin: 10px;
  border-radius: 100%;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}
</style>
