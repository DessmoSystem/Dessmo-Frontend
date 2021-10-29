import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';

import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';


const routesUser : Routes = [
  {
    path: 'user', component: UserComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },  
      { path: 'dashboard', component: DashboardUserComponent}, 
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routesUser)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
