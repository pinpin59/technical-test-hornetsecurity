export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  description: string;
  isbn: string;
  image: string;
  published: string;
  publisher: string;
}

export interface ApiResponse<T> {
  status: string;
  code: number;
  locale: string;
  seed: string | null;
  total: number;
  data: T[];
}
