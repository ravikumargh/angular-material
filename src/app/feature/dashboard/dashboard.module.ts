import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './containers/dashboard-page/dashboard-page.component';
import { RouterModule } from '@angular/router';
import { routes } from './dashboard.routing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    DashboardPageComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
