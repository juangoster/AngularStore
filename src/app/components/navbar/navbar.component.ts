import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(
    private storeService: StoreService,
    private userService: UsersService,
    private authService: AuthService
  ) { }

  showMenu = false;
  counter = 0;
  perfil  = new LoginComponent(this.authService,this.userService)
  email= this.perfil.register.email

  ngOnInit(): void {
  }

  ngOnChange(){
    this.storeService.myCart$.subscribe(products =>{
      this.counter = products.length;
    })

    console.log(this.email)

  }

  toggleMenu (){
    this.showMenu = !this.showMenu;
  }

}
