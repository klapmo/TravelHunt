import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }
  
  keypress(event, userName, userPassword){
    if (event.keyCode == 13){
      this.authService.SignIn(userName, userPassword)
    }
  }

}
