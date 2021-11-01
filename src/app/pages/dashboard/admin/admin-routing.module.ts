import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';

import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { RolComponent } from './rol/rol.component';
import { DataComponent } from './data/data.component';

const routesAdmin : Routes = [
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardAdminComponent}, 
      { path: 'roles', component: RolComponent}, 
      { path: 'data', component: DataComponent}, 
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routesAdmin)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
