import { describe, it, expect, beforeEach, vi } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useFavoriteStore } from "@/stores/favoriteStore";
import type { Book } from "@/types/book";

const book: Book = {
  id: 1,
  title: "Clean Code",
  author: "Robert C. Martin",
  genre: "Programming",
  description: "A book about writing clean code",
  isbn: "978-0132350884",
  publisher: "Prentice Hall",
  image: "https://example.com/clean-code.jpg",
  published: "2008-08-01",
};

// mock localStorage
beforeEach(() => {
  setActivePinia(createPinia());

  vi.stubGlobal("localStorage", {
    getItem: vi.fn(() => "[]"),
    setItem: vi.fn(),
  });
});

describe("favoriteStore", () => {
  it("add a book to favorites", () => {
    const store = useFavoriteStore();

    store.addFavorite(book);

    expect(store.favorites.length).toBe(1);
    expect(store.isFavorite(1)).toBe(true);
  });

  it("remove a book from favorites", () => {
    const store = useFavoriteStore();

    store.addFavorite(book);
    store.removeFavorite(1);

    expect(store.favorites.length).toBe(0);
  });

  it("toggle adds then removes", () => {
    const store = useFavoriteStore();

    store.toggleFavorite(book);
    expect(store.isFavorite(1)).toBe(true);

    store.toggleFavorite(book);
    expect(store.isFavorite(1)).toBe(false);
  });
});
