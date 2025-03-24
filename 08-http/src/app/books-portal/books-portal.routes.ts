import { Routes } from '@angular/router';

import { BookList } from './book-list/book-list';
import { BookDetails } from './book-details/book-details';

export const booksPortalRoutes: Routes = [
  { path: 'books', component: BookList, title: 'Books' },
  { path: 'books/details/:isbn', component: BookDetails, title: 'Book Details' },
];
