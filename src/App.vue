<template>
  <div class="lightBox">
    <Red class="light" />
    <Yellow class="light" />
    <Green class="light" />
  </div>
</template>

<script>
import Red from "./components/Red.vue";
import Yellow from "./components/Yellow.vue";
import Green from "./components/Green.vue";

export default {
  name: "App",
  components: {
    Red,
    Yellow,
    Green
  },
  data() {
    return {
      current: "",
      previous: ""
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: row;
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
