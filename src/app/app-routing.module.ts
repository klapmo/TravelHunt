import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapviewComponent } from './mapview/mapview.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from  './admin/login/login.component';
import { RegisterComponent } from  './admin/register/register.component';
import { ForgotPasswordComponent } from  './admin/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from  './admin/verify-email/verify-email.component';

const routes: Routes = [
  { path: '', component: MapviewComponent },
  { path:'login',component: LoginComponent},
  { path: 'register-user', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent }
];



@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule {}
