import { defineStore } from "pinia";
import { ref } from "vue";
import { bookApi } from "../services/bookService";
import type { Book } from "../types/book";

export const useBookStore = defineStore("book", () => {
  const books = ref<Book[]>([]);
  const selectedBook = ref<Book | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  async function fetchBooks(quantity = 50) {
    // If we already have books loaded, we can skip fetching again
    if (books.value.length > 0) return;

    loading.value = true;
    error.value = null;
    try {
      const response = await bookApi.getBooks(quantity);
      books.value = response.data;
    } catch (e) {
      error.value = (e as Error).message;
    } finally {
      loading.value = false;
    }
  }

  async function fetchBookById(id: number) {
    // If the selected book is already the requested one, we can skip the API call
    if (selectedBook.value?.id === id) return;

    // First, look for the book in the already loaded books
    const existing = books.value.find((book) => book.id === id);
    if (existing) {
      selectedBook.value = existing;
      return;
    }

    // Otherwise, make an API call
    loading.value = true;
    error.value = null;
    try {
      const response = await bookApi.getBookById(id);
      selectedBook.value = response.data[0];
    } catch (e) {
      error.value = (e as Error).message;
    } finally {
      loading.value = false;
    }
  }

  async function deleteBook(id: number) {
    books.value = books.value.filter((book) => book.id !== id);
    if (selectedBook.value?.id === id) {
      selectedBook.value = null;
    }
  }

  return {
    books,
    selectedBook,
    loading,
    error,
    fetchBooks,
    fetchBookById,
    deleteBook,
  };
});
