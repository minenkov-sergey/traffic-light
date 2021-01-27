<template>
  <div>
    <div class="lightBox">
      <Light :attention="attention" path="/red" color="red" />
      <Light :attention="attention" path="/yellow" color="yellow" />
      <Light :attention="attention" path="/green" color="green" />
    </div>
    <Counter @attention="setAttention" v-bind:time="timer" />
  </div>
</template>

<script>
import Light from "./components/Light.vue";
import Counter from "./components/Counter.vue";

export default {
  name: "App",
  components: {
    Light,
    Counter
  },
  data() {
    return {
      currentPage: window.location.pathname,
      attention: false,
      timer: Number,
      tempTime: Number,
      lights: [
        { nextColor: "yellow", time: 10 },
        { nextColor: "green", time: 3 },
        { nextColor: "yellow", time: 15 },
        { nextColor: "red", time: 3 }
      ],
      lightIndex: 0 //this key depends on current route
    };
  },
  watch: {
    currentPage(newCurrentPage) {
      localStorage.currentPage = newCurrentPage;
    },
    lightIndex(newLightIndex) {
      localStorage.lightIndex = newLightIndex;
    }
  },
  methods: {
    setLights(lights) {
      this.attention = false;
      setTimeout(() => {
        this.$router.push(lights.nextColor);
        this.setLights(this.lights[this.lightIndex]);
      }, lights.time * 1000);

      this.timer = lights.time;
      if (this.lightIndex === 3) {
        this.lightIndex = 0;
      } else {
        this.lightIndex++;
      }
    },
    setAttention() {
      this.attention = true;
    }
  },
  created() {
    // if (
    //   localStorage.currentPage &&
    //   localStorage.lightIndex &&
    //   localStorage.timer
    // ) {
    //   console.log(this.currentPage);
    //   console.log(window.location.pathname);
    //   console.log(localStorage.currentPage);
    //   console.log(localStorage.lightIndex);
    //   console.log(localStorage.timer);
    //   this.timer = localStorage.timer;
    //   this.currentPage = localStorage.currentPage;
    //   this.$router.push(this.currentPage);
    //   this.lightIndex = localStorage.lightIndex;
    //   this.tempTime = this.lights[this.lightIndex].time;
    //   this.lights[this.lightIndex].time = localStorage.timer;
    //   this.setLights(this.lights[this.lightIndex]);
    //   this.lights[this.lightIndex].time = this.tempTime;
    // } else {
    if (this.currentPage === "/yellow") {
      this.lightIndex = 1;
    } else if (this.currentPage === "/green") {
      this.lightIndex = 2;
    }

    // pass object contains time and color that should be set next.
    this.setLights(this.lights[this.lightIndex]);
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  background-color: lightblue;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.lightBox {
  width: 70px;
  height: 200px;
  background-color: black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
