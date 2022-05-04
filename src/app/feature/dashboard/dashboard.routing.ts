import { Routes } from '@angular/router';
import { DashboardPageComponent } from './containers/dashboard-page/dashboard-page.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: DashboardPageComponent,
            }, {
                path: 'home',
                component: DashboardPageComponent,
            }
        ]
    }
];
