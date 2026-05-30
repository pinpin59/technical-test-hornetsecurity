<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: "primary" | "secondary" | "danger";
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
  }>(),
  {
    variant: "primary",
    type: "button",
    disabled: false,
  },
);

const variantClasses: Record<string, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  danger: "bg-red-600 text-white hover:bg-red-700",
};
</script>

<template>
  <button
    :type="props.type"
    :disabled="props.disabled"
    class="px-4 py-2 rounded font-semibold transition-colors duration-200 shadow cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
    :class="variantClasses[props.variant!]"
  >
    <slot />
  </button>
</template>
