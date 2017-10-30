import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

//Declare config routing
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: '', loadChildren: 'dashboard/dashboard.module#DashboardModule' },
  { path: 'main', loadChildren: 'main/main.module#LazyModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,{ useHash: true }),
    RouterModule.forChild(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouting {

}
