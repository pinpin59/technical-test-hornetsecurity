<script setup lang="ts">
import Skeleton from "@/components/ui/skeleton/Skeleton.vue";
</script>

<template>
  <main class="mx-auto max-w-7xl px-4 py-8">
    <div
      role="status"
      aria-label="Loading book details..."
      class="bg-background rounded-lg p-6 flex flex-col md:flex-row gap-8"
    >
      <!-- Image -->
      <div class="w-full md:w-2/5 shrink-0">
        <Skeleton class="w-full h-64 md:h-[500px] rounded-lg" />
      </div>

      <!-- Content -->
      <div class="flex-1 flex flex-col">
        <!-- Genre badge -->
        <Skeleton class="h-6 w-24 mb-4" />

        <!-- Title -->
        <Skeleton class="h-10 w-3/4 mb-2" />
        <Skeleton class="h-10 w-1/2 mb-4" />

        <!-- Author -->
        <Skeleton class="h-7 w-48 mb-6" />

        <!-- Metadata -->
        <div class="flex items-center gap-4 mb-6 border-b pb-4">
          <Skeleton class="h-8 w-32 rounded-md" />
          <Skeleton class="h-8 w-40 rounded-md" />
        </div>

        <!-- Favorite button -->
        <Skeleton class="h-10 w-40 mb-6 rounded-md" />

        <!-- Description -->
        <div class="space-y-3">
          <Skeleton class="h-4 w-full" />
          <Skeleton class="h-4 w-full" />
          <Skeleton class="h-4 w-full" />
          <Skeleton class="h-4 w-5/6" />
          <Skeleton class="h-4 w-4/6" />
        </div>
      </div>
    </div>
  </main>
</template>
