<template>
  <div>
    <div class="lightBox">
      <Light :blink="blink" path="/red" color="red" />
      <Light :blink="blink" path="/yellow" color="yellow" />
      <Light :blink="blink" path="/green" color="green" />
    </div>
    <Counter @blink="setBlink" :time="timer" />
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
      blink: false,
      timer: Number,
      lights: [
        { nextColor: "yellow", time: 10 },
        { nextColor: "green", time: 3 },
        { nextColor: "yellow", time: 15 },
        { nextColor: "red", time: 3 },
      ],
      lightIndex: Number, //this key depends on current route
      initialLightIndex: Number, //get index on page load
      isPageChanged: Boolean //page was changed from another page by edit address field?
    };
  },
  watch: {
    currentPage(newCurrentPage) {
      localStorage.currentPage = newCurrentPage;
    },
    lightIndex(newLightIndex) {
      localStorage.lightIndex = newLightIndex;
    },
  },
  methods: {
    // this method gets object contains time and color that should be set next.
    setLights(lights, storageTime=this.lights[this.lightIndex].time) {
      if (storageTime <= 3) {
        this.blink = true
      } else {
        this.blink = false;
      }
      this.timer = storageTime;
      setTimeout(() => {
        this.$router.push(lights.nextColor);
        this.setLights(this.lights[this.lightIndex]);
      }, this.timer * 1000);
  
      if (this.lightIndex >= 3) {
        this.lightIndex = 0;
      } else {
        this.lightIndex++;
      }
    },
    setBlink() {
      this.blink = true;
    },
    checkIsPageChanged () { //check if page was changed from another page by edit address field

      if (this.currentPage === '/red') {
        this.initialLightIndex = 1
      } else if (this.currentPage === '/yellow') {
        this.initialLightIndex = 2
      } else if (this.currentPage === '/green') {
        this.initialLightIndex = 3
      }
      if (Number(localStorage.lightIndex) !== this.initialLightIndex) {
          this.isPageChanged = true    
        } else {
          this.isPageChanged = false;
      }
      this.lightIndex = this.initialLightIndex - 1
    }
  },
  created() {
    this.checkIsPageChanged()
    if ((this.timer !== localStorage.timer) && (localStorage.timer) && (!this.isPageChanged)) { //if page was changed
      this.setLights(this.lights[this.lightIndex], Number(localStorage.timer));
    } else { // if page didnt change, or was changed by setLight algoritm
      this.setLights(this.lights[this.lightIndex]);
    } 
    
}
}
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
