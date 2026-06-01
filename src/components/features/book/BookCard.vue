<script setup lang="ts">
import type { Book } from "@/types/book";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useI18n } from "vue-i18n";
import { Heart } from "@lucide/vue";
import { HeartPlus } from "@lucide/vue";

import { useFavoriteStore } from "@/stores/favoriteStore";

useI18n();
defineProps<{ book: Book }>();
defineEmits<{ (e: "select", id: number): void }>();

const favoriteStore = useFavoriteStore();
</script>

<template>
  <Card :class="cn('flex flex-col overflow-hidden h-full gap-0 py-0 relative')">
    <div
      class="absolute w-10 h-10 bg-background hover:bg-background/80 cursor-alias rounded-full top-2 right-2 z-10 flex items-center justify-center"
      @click="favoriteStore.toggleFavorite(book)"
    >
      <Heart
        v-if="favoriteStore.isFavorite(book.id)"
        class="text-destructive"
      />
      <HeartPlus v-else class="text-primary" />
    </div>
    <img
      :src="`https://picsum.photos/600/600?random=${book.id}`"
      :alt="`${book.title} by ${book.author}`"
      class="w-full lg:h-96 md:h-72 h-48 object-cover hover:brightness-80 transition"
    />
    <CardHeader class="py-4">
      <CardTitle>{{ book.title }}</CardTitle>
      <CardDescription>{{ book.author }} · {{ book.genre }}</CardDescription>
    </CardHeader>
    <CardContent class="flex-1 px-6 pb-4">
      <p class="text-sm text-muted-foreground line-clamp-3">
        {{ book.description }}
      </p>
    </CardContent>
    <CardFooter class="px-6 pb-6">
      <Button class="w-full cursor-pointer" @click="$emit('select', book.id)">
        {{ $t("card.viewDetails") }}
      </Button>
    </CardFooter>
  </Card>
</template>
