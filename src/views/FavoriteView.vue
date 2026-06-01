<script setup lang="ts">
import { useI18n } from "vue-i18n";
import FavoriteHeader from "@/components/features/favorite/FavoriteHeader.vue";
import FavoriteEmpty from "@/components/features/favorite/FavoriteEmpty.vue";
import BookCard from "@/components/features/book/BookCard.vue";
import { useFavoriteStore } from "@/stores/favoriteStore";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

useI18n();

const favoriteStore = useFavoriteStore();
const router = useRouter();

onMounted(() => {
  console.log(
    "Mounted FavoriteView, current favorites:",
    favoriteStore.favorites.length,
  );
});
</script>

<template>
  <FavoriteHeader />
  <main class="mx-auto max-w-7xl px-4 py-8">
    <FavoriteEmpty v-if="favoriteStore.favorites.length === 0" />
    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      aria-live="polite"
      aria-relevant="additions removals"
    >
      <BookCard
        v-for="book in favoriteStore.favorites"
        :key="book.id"
        :book="book"
        @select="router.push(`/books/${$event}`)"
      />
    </div>
  </main>
</template>
