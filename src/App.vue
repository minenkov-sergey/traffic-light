<template>
  <div>
    <router-view>
      <div class="lightBox">
        <Light path="/red" color="red" />
        <Light path="/yellow" color="yellow" />
        <Light path="/green" color="green" />
      </div>
      <Counter :time="timer" />
    </router-view>
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
      timer: Number,
      lights: [
        { nextColor: "yellow", time: 10 },
        { nextColor: "green", time: 3 },
        { nextColor: "yellow", time: 15 },
        { nextColor: "red", time: 3 }
      ],
      lightIndex: 0
    };
  },
  methods: {
    setLights(lights) {
      setTimeout(() => {
        this.$router.push(lights.nextColor);
      }, lights.time * 1000);
      this.timer = lights.time;
      this.lightIndex++;
    }
  },

  created() {
    this.setLights(this.lights[this.lightIndex]);
    console.log(this.$route.path);
  },
  updated() {
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
