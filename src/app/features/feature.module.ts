import { NgModule } from '@angular/core';
import { FeatureComponent } from './feature.component';
import { CoreModule } from '../core/module/core.module';
import { HeaderModule } from '../shared/layout/header/header.module';
import { SidebarModule } from '../shared/layout/sidebar/sidebar.module';
import { FooterModule } from '../shared/layout/footer/footer.module';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';
import { DialogModule } from '../shared/partial/dialog/dialog.module';
import { UsersService } from '../core/service/users/users.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'app/shared/module/shared.module';


@NgModule({
  imports: [
    CoreModule,
    RouterModule,
    HeaderModule,
    SidebarModule,
    FooterModule,
    DialogModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FeatureComponent
  ],
  providers: [
    UsersService
  ]
})

export class FeatureModule { }
