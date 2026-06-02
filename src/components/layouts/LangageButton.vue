<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { Button } from "@/components/ui/button";

const { locale } = useI18n();
const animating = ref(false);

function toggleLang() {
  animating.value = true;
  locale.value = locale.value === "fr" ? "en" : "fr";

  setTimeout(() => {
    animating.value = false;
  }, 400);
}
</script>

<template>
  <Button
    :class="animating && 'anim-pop'"
    variant="outline"
    size="sm"
    @click="toggleLang"
  >
    {{ locale === "fr" ? "EN" : "FR" }}
  </Button>
</template>
