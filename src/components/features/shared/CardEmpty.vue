<script setup lang="ts">
import { type Component } from "vue";
import { cn } from "@/lib/utils";
import BaseLinkButton from "@/components/features/shared/BaseLinkButton.vue";

withDefaults(
  defineProps<{
    icon?: Component;
    iconSize?: number;
    iconStrokeWidth?: number;
    title: string;
    description: string;
    buttonLabel?: string;
    buttonTo?: string;
  }>(),
  {
    iconSize: 150,
    iconStrokeWidth: 1,
    buttonTo: "/",
  },
);
</script>

<template>
  <section
    class="flex flex-col items-center justify-center py-16 mx-auto max-w-xl text-center"
  >
    <div
      v-if="icon"
      class="w-50 h-50 bg-card rounded-lg flex items-center mb-10 justify-center"
    >
      <component
        :is="icon"
        :size="iconSize"
        :stroke-width="iconStrokeWidth"
        class="text-primary"
        aria-hidden="true"
      />
    </div>
    <h2 class="text-sm md:text-lg lg:text-2xl mb-2 font-semibold">
      {{ title }}
    </h2>
    <p class="text-muted-foreground text-sm md:text-md">
      {{ description }}
    </p>
    <BaseLinkButton
      v-if="buttonLabel"
      :to="buttonTo"
      :label="buttonLabel"
      :class="cn('mt-10')"
    />
  </section>
</template>
