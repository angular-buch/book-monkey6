import { Routes } from '@angular/router';

import { BookCreate } from './book-create/book-create';

export const booksAdminRoutes: Routes = [
  { path: '', redirectTo: 'create', pathMatch: 'full' },
  { path: 'create', component: BookCreate, title: 'Create Book' }
];
