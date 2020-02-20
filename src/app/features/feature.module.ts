import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { FeatureComponent } from './feature.component';
import { HeaderModule } from '../shared/layout/header/header.module';
import { SidebarModule } from '../shared/layout/sidebar/sidebar.module';
import { FooterModule } from '../shared/layout/footer/footer.module';
import { DialogModule } from '../shared/partial/dialog/dialog.module';
import { UsersService } from '../core/service/users/users.service';
import { SharedModule } from 'app/shared/module/shared.module';

import { homeRoutes } from './home/home.routing';
import { articleRoutes } from './article/article.routing';
const routes: Routes = [
  {
    path: '',
    component: FeatureComponent,
    children: [
      ...homeRoutes,
      ...articleRoutes
    ]
  }
];

@NgModule({
  imports: [
    HeaderModule,
    SidebarModule,
    FooterModule,
    DialogModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    FeatureComponent
  ],
  providers: [
    UsersService
  ]
})

export class FeatureModule { }
