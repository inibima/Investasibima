<template>
  <div>
    <Header @navigate="navigate" />
    <component :is="currentComponent" />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Home from './components/Home.vue';
import Playstation from './components/Playstation.vue';
import Steam from './components/Steam.vue';
import About from './components/About.vue';

export default {
  components: {
    Header,
    Home,
    Playstation,
    Steam,
    About,
  },
  data() {
    return {
      currentComponent: 'Home',
    };
  },
  methods: {
    navigate(page) {
      if (page === 'playstation') {
        this.currentComponent = 'Playstation';
      } else if (page === 'steam') {
        this.currentComponent = 'Steam';
      } else if (page === 'about') {
        this.currentComponent = 'About';
      } else {
        this.currentComponent = 'Home';
      }
    },
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f8f8;
}

.content {
  text-align: center;
  padding: 50px;
}

h1 {
  font-size: 36px;
  color: #333;
}

p {
  font-size: 18px;
  color: #666;
}
</style>