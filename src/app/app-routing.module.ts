import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Index
import { IndexComponent } from './pages/index/index.component';

//Signin
import { SigninSuperadminComponent } from './pages/sign-in/signin-superadmin/signin-superadmin.component';
import { SigninAdminComponent } from './pages/sign-in/signin-admin/signin-admin.component';
import { SigninUserComponent } from './pages/sign-in/signin-user/signin-user.component';
//Signup
import { SignupAdminComponent } from './pages/sign-up/signup-admin/signup-admin.component';
import { SignupUserComponent } from './pages/sign-up/signup-user/signup-user.component';
import { SignupUserVerifyComponent } from './pages/sign-up/signup-user/signup-user-verify/signup-user-verify.component';
//Restore Password
import { PasswordComponent } from './pages/password/password.component';
import { RestorePasswordComponent } from './pages/password/restore-password/restore-password.component'; 
import { Error403Component } from './pages/error403/error403.component';


const routes: Routes = [

  //Index//
  { path: 'index', component: IndexComponent, data: { title: 'Index – Dessmo' } },
  { path: '', component: IndexComponent, data: { title: 'Index – Dessmo' } },
  
  //Signin//
  { path: 'signin/superadmin', component: SigninSuperadminComponent, data: { title: 'Iniciar Sesión SuperAdmin – Dessmo' } },
  { path: 'signin/administrador', component: SigninAdminComponent, data: { title: 'Iniciar Sesión Administrador – Dessmo' } },
  { path: 'signin/user', component: SigninUserComponent, data: { title: 'Iniciar Sesión User – Dessmo' } },

  //Signup 
  { path: 'signup/admin/:token', component: SignupAdminComponent, data: { title: 'Resgistro Administrador – Dessmo' } },
  { path: 'signup/user', component: SignupUserComponent, data: { title: 'Resgistro User – Dessmo' } },
  { path: 'signup/usuario/verify', component: SignupUserVerifyComponent, data: { title: 'Verificar Registro Usuario – Dessmo' } },

  //Restore Password
  { path: 'restore/password', component: PasswordComponent, data: { title: 'Solicitar Cambio de Contraseña – Dessmo' } },
  { path: 'restore/password/:token', component: RestorePasswordComponent, data: { title: 'Cambiar Contraseña – Dessmo' } },

  
  //Dashboard
  {
    path: ' ',
    loadChildren: () => import ('./pages/dashboard/superadmin/superadmin.module').then(module =>module.SuperadminModule)
  },
  {
    path: ' ',
    loadChildren: () => import ('./pages/dashboard/admin/admin.module').then(module =>module.AdminModule)
  },
  {
    path: ' ',
    loadChildren: () => import ('./pages/dashboard/user/user.module').then(module =>module.UserModule)
  },

  //Error 403
  { path: 'error/403', component: Error403Component, data: { title: 'Ocurrió un error – Dessmo' } },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
