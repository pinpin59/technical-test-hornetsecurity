import type { ApiResponse, Book } from "../types/book";

const BASE_URL = import.meta.env.VITE_BASE_URL_API;

export const bookApi = {
  async getBooks(quantity = 10): Promise<ApiResponse<Book>> {
    const response = await fetch(
      `${BASE_URL}/books?_quantity=${quantity}&_seed=3`,
    );
    if (!response.ok) throw new Error("Failed to fetch books");
    return response.json();
  },

  // async getBookById(id: number): Promise<ApiResponse<Book>> {
  //   const response = await fetch(`${BASE_URL}/books?_quantity=1&_seed=${id}`);
  //   if (!response.ok) throw new Error("Failed to fetch book");
  //   return response.json();
  // },
};
