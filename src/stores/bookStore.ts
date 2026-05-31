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
    // Si les livres sont déjà chargés, on ne refait pas l'appel API
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
    // Si le livre sélectionné est déjà celui demandé, on ne refait pas l'appel API
    if (selectedBook.value?.id === id) return;

    // Cherche d'abord dans les livres déjà chargés
    const existing = books.value.find((book) => book.id === id);
    if (existing) {
      selectedBook.value = existing;
      return;
    }

    // Sinon appel API
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
