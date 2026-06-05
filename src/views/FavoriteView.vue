<script setup lang="ts">
import FavoriteHeader from "@/components/features/favorite/FavoriteHeader.vue";
import CardEmpty from "@/components/features/shared/CardEmpty.vue";
import BookCard from "@/components/features/book/BookCard.vue";
import BackButton from "@/components/features/shared/BackButton.vue";
import { useI18n } from "vue-i18n";
import { useFavoriteStore } from "@/stores/favoriteStore";
import { useRouter } from "vue-router";
import { HeartPlus } from "@lucide/vue";
import { storeToRefs } from "pinia";

const router = useRouter();
const { t } = useI18n();
const favoriteStore = useFavoriteStore();
const { favorites } = storeToRefs(favoriteStore);
</script>

<template>
  <FavoriteHeader />
  <div class="mx-auto max-w-7xl px-4">
    <BackButton variant="default" class="mb-6" />

    <CardEmpty
      v-if="favorites.length === 0"
      :icon="HeartPlus"
      :title="t('favorites.emptyTitle')"
      :description="t('favorites.emptyMessage')"
      :buttonLabel="t('favorites.emptyButton')"
      :buttonTo="'/'"
    />
    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      aria-live="polite"
      aria-relevant="additions removals"
    >
      <BookCard
        v-for="book in favorites"
        :key="book.id"
        :book="book"
        @select="router.push(`/book/${$event}`)"
      />
    </div>
  </div>
</template>
