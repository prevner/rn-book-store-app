import { books } from "./books";


export const categories = [
  {
    id: 1,
    categoryName: 'Best Seller',
    books: [books[0], books[1], books[2]],
  },
  {
    id: 2,
    categoryName: 'The Latest',
    books: [books[1]],
  },
  {
    id: 3,
    categoryName: 'Coming Soon',
    books: [books[2]],
  },
];
