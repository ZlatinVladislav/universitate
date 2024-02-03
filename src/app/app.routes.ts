import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'home1',
    loadComponent: () => import('./homecopy/home.page').then((m) => m.HomePage1),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
