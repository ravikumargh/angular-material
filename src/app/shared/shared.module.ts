import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './component/layout/layout.component';
import { HeaderComponent } from './component/header/header.component';
import { HeaderModule } from './header/header.module';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule
  ],
  exports: [
    LayoutComponent,
    HeaderModule
  ]
})
export class SharedModule { }
