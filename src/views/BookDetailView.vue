<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useBookStore } from "@/stores/bookStore";
import { watch } from "vue";
import { useRoute } from "vue-router";

import { SearchAlert } from "@lucide/vue";
import CardEmpty from "@/components/features/shared/CardEmpty.vue";
import BookDetailSkeleton from "@/components/features/bookDetail/BookDetailSkeleton.vue";
import BookDetailContent from "@/components/features/bookDetail/BookDetailContent.vue";
import { storeToRefs } from "pinia";

const { t } = useI18n();
const route = useRoute();
const bookStore = useBookStore();
const { selectedBook, loading } = storeToRefs(bookStore);

watch(
  () => route.params.id,
  (newId) => {
    bookStore.fetchBookById(Number(newId));
  },
  { immediate: true },
);
</script>

<template>
  <main class="mx-auto max-w-7xl px-4 py-8">
    <BookDetailSkeleton v-if="loading" />
    <BookDetailContent v-else-if="selectedBook" :book="selectedBook" />
    <CardEmpty
      v-else
      :icon="SearchAlert"
      :title="t('card.notAvailable')"
      :description="t('card.notAvailableDesc')"
      :button-label="t('card.notAvailableButton')"
      button-to="/"
    />
  </main>
</template>
