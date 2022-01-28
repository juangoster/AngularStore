import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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


}

