<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { Button } from "@/components/ui/button";

const { locale } = useI18n();

function toggleLang() {
  locale.value = locale.value === "fr" ? "en" : "fr";
}
</script>

<template>
  <Button variant="outline" size="sm" @click="toggleLang">
    {{ locale === "fr" ? "EN" : "FR" }}
  </Button>
</template>
