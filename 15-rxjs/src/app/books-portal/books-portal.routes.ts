import { Routes } from '@angular/router';

import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';

export const booksPortalRoutes: Routes = [
  { path: '', component: BookListComponent, title: 'Books' },
  { path: 'details/:isbn', component: BookDetailsComponent, title: 'Book Details' },
];
