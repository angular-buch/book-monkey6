import { Routes } from '@angular/router';

import { BookCreateComponent } from './book-create/book-create.component';

export const booksAdminRoutes: Routes = [
  { path: '', redirectTo: 'create', pathMatch: 'full' },
  { path: 'create', component: BookCreateComponent, title: 'Create Book' }
];
