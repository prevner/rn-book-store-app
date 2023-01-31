import { books } from './books';

export const myBooks = [
  {
    ...books[0],
    completion: '75%',
    lastRead: '3d 5h',
  },
  {
    ...books[1],
    completion: '23%',
    lastRead: '10d 5h',
  },
  {
    ...books[2],
    completion: '10%',
    lastRead: '1d 2h',
  },
];
