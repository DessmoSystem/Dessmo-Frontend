import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { authInterceptorProviders } from './util/auth.interceptor';
import { environment } from '../environments/environment';


import { SignInModule } from './pages/sign-in/sign-in.module';
import { SignUpModule } from './pages/sign-up/sign-up.module';

import { SuperadminModule } from './pages/dashboard/superadmin/superadmin.module';
import { AdminModule } from './pages/dashboard/admin/admin.module';
import { UserModule } from './pages/dashboard/user/user.module';
import { PasswordModule } from './pages/password/password.module';

import { ReactiveFormsModule } from '@angular/forms';
import { IndexModule } from './pages/index/index.module';
import { Error403Module } from './pages/error403/error403.module';


@NgModule({
  declarations: [
    AppComponent,   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    
    IndexModule,
    Error403Module,
    SignInModule,
    SignUpModule,
    SuperadminModule,
    AdminModule,
    UserModule,
    PasswordModule
   
 
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
