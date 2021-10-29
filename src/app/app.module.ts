import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SignInModule } from './pages/sign-in/sign-in.module';
import { SignUpModule } from './pages/sign-up/sign-up.module';

import { SuperadminModule } from './pages/dashboard/superadmin/superadmin.module';
import { AdminModule } from './pages/dashboard/admin/admin.module';
import { UserModule } from './pages/dashboard/user/user.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignInModule,
    SignUpModule,
    SuperadminModule,
    AdminModule,
    UserModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
