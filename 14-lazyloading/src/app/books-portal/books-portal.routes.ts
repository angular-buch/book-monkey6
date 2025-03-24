import { Routes } from '@angular/router';

import { BookList } from './book-list/book-list';
import { BookDetails } from './book-details/book-details';

export const booksPortalRoutes: Routes = [
  { path: '', component: BookList, title: 'Books' },
  { path: 'details/:isbn', component: BookDetails, title: 'Book Details' },
];
