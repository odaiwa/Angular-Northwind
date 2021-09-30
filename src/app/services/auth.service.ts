import { AuthActionType } from './../redux/auth-state';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import store from '../redux/store';
import { CredentialsModel } from '../models/credentials.model';


// creation command ng g s services/auth

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public async register(user: UserModel): Promise<void> {
    const addedUser = await this.http.post<UserModel>(environment.registerUrl, user).toPromise();
    store.dispatch({ type: AuthActionType.UserRegistered, payload: addedUser });
  }


  public async login(user: CredentialsModel): Promise<void> {
    const loggedInUser = await this.http.post<UserModel>(environment.loginUrl, user).toPromise();
    store.dispatch({ type: AuthActionType.UserLoggedIn, payload: loggedInUser });
  }

  public logout():void{
    store.dispatch({type:AuthActionType.UserLoggedOut});
  }

}