<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

function toggleLang() {
  locale.value = locale.value === "fr" ? "en" : "fr";
}
</script>

<template>
  <h1>{{ t("welcome") }}</h1>
  <button
    @click="toggleLang"
    class="px-4 py-2 rounded bg-white text-black font-semibold hover:bg-gray-200 transition-colors duration-200 shadow"
  >
    {{ locale === "fr" ? "EN" : "FR" }}
  </button>
</template>
