import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePageComponent } from './containers/table-page/table-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { routes } from './table.routing';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    TablePageComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    RouterModule.forChild(routes)
  ]
})
export class TableModule { }
