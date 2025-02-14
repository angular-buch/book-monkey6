import { Routes } from '@angular/router';

import { BookCreateComponent } from './book-create/book-create.component';

export const booksAdminRoutes: Routes = [
  { path: 'admin', redirectTo: 'admin/create' },
  { path: 'admin/create', component: BookCreateComponent }
];
