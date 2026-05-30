<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useBookStore } from "../stores/bookStore";

const bookStore = useBookStore();
onMounted(() => {
  bookStore.fetchBooks();
});

watch(
  () => bookStore.books,
  (val) => console.log("books:", JSON.stringify(val, null, 2)),
);
</script>

<template>
  <div>
    <h1>Home View fonctionne !</h1>
    <ul>
      <li v-for="book in bookStore.books" :key="book.id">
        {{ book.title }} by {{ book.author }}
      </li>
    </ul>
  </div>
</template>
