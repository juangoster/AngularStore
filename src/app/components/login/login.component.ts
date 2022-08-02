import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  token = ''

  register = {
    email: '',
    password: '',
    name: ''
  }

  onRegister(){
    console.log(this.register)
  }

  constructor(
    private AuthService: AuthService,
    private UserService: UsersService,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  createUser(){
    this.UserService.create(this.register)
    .subscribe(rta =>{
      console.log(rta)
    })
  }
/*
  auth(){
    this.AuthService.login(this.register.email, this.register.password)
  .subscribe(rta =>{
    this.token = rta.access_token
    console.log(this.token)
  })
  }
*/
auth(){
  this.loginService.auth(this.register.email, this.register.password)
  this.token = this.loginService.token
  console.log(this.token)
}
  getProfile(){
    this.AuthService.getProfile()
    .subscribe(prof => {
      console.log(prof)
    })
  }

}
