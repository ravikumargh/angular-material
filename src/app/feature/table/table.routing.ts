import { Routes } from '@angular/router';
import { TablePageComponent } from './containers/table-page/table-page.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: TablePageComponent,
            }, {
                path: 'home',
                component: TablePageComponent,
            }
        ]
    }
];
