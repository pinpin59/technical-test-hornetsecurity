// src/stores/favoriteStore.ts
import { defineStore } from "pinia";
import { ref, watch } from "vue";
import type { Book } from "@/types/book";

export const useFavoriteStore = defineStore("favorite", () => {
  // init from localStorage or start with an empty array
  const favorites = ref<Book[]>(
    JSON.parse(localStorage.getItem("favorites") ?? "[]"),
  );

  // Persist automatically on each change
  watch(
    favorites,
    (val) => {
      localStorage.setItem("favorites", JSON.stringify(val));
    },
    { deep: true },
  );

  // Add a book to favorites if it's not already there
  function addFavorite(book: Book) {
    if (!isFavorite(book.id)) favorites.value.push(book);
  }

  // Remove a book from favorites by its ID
  function removeFavorite(id: number) {
    favorites.value = favorites.value.filter((b) => b.id !== id);
  }

  // Toggle favorite status of a book
  function toggleFavorite(book: Book) {
    isFavorite(book.id) ? removeFavorite(book.id) : addFavorite(book);
  }

  // Check if a book is in favorites by its ID
  function isFavorite(id: number): boolean {
    return favorites.value.some((b) => b.id === id);
  }

  return { favorites, addFavorite, removeFavorite, toggleFavorite, isFavorite };
});
