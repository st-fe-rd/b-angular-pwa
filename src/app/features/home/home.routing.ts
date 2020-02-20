import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home.module').then(m => m.HomeModule)
  }
];
