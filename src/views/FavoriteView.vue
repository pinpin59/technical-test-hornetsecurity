<script setup lang="ts">
import { useI18n } from "vue-i18n";

useI18n();
</script>

<template>
  <main class="mx-auto max-w-7xl px-4 py-8">
    <h1 class="text-2xl font-bold mb-4">{{ $t("favorites.title") }}</h1>
    <p>{{ $t("favorites.description") }}</p>
  </main>
</template>
