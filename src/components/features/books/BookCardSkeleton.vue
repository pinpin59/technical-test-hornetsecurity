<script setup lang="ts">
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
</script>

<template>
  <Card :class="'flex flex-col overflow-hidden h-full gap-0 py-0'">
    <Skeleton
      class="w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 rounded-none"
    />
    <CardHeader class="py-4">
      <Skeleton class="h-5 w-3/4" />
      <Skeleton class="h-4 w-1/2 mt-1" />
    </CardHeader>
    <CardContent class="flex-1 px-6 pb-4 space-y-2">
      <Skeleton class="h-3 w-full" />
      <Skeleton class="h-3 w-full" />
      <Skeleton class="h-3 w-2/3" />
    </CardContent>
    <CardFooter class="px-6 pb-6">
      <Skeleton class="h-9 w-full" />
    </CardFooter>
  </Card>
</template>
