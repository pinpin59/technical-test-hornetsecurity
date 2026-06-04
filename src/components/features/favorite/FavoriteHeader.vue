<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { Badge } from "@/components/ui/badge";

import { Heart } from "@lucide/vue";
import { cn } from "@/lib/utils";
import { useFavoriteStore } from "@/stores/favoriteStore";

useI18n();
const favoriteStore = useFavoriteStore();
</script>

<template>
  <section class="mb-6 bg-white p-4 border-b">
    <div class="mx-auto max-w-7xl px-4 py-8">
      <div class="flex flex-row justify-between items-center gap-2">
        <h1
          class="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent text-2xl md:text-4xl font-bold tracking-tight"
        >
          {{ $t("favorites.title") }}
        </h1>
        <Badge
          variant="default"
          :class="
            cn(
              'bg-background border text-foreground text-sm px-2 py-1 md:px-4 md:py-2 [&>svg]:size-4 gap-2 transition-transform duration-200 hover:scale-105 cursor-default',
            )
          "
        >
          <Heart :size="24" color="red" />
          <p class="text-sm">
            {{ favoriteStore.favorites.length }}
            {{
              favoriteStore.favorites.length <= 1
                ? $t("favorites.book")
                : $t("favorites.books")
            }}
          </p>
        </Badge>
      </div>

      <h2 class="mt-4 text-sm sm:text-base text-muted-foreground">
        {{ $t("favorites.description") }}
      </h2>
    </div>
  </section>
</template>
