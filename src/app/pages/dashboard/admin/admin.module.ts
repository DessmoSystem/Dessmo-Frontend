import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminComponent } from './admin.component';

import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { RolComponent } from './rol/rol.component';
import { DataComponent } from './data/data.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardAdminComponent,
    RolComponent,
    DataComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
