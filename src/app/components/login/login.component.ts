import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  register ={
    nombre: '',
    email: '',
    password: ''
  }

  person =
    {
      name: '',
      lastName: '',
      age: ''
    }


  onRegister(){
    console.log(this.register)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
