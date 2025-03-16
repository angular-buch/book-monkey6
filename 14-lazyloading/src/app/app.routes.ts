import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'BookMonkey'  },
  {
    path: 'books',
    loadChildren: () => import('./books-portal/books-portal.routes')
      .then(m => m.booksPortalRoutes)
  },
  {
    path: 'admin',
    loadChildren: () => import('./books-admin/books-admin.routes')
      .then(m => m.booksAdminRoutes)
  }
];
