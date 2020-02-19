import { Routes } from '@angular/router';

import { articleListRoutes } from './article-list/article-list.routing';
import { articleDetailRoutes } from './article-detail/article-detail.routing';
export const articleRoutes: Routes = [
  {
    path: 'articles',
    children: [
      ...articleListRoutes,
      ...articleDetailRoutes
    ]
  }
];
