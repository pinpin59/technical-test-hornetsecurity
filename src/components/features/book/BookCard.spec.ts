import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import BookCard from "@/components/features/book/BookCard.vue";
import type { Book } from "@/types/book";

describe("BookCard", () => {
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

  const factory = () =>
    mount(BookCard, {
      props: { book },
    });

  it("displays the book title", () => {
    const wrapper = factory();
    expect(wrapper.text()).toContain("Clean Code");
  });

  it("emits select event", async () => {
    const wrapper = factory();

    await wrapper.find("button").trigger("click");

    expect(wrapper.emitted("select")).toBeTruthy();
    expect(wrapper.emitted("select")?.[0]).toEqual([1]);
  });
});
