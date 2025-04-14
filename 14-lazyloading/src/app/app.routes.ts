import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    title: 'BookMonkey',
    loadComponent: () => import('./home-page/home-page')
      .then(m => m.HomePage)
  },
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
