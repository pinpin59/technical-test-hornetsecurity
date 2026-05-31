<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useBookStore } from "./stores/bookStore";
import Navbar from "./components/layouts/Navbar.vue";

const bookStore = useBookStore();
onMounted(() => {
  bookStore.fetchBooks();
  console.log("Initial books:", JSON.stringify(bookStore.books, null, 2));
});

watch(
  () => bookStore.books,
  (val) => console.log("books:", JSON.stringify(val, null, 2)),
);
</script>

<template>
  <Navbar />
  <RouterView />
</template>
