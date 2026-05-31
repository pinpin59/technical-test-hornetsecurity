<script setup lang="ts">
import type { Book } from "@/types/book";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

defineProps<{ book: Book }>();
defineEmits<{ (e: "select", id: number): void }>();
</script>

<template>
  <Card :class="cn('flex flex-col overflow-hidden h-full gap-0 py-0')">
    <img
      :src="`https://picsum.photos/600/600?random=${book.id}`"
      :alt="book.title"
      class="w-full lg:h-96 md:h-72 h-48 object-cover"
    />
    <CardHeader class="py-4">
      <CardTitle>{{ book.title }}</CardTitle>
      <CardDescription>{{ book.author }} · {{ book.genre }}</CardDescription>
    </CardHeader>
    <CardContent class="flex-1 px-6 pb-4">
      <p class="text-sm text-muted-foreground line-clamp-3">
        {{ book.description }}
      </p>
    </CardContent>
    <CardFooter class="px-6 pb-6">
      <Button class="w-full" @click="$emit('select', book.id)">
        Voir le détail
      </Button>
    </CardFooter>
  </Card>
</template>
