import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AddToHomescreenComponent } from './add-to-homescreen.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
  ],
  declarations: [AddToHomescreenComponent],
  exports: [AddToHomescreenComponent],
  entryComponents: [
    AddToHomescreenComponent
  ]
})
export class AddToHomescreenModule { }
