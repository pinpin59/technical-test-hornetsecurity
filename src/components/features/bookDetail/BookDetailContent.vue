<script setup lang="ts">
import { useI18n } from "vue-i18n";
import Badge from "@/components/ui/badge/Badge.vue";
import { cn } from "@/lib/utils";
import ButtonFavorite from "@/components/features/bookDetail/ButtonFavorite.vue";
import BackButton from "@/components/features/shared/BackButton.vue";
import type { Book } from "@/types/book";

const { t } = useI18n();

defineProps<{ book: Book }>();
</script>

<template>
  <BackButton class="p-6" />
  <article class="bg-background rounded-lg p-6 flex flex-col md:flex-row gap-8">
    <section class="w-full md:w-2/5 shrink-0">
      <img
        :src="`https://picsum.photos/600/600?random=${book.id}`"
        :alt="`${book.title} by ${book.author}`"
        class="w-full h-64 md:h-full object-cover rounded-lg hover:brightness-80 transition"
      />
    </section>

    <section class="flex-1 flex flex-col">
      <Badge variant="outline" :class="cn('mb-4 w-max text-primary')">
        {{ book.genre }}
      </Badge>

      <h1 class="text-lg md:text-2xl lg:text-4xl font-bold mb-4">
        {{ book.title }}
      </h1>

      <p class="text-md md:text-xl lg:text-2xl text-primary font-bold mb-4">
        {{ book.author }}
      </p>

      <div class="flex items-center gap-4 mb-4 border-b pb-4">
        <Badge :class="cn('border-lg bg-secondary/10 border text-foreground')">
          <span class="text-muted-foreground">{{ t("card.published") }}:</span>
          {{ book.published }}
        </Badge>

        <Badge
          variant="default"
          :class="cn('bg-secondary/10 border text-foreground')"
        >
          <span class="text-muted-foreground">{{ t("card.isbn") }}:</span>
          {{ book.isbn }}
        </Badge>
      </div>

      <ButtonFavorite
        :book="book"
        class="mb-6 self-start"
        aria-label="Toggle favorite book"
      />

      <p class="text-sm md:text-md text-muted-foreground">
        {{ book.description }}
      </p>
    </section>
  </article>
</template>
