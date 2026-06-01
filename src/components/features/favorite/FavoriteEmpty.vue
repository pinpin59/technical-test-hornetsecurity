<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { HeartPlus } from "@lucide/vue";
import Button from "@/components/ui/button/Button.vue";
import { cn } from "@/lib/utils";
useI18n();
</script>

<template>
  <section
    class="flex flex-col items-center justify-center py-16 mx-auto max-w-xl text-center"
  >
    <div
      class="w-50 h-50 bg-card rounded-lg flex items-center mb-10 justify-center"
    >
      <HeartPlus :size="150" :stroke-width="1" class="text-primary" />
    </div>
    <h2 class="text-sm md:text-lg lg:text-2xl mb-2 font-semibold">
      {{ $t("favorites.emptyTitle") }}
    </h2>
    <p class="text-muted-foreground text-sm md:text-md">
      {{ $t("favorites.emptyMessage") }}
    </p>
    <Button as-child :class="cn(`mt-10`)">
      <RouterLink to="/">
        {{ $t("favorites.emptyButton") }}
      </RouterLink>
    </Button>
  </section>
</template>
