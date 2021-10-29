import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SuperadminComponent } from './superadmin.component';
import { GenerateAdminComponent } from './generate-admin/generate-admin.component';


const routesSuperAdmin : Routes = [
  {
    path: 'superadmin', component: SuperadminComponent,
    children: [
      { path: '', redirectTo: 'generate-user', pathMatch: 'full' },  
      { path: 'generate-user', component: GenerateAdminComponent}, 
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routesSuperAdmin)
  ],
  exports: [RouterModule]
})
export class SuperadminRoutingModule { }
