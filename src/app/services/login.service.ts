import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private AuthService: AuthService
  ) { }
    token =''

  auth(email: string, password: string){
    this.AuthService.login(email, password)
  .subscribe(rta =>{
    this.token = rta.access_token;
  })

  }
}
