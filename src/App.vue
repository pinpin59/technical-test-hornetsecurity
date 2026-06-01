<script setup lang="ts">
import { onMounted } from "vue";
import { useBookStore } from "./stores/bookStore";
import Navbar from "./components/layouts/Navbar.vue";

const bookStore = useBookStore();
onMounted(() => {
  bookStore.fetchBooks();
});
</script>

<template>
  <Navbar />
  <RouterView />
</template>
