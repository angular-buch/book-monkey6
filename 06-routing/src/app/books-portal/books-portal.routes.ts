import { Routes } from '@angular/router';

import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';

export const booksPortalRoutes: Routes = [
  { path: 'books', component: BookListComponent, title: 'Books' },
  { path: 'books/details/:isbn', component: BookDetailsComponent, title: 'Book Details' },
];
