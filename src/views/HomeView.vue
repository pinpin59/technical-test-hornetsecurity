<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { useBookStore } from "../stores/bookStore";
import BookCard from "@/components/features/books/BookCard.vue";
import BookCardSkeleton from "@/components/features/books/BookCardSkeleton.vue";
import BooksPagination from "@/components/features/books/BooksPagination.vue";
import { useRouter } from "vue-router";
import SearchBar from "@/components/ui/SearchBar.vue";
import { useI18n } from "vue-i18n";

// Access the i18n instance for translations
useI18n();

// Access the book store and router
const bookStore = useBookStore();
const router = useRouter();

// Pagination and search state
const ITEMS_PER_PAGE = 6;
const searchQuery = ref("");
const currentPage = ref(1);

// Event handlers for search and pagination
function handleSearch(value: string) {
  searchQuery.value = value;
  currentPage.value = 1; // Reset to first page on new search
}

// Event handler for pagination component
function handlePageChange(page: number) {
  currentPage.value = page;
}

// Computed properties for filtering depending on search query
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

const paginatedBooks = computed(() => {
  const start = (currentPage.value - 1) * ITEMS_PER_PAGE;
  return filteredBooks.value.slice(start, start + ITEMS_PER_PAGE);
});

const total = computed(() => filteredBooks.value.length);

onMounted(() => {
  bookStore.fetchBooks(50);
});
</script>

<template>
  <main class="mx-auto max-w-7xl px-4 py-8">
    <div>
      <h1 class="text-2xl font-bold text-foreground mb-6">Books</h1>
      <SearchBar @search="handleSearch" class="mb-6" />
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      aria-live="polite"
      aria-relevant="additions removals"
    >
      <template v-if="bookStore.loading">
        <BookCardSkeleton v-for="n in 10" :key="n" />
      </template>
      <template v-else>
        <BookCard
          v-for="book in paginatedBooks"
          :key="book.id"
          :book="book"
          @select="router.push(`/books/${$event}`)"
        />
      </template>
    </div>
    <div class="mt-6 flex justify-center">
      <BooksPagination
        :total="total"
        :items-per-page="ITEMS_PER_PAGE"
        :current-page="currentPage"
        @page-change="handlePageChange"
      />
    </div>
  </main>
</template>
