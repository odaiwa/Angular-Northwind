import { NotifyService } from './../../../services/notify.service';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { CredentialsModel } from 'src/app/models/credentials.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private myAuthService: AuthService, private myRouter:Router,private notify:NotifyService) { }
  public credentials = new CredentialsModel();


  public async login(){
    try {
      await this.myAuthService.login(this.credentials);
      this.notify.success("you are logged in...");
      this.myRouter.navigateByUrl("home");
    } catch (err) {
      this.notify.error(err);
    }
  }

}
