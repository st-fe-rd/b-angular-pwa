import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list.component';

const routes: Routes = [
  {
    path: '',
    component: ArticleListComponent
  }
];

@NgModule({
  declarations: [ArticleListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ArticleListModule { }
