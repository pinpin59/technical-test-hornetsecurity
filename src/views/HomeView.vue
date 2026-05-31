<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { useBookStore } from "../stores/bookStore";
import BookCard from "@/components/features/books/BookCard.vue";
import BookCardSkeleton from "@/components/features/books/BookCardSkeleton.vue";
import { useRouter } from "vue-router";
import SearchBar from "@/components/ui/SearchBar.vue";
import { useI18n } from "vue-i18n";

useI18n();
const bookStore = useBookStore();
const router = useRouter();

const searchQuery = ref("");

const filteredBooks = computed(() => {
  const q = searchQuery.value.toLowerCase().trim();
  if (!q) return bookStore.books;
  return bookStore.books.filter(
    (book) =>
      book.title.toLowerCase().includes(q) ||
      book.author.toLowerCase().includes(q) ||
      book.genre.toLowerCase().includes(q),
  );
});

//this function receives the search query from the SearchBar component event
function handleSearch(value: string) {
  searchQuery.value = value;
}

onMounted(() => {
  bookStore.fetchBooks();
});
</script>

<template>
  <main class="mx-auto max-w-7xl px-4 py-8">
    <h1 class="text-2xl font-bold text-foreground mb-6">Books</h1>
    <div>
      <SearchBar @search="handleSearch" class="mb-6" />
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <template v-if="bookStore.loading">
        <BookCardSkeleton v-for="n in 10" :key="n" />
      </template>
      <template v-else>
        <BookCard
          v-for="book in filteredBooks"
          :key="book.id"
          :book="book"
          @select="router.push(`/books/${$event}`)"
        />
      </template>
    </div>
  </main>
</template>
