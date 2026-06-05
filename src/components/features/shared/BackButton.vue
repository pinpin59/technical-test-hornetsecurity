<script setup lang="ts">
import { useRouter } from "vue-router";
import { ChevronLeftIcon } from "@lucide/vue";
import { cn } from "@/lib/utils";
import { useI18n } from "vue-i18n";

const router = useRouter();
const { t } = useI18n();
const goBack = () => {
  router.back();
};

const variants = {
  default: "text-foreground hover:bg-muted",
  primary: "text-primary hover:bg-primary/10",
  destructive: "text-destructive hover:bg-destructive/10",
};

const props = defineProps<{
  variant?: "default" | "primary" | "destructive";
}>();
</script>

<template>
  <button
    @click="goBack"
    :class="
      cn(
        'group flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-200 hover:bg-muted active:scale-95',
        variants[props.variant || 'default'],
      )
    "
  >
    <ChevronLeftIcon
      :class="
        cn(
          'w-5 h-5  transition-transform duration-200 group-hover:-translate-x-1',
          variants[props.variant || 'default'],
        )
      "
    />
    <span class="text-sm font-medium group-hover:opacity-80 transition">
      {{ t("back") }}
    </span>
  </button>
</template>
