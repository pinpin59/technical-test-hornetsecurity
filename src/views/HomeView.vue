<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { useBookStore } from "../stores/bookStore";
import BookCard from "@/components/features/book/BookCard.vue";
import BookCardSkeleton from "@/components/features/book/BookCardSkeleton.vue";
import BooksPagination from "@/components/features/book/BooksPagination.vue";
import CardEmpty from "@/components/features/shared/CardEmpty.vue";
import SearchBar from "@/components/features/book/SearchBar.vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { SearchX } from "@lucide/vue";

const { t } = useI18n();
const bookStore = useBookStore();
const router = useRouter();

const ITEMS_PER_PAGE = 6;

// state
const search = ref("");
const page = ref(1);

// fetch
onMounted(() => {
  bookStore.fetchBooks(50);
});

// handlers
function onSearch(value: string) {
  search.value = value;
  page.value = 1;
}

function onPageChange(p: number) {
  page.value = p;
}

// filtering
const filteredBooks = computed(() => {
  const q = search.value.toLowerCase().trim();
  if (!q) return bookStore.books;

  return bookStore.books.filter((b) =>
    `${b.title} ${b.author} ${b.genre}`.toLowerCase().includes(q),
  );
});

// pagination
const paginatedBooks = computed(() => {
  const start = (page.value - 1) * ITEMS_PER_PAGE;
  return filteredBooks.value.slice(start, start + ITEMS_PER_PAGE);
});

const total = computed(() => filteredBooks.value.length);
</script>

<template>
  <main class="mx-auto max-w-7xl px-4 py-8">
    <div>
      <h1 class="text-2xl font-bold text-foreground mb-6">Books</h1>
      <SearchBar @search="onSearch" class="mb-6" />
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
        <h2 class="sr-only">
          {{ t("home.results") }}
        </h2>
        <BookCard
          v-for="book in paginatedBooks"
          :key="book.id"
          :book="book"
          @select="router.push(`/book/${$event}`)"
        />
      </template>
      <template v-if="!bookStore.loading && paginatedBooks.length === 0">
        <div class="col-span-full">
          <CardEmpty
            :icon="SearchX"
            :title="t('home.noResultsTitle')"
            :description="t('home.noResultsMessage')"
          />
        </div>
      </template>
    </div>
    <div class="mt-6 flex justify-center">
      <BooksPagination
        :total="total"
        :items-per-page="ITEMS_PER_PAGE"
        :current-page="page"
        @page-change="onPageChange"
      />
    </div>
  </main>
</template>
