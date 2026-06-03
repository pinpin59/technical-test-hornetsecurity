import { createPinia, setActivePinia } from "pinia";
import { vi } from "vitest";
import { createI18n } from "vue-i18n";
import { i18n } from "@/i18n";
import { config } from "@vue/test-utils";

// Mock i18n for testing
config.global.plugins = [i18n];

// Pinia global auto
beforeEach(() => {
  setActivePinia(createPinia());
});
