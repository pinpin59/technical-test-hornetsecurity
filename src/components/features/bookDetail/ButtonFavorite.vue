<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { Heart, HeartPlus } from "@lucide/vue";
import { useFavoriteStore } from "@/stores/favoriteStore";
import type { Book } from "@/types/book";
import { cn } from "@/lib/utils";
import { ref } from "vue";

const { t } = useI18n();
const favoriteStore = useFavoriteStore();
const props = defineProps<{ book: Book }>();

const animating = ref(false);

function handleClick() {
  animating.value = true;
  favoriteStore.toggleFavorite(props.book);
  setTimeout(() => (animating.value = false), 500);
}
</script>

<template>
  <button
    :class="
      cn(
        'inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium cursor-pointer transition-colors duration-200 select-none',
        favoriteStore.isFavorite(props.book.id)
          ? 'bg-destructive hover:bg-destructive/90 text-primary-foreground'
          : 'bg-primary hover:bg-primary/90 text-primary-foreground',
        animating.valueOf() && 'btn-pop',
      )
    "
    @click="handleClick"
  >
    <Heart
      v-if="favoriteStore.isFavorite(props.book.id)"
      :class="
        cn(
          'size-4 transition-transform duration-200',
          animating.valueOf() && 'icon-pop',
        )
      "
    />
    <HeartPlus
      v-else
      :class="
        cn(
          'size-4 transition-transform duration-200',
          animating.valueOf() && 'icon-pop',
        )
      "
    />
    <template v-if="favoriteStore.isFavorite(props.book.id)">
      {{ t("favorites.removeFromFavorites") }}
    </template>
    <template v-else>
      {{ t("favorites.addToFavorites") }}
    </template>
  </button>
</template>

<style scoped>
.btn-pop {
  animation: btnPop 0.4s ease;
}
.icon-pop {
  animation: iconPop 0.4s ease;
}
@keyframes btnPop {
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.12);
  }
  60% {
    transform: scale(0.96);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes iconPop {
  0% {
    transform: scale(1) rotate(0deg);
  }
  30% {
    transform: scale(1.4) rotate(-15deg);
  }
  60% {
    transform: scale(0.9) rotate(5deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
  }
}
</style>
