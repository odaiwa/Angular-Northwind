import { NotifyService } from './../../../services/notify.service';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private myAuthService: AuthService,private myRouter:Router,private notify:NotifyService) { }

  ngOnInit(): void {
  }
  public user = new UserModel();


  public async register() {
    try {
      await this.myAuthService.register(this.user);
      this.notify.success("you are registered...");
      this.myRouter.navigateByUrl("home");
    } catch (err) {
      this.notify.error(err);
    }
  }

}
