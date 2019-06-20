import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CONFIG } from './config';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { AuthService } from "./auth/auth.service";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MapviewComponent } from './mapview/mapview.component';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './admin/verify-email/verify-email.component';

@NgModule({
  declarations: [
    AppComponent,
    MapviewComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(CONFIG.FIREBASE_CONFIG),
    AgmCoreModule.forRoot({
      apiKey: CONFIG.GOOGLE_API_KEY,
      libraries: ['places', 'geometry']
  }),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
