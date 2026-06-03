import { describe, it, expect, beforeEach, vi } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useBookStore } from "@/stores/bookStore";
import { bookApi } from "@/services/bookService";

vi.mock("@/services/bookService", () => {
  return {
    bookApi: {
      getBooks: vi.fn(),
    },
  };
});

describe("bookStore", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.clearAllMocks();
  });

  it("fetchBooks fills the store", async () => {
    // 1. mock API response
    (bookApi.getBooks as any).mockResolvedValue({
      data: [
        {
          id: 1,
          title: "Clean Code",
          author: "Robert C. Martin",
          genre: "Programming",
          description: "A book about writing clean code",
          isbn: "978-0132350884",
          publisher: "Prentice Hall",
          image: "https://example.com/clean-code.jpg",
          published: "2008-08-01",
        },
      ],
    });

    // 2. create store
    const store = useBookStore();

    // 3. call action
    await store.fetchBooks();

    // 4. assertions
    expect(store.books.length).toBe(1);
    expect(store.books[0].title).toBe("Clean Code");
  });
});

describe("bookStore - fetchBookById", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.clearAllMocks();
  });

  it("fetchBookById finds a book in the store", async () => {
    const store = useBookStore();
    // Pre-populate the store with books
    store.books = [
      {
        id: 1,
        title: "Clean Code",
        author: "Robert C. Martin",
        genre: "Programming",
        description: "A book about writing clean code",
        isbn: "978-0132350884",
        publisher: "Prentice Hall",
        image: "https://example.com/clean-code.jpg",
        published: "2008-08-01",
      },
    ];

    // Call fetchBookById
    await store.fetchBookById(1);

    // Assertions
    expect(store.selectedBook).not.toBeNull();
    expect(store.selectedBook?.title).toBe("Clean Code");
  });
});
