<script setup lang="ts">
import Navbar from "./components/layouts/Navbar.vue";
</script>

<template>
  <Navbar />
  <main class="pt-16">
    <RouterView />
  </main>
</template>
