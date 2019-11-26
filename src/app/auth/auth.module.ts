import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/module/shared.module';
import { authRoutes } from './auth.routing';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(authRoutes)
  ]
})
export class AuthModule { }
