import { Routes } from '@angular/router';

export const articleListRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./article-list.module').then(m => m.ArticleListModule)
  }
];
