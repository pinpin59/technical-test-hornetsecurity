<script setup lang="ts">
import { ref, watch } from "vue";
import { Button } from "@/components/ui/button";
import { Search } from "@lucide/vue";

const query = ref("");
const emit = defineEmits<{ (e: "search", value: string): void }>();

watch(query, (val) => {
  emit("search", val.trim());
});

function onSearch() {
  emit("search", query.value.trim());
}
</script>

<template>
  <form @submit.prevent="onSearch" class="flex items-center gap-2 w-full">
    <input
      v-model="query"
      :placeholder="$t('search.placeholder')"
      class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring flex-1"
      type="search"
      autocomplete="off"
      aria-label="Search"
    />
    <Button
      type="submit"
      variant="outline"
      size="icon"
      :disabled="!query.trim()"
    >
      <Search class="w-5 h-5" />
    </Button>
  </form>
</template>
