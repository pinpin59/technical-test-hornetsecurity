<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RouterLink } from "vue-router";

defineProps<{
  to: string;
  label: string;
}>();
</script>

<template>
  <Button as-child :class="cn('text-sm md:text-md ')">
    <RouterLink :to="to">
      {{ label }}
    </RouterLink>
  </Button>
</template>
