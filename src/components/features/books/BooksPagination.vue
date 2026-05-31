<script setup lang="ts">
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const props = defineProps<{
  total: number;
  itemsPerPage: number;
  currentPage: number;
}>();
const emit = defineEmits<{ (e: "page-change", page: number): void }>();
</script>

<template>
  <div class="flex flex-col gap-6">
    <Pagination
      v-slot="{ page }"
      :items-per-page="props.itemsPerPage"
      :total="props.total"
      :page="props.currentPage"
      @update:page="emit('page-change', $event)"
    >
      <PaginationContent v-slot="{ items }">
        <PaginationPrevious />

        <template v-for="(item, index) in items" :key="index">
          <PaginationItem
            v-if="item.type === 'page'"
            :value="item.value"
            :is-active="item.value === page"
          >
            {{ item.value }}
          </PaginationItem>
        </template>

        <PaginationNext />
      </PaginationContent>
    </Pagination>
  </div>
</template>
