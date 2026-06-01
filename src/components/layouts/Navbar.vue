<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { RouterLink } from "vue-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import LangageButton from "@/components/layouts/LangageButton.vue";
import { Home, BookOpen, Menu, X } from "@lucide/vue";
import { cn } from "@/lib/utils";

const { t } = useI18n();
const mobileOpen = ref(false);

const links = [
  { to: "/", icon: Home, label: "nav.home" },
  { to: "/books", icon: BookOpen, label: "nav.books" },
];
</script>

<template>
  <!-- Backdrop -->
  <Transition
    enter-active-class="transition-opacity duration-200"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-150"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="mobileOpen"
      class="fixed inset-0 bg-black/50 z-10 md:hidden"
      aria-hidden="true"
      @click="mobileOpen = false"
    />
  </Transition>

  <header class="border-b bg-card relative z-20">
    <div class="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
      <!-- Logo -->
      <RouterLink
        to="/"
        class="font-bold text-lg text-primary"
        :aria-label="t('nav.title')"
      >
        {{ t("nav.title") }}
      </RouterLink>

      <!-- Desktop nav -->
      <div class="hidden md:flex items-center gap-2">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem v-for="link in links" :key="link.to">
              <RouterLink
                :to="link.to"
                :class="
                  cn(
                    navigationMenuTriggerStyle(),
                    '[&.router-link-exact-active]:bg-accent [&.router-link-exact-active]:text-accent-foreground',
                  )
                "
              >
                <component
                  :is="link.icon"
                  class="size-4 mr-2 text-foreground"
                  aria-hidden="true"
                />
                {{ t(link.label) }}
              </RouterLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <LangageButton />
      </div>

      <!-- Mobile: lang toggle + hamburger -->
      <div class="flex items-center gap-2 md:hidden">
        <LangageButton />
        <button
          class="p-2 rounded-md hover:bg-accent transition-colors"
          :aria-label="mobileOpen ? t('nav.closeMenu') : t('nav.openMenu')"
          :aria-expanded="mobileOpen"
          aria-controls="mobile-menu"
          @click="mobileOpen = !mobileOpen"
        >
          <X v-if="mobileOpen" class="size-5" aria-hidden="true" />
          <Menu v-else class="size-5" aria-hidden="true" />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <nav
        v-if="mobileOpen"
        id="mobile-menu"
        class="md:hidden absolute top-full left-0 right-0 border-t bg-card px-4 py-3 flex flex-col gap-1 shadow-lg"
        :aria-label="t('nav.mobileMenu')"
      >
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium hover:bg-accent transition-colors [&.router-link-active]:bg-accent [&.router-link-active]:text-accent-foreground"
          @click="mobileOpen = false"
        >
          <component :is="link.icon" class="size-4" aria-hidden="true" />
          {{ t(link.label) }}
        </RouterLink>
      </nav>
    </Transition>
  </header>
</template>
