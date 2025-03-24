import { Routes } from '@angular/router';

import { BookCreate } from './book-create/book-create';

export const booksAdminRoutes: Routes = [
  { path: 'admin', redirectTo: 'admin/create' },
  { path: 'admin/create', component: BookCreate, title: 'Create Book' }
];
