import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { ButtonsModule } from '../buttons/buttons.module';



@NgModule({
  declarations: [PageLayoutComponent],
  imports: [
    CommonModule,
    ButtonsModule
  ],
  exports: [PageLayoutComponent]
})
export class PageLayoutModule { }
