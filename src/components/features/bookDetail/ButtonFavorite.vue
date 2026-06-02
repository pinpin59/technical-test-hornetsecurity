<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { Heart, HeartPlus } from "@lucide/vue";
import { useFavoriteStore } from "@/stores/favoriteStore";
import type { Book } from "@/types/book";
import { cn } from "@/lib/utils";
import { ref } from "vue";
import Button from "@/components/ui/button/Button.vue";

const { t } = useI18n();

const favoriteStore = useFavoriteStore();
const { toggleFavorite, isFavorite } = favoriteStore;

const props = defineProps<{ book: Book }>();

const animating = ref(false);

function handleClick() {
  animating.value = true;
  toggleFavorite(props.book);
  setTimeout(() => (animating.value = false), 500);
}
</script>

<template>
  <Button
    :class="
      cn(
        'inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium cursor-pointer transition-colors duration-200 select-none',
        isFavorite(props.book.id)
          ? 'bg-destructive hover:bg-destructive/90 text-primary-foreground'
          : 'bg-primary hover:bg-primary/90 text-primary-foreground',
        animating && 'anim-pop',
      )
    "
    @click="handleClick"
  >
    <Heart
      v-if="isFavorite(props.book.id)"
      :class="cn('size-4 transition-transform duration-200')"
    />
    <HeartPlus v-else :class="cn('size-4 transition-transform duration-200')" />
    <template v-if="isFavorite(props.book.id)">
      {{ t("favorites.removeFromFavorites") }}
    </template>
    <template v-else>
      {{ t("favorites.addToFavorites") }}
    </template>
  </Button>
</template>
