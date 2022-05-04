import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './component/layout/layout.component';
import { HeaderModule } from './header/header.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarComponent } from './component/sidebar/sidebar.component';



@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule,
    MatSidenavModule
  ],
  exports: [
    LayoutComponent,
    HeaderModule
  ]
})
export class SharedModule { }
