import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './feature/auth/guard/auth.guard';
import { DashboardPageComponent } from './feature/dashboard/containers/dashboard-page/dashboard-page.component';
import { LayoutComponent } from './shared/component/layout/layout.component';

// const routes: Routes = [
//   {
//     path: 'dashboard',
//     pathMatch: 'full',
//     canActivate: [AuthGuard],
//     component: DashboardPageComponent
//   },
// ];

export const AppRoutes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "", redirectTo: "/dashboard", pathMatch: "full" },
      {
        path: "dashboard",
        loadChildren: () =>
          import("./feature/dashboard/dashboard.module").then(
            (m) => m.DashboardModule
          ),
      }
       
    ],
  },
  {
    path: 'login',
    loadChildren: () => import('./feature/auth/auth.module').then(m => m.AuthModule)
  }
  // {
  //   path: "",
  //   component: BlankComponent,
  //   children: [
  //     {
  //       path: "authentication",
  //       loadChildren: () =>
  //         import("./authentication/authentication.module").then(
  //           (m) => m.AuthenticationModule
  //         ),
  //     }
  //   ],
  // }
];


@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
