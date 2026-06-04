<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

defineProps({
  paginatedBooks: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="mb-6">
    <h1 class="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
      <span
        class="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent"
      >
        {{ t("home.title") }}
      </span>
    </h1>

    <p class="mt-2 text-sm sm:text-base text-muted-foreground">
      {{ t("home.description") }}
    </p>

    <div class="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
      <span class="inline-flex items-center gap-1">
        📚 {{ paginatedBooks.length }} {{ t("results") }}
      </span>
    </div>
  </div>
</template>
