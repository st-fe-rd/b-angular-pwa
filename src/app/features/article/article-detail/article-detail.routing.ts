import { Routes } from '@angular/router';

export const articleDetailRoutes: Routes = [
  {
    path: ':id',
    loadChildren: () => import('./article-detail.module').then(m => m.ArticleDetailModule)
  }
];
