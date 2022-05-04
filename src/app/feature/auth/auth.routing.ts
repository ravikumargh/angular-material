import { Routes } from '@angular/router';
import { LoginPageComponent } from './containers/login-page/login-page.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: LoginPageComponent,
            }, {
                path: 'home',
                component: LoginPageComponent,
            }
        ]
    }
];
