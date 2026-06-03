# 📚 Book Explorer

A small Vue 3 application that allows users to browse books, search through them, view details, and manage favorites.

## Features

- Browse books from FakerAPI
- Search by title, author, or genre
- Book details page
- Favorites management with localStorage persistence
- Pagination
- Internationalization (i18n)
- Loading and error handling
- Unit testing with Vitest

## Tech Stack

- Vue 3
- TypeScript
- Pinia
- Vue Router
- Tailwind CSS
- Shadcn Vue
- Vue i18n
- Vitest
- FakerAPI

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd <repository-name>
```

### 2. Create a `.env` file

```env
VITE_BASE_URL_API=https://fakerapi.it/api/v2
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Run tests

```bash
npm run test
```

## Technical Choices

- Pinia for centralized state management
- Service layer for API communication
- Separation between business components and reusable UI components
- Favorites persisted using localStorage
- Unit tests for stores and components

## Possible Improvements

- Add sorting options (title, author, date)
- Improve accessibility (ARIA labels, keyboard navigation)
- Persist search and pagination state in the URL
- Increase test coverage for components
- Add theme switching (light/dark mode) to improve accessibility and user experience

## Time Spent

~ 10 hours
