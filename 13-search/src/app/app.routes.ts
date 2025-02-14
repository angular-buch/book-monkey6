import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { booksPortalRoutes } from './books-portal/books-portal.routes';
import { booksAdminRoutes } from './books-admin/books-admin.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  ...booksPortalRoutes,
  ...booksAdminRoutes
];
