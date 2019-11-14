import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/module/shared.module';
import { AuthRoutingModule } from './auth.routing';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
