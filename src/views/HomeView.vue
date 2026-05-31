<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useBookStore } from "../stores/bookStore";
import BookCard from "@/components/features/books/BookCard.vue";
import BookCardSkeleton from "@/components/features/books/BookCardSkeleton.vue";
import { useRouter } from "vue-router";

const bookStore = useBookStore();
const router = useRouter();

onMounted(() => {
  bookStore.fetchBooks();
});

watch(
  () => bookStore.books,
  (val) => console.log("books:", JSON.stringify(val, null, 2)),
);
</script>

<template>
  <section class="p-6 bg-background min-h-screen">
    <h1>Home View fonctionne !</h1>
    <BookCardSkeleton v-if="bookStore.loading" v-for="n in 10" :key="n" />

    <!-- données chargées -->
    <BookCard
      v-else
      v-for="book in bookStore.books"
      :key="book.id"
      :book="book"
      @select="router.push(`/books/${$event}`)"
    />
  </section>
</template>
