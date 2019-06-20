/// <reference types="@types/googlemaps" />

import { Component, OnInit, ViewChild, ElementRef, NgZone, OnDestroy, Output, Input, EventEmitter } from '@angular/core';
import { AuthService } from "./auth/auth.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private auth: AuthService){}

  SignOut(){
    this.auth.SignOut();
  }

  isAuth() {
    this.auth.isAuthenticated();
  }
}
