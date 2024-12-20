<template>
  <nav class="navbar">
    <div class="logo">InvestasiBima</div>
    <ul>
      <li><a href="#" @click="showHome">Home</a></li>
      <li><a href="#" @click="showPlaystation">PlayStation</a></li>
      <li><a href="#" @click="showSteam">Steam</a></li>
      <li><a href="#" @click="showAbout">Profile</a></li>
    </ul>
    <button @click="loginWithGoogle" class="login-btn">Login with Google</button>
  </nav>
</template>

<script>
import { auth, provider, signInWithPopup } from '../firebase';

export default {
  name: 'Header',
  methods: {
    showHome() {
      this.$emit('navigate', 'home');
    },
    showPlaystation() {
      this.$emit('navigate', 'playstation');
    },
    showSteam() {
      this.$emit('navigate', 'steam');
    },
    showAbout() {
      this.$emit('navigate', 'about');
    },
    async loginWithGoogle() {
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log('User Info:', user);
        alert(`Welcome, ${user.displayName}`);
      } catch (error) {
        console.error('Error during login:', error);
      }
    }
  }
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

ul {
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
}

li {
  margin-right: 20px;
}

a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

.login-btn {
  background-color: #4285f4;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.login-btn:hover {
  background-color: #357ae8;
}
</style>