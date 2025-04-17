<template>
  <header class="bg-primary text-white py-3">
    <div class="container d-flex justify-content-between align-items-center">
      <h1 class="fs-3">InvestasiBima</h1>
      <nav class="d-flex gap-3">
        <router-link to="/" class="btn btn-outline-light">Home</router-link>
        <router-link to="/steam" class="btn btn-outline-light">Steam</router-link>
        <router-link to="/playstation" class="btn btn-outline-light">Playstation</router-link>
        <router-link to="/about" class="btn btn-outline-light">About</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>