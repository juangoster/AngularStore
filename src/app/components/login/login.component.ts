import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

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
    private UserService: UsersService
  ) { }

  ngOnInit(): void {
  }

  createUser(){
    this.UserService.create(this.register)
    .subscribe(rta =>{
      console.log(rta)
    })
  }

  auth(){
    this.AuthService.login(this.register.email, this.register.password)
  .subscribe(rta =>{
    this.token = rta.access_token
    console.log(this.token)
  })
  }

  getProfile(){
    this.AuthService.getProfile(this.token)
    .subscribe(prof => {
      console.log(prof)
    })
  }

}
