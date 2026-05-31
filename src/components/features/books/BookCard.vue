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

defineProps<{ book: Book }>();
defineEmits<{ (e: "select", id: number): void }>();
</script>

<template>
  <Card class="flex flex-col overflow-hidden h-full">
    <img :src="book.image" :alt="book.title" class="w-full h-48 object-cover" />
    <CardHeader>
      <CardTitle class="line-clamp-1">{{ book.title }}</CardTitle>
      <CardDescription>{{ book.author }} · {{ book.genre }}</CardDescription>
    </CardHeader>
    <CardContent class="flex-1">
      <p class="text-sm text-muted-foreground line-clamp-3">
        {{ book.description }}
      </p>
    </CardContent>
    <CardFooter>
      <Button class="w-full" @click="$emit('select', book.id)">
        Voir le détail
      </Button>
    </CardFooter>
  </Card>
</template>
