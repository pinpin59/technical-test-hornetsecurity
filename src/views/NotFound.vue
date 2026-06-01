<template>
  <main
    class="flex flex-col items-center justify-center h-screen gap-4"
    role="main"
  >
    <h1 class="text-6xl font-bold text-primary">
      404 {{ $t("notFound.title") }}
    </h1>

    <p class="text-lg text-secondary">
      {{ $t("notFound.message") }}
    </p>

    <RouterLink
      to="/"
      class="px-4 py-2 rounded bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors duration-200 shadow"
    >
      {{ $t("notFound.backHome") }}
    </RouterLink>
  </main>
</template>
