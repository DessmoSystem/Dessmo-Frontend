import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperadminRoutingModule } from './superadmin-routing.module';

import { SuperadminComponent } from './superadmin.component';
import { GenerateAdminComponent } from './generate-admin/generate-admin.component';



@NgModule({
  declarations: [
    SuperadminComponent,
    GenerateAdminComponent
  ],
  imports: [
    CommonModule,
    SuperadminRoutingModule
  ]
})
export class SuperadminModule { }
