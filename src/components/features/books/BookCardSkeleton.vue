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
  <Card class="flex flex-col overflow-hidden h-full">
    <Skeleton class="w-full h-48 rounded-none" />
    <CardHeader>
      <Skeleton class="h-5 w-3/4" />
      <Skeleton class="h-4 w-1/2 mt-1" />
    </CardHeader>
    <CardContent class="flex-1 space-y-2">
      <Skeleton class="h-3 w-full" />
      <Skeleton class="h-3 w-full" />
      <Skeleton class="h-3 w-2/3" />
    </CardContent>
    <CardFooter>
      <Skeleton class="h-9 w-full" />
    </CardFooter>
  </Card>
</template>
