import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './containers/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { EmailComponent } from './component/email/email.component';
import { UserComponent } from './component/user/user.component';
import { SearchComponent } from './component/search/search.component';
import { NotificationsComponent } from './component/notifications/notifications.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NotificationsComponent,
    EmailComponent,
    UserComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatBadgeModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
