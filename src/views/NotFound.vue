<script setup lang="ts">
import BaseLinkButton from "@/components/features/shared/BaseLinkButton.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen gap-4"
    role="main"
    aria-labelledby="notfound-title"
  >
    <h1 id="notfound-title" class="text-6xl font-bold text-primary">
      404 {{ t("notFound.title") }}
    </h1>

    <p class="text-lg text-secondary">
      {{ t("notFound.message") }}
    </p>

    <BaseLinkButton
      to="/"
      :label="t('notFound.backHome')"
      class="px-4 py-2 rounded bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors duration-200 shadow"
    />
  </div>
</template>
