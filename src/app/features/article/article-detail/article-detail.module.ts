import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDetailComponent } from './article-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ArticleDetailComponent
  }
];

@NgModule({
  declarations: [ArticleDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ArticleDetailModule { }
