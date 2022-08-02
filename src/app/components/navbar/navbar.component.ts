import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { AuthService } from 'src/app/services/auth.service';
import { FilesService } from 'src/app/services/files.service';





@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(
    private storeService: StoreService,
    private authService: AuthService,
    private fileService: FilesService
  ) { }

  showMenu = false;
  counter = 0;
  email = ''
  getProfile = this.authService.getProfile().subscribe(res=>{this.email = res.email})


  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products =>{
    this.counter = products.length;})
  }

  toggleMenu (){
    this.showMenu = !this.showMenu;
  }
  verPerfil(){
    this.authService.getProfile()
    .subscribe(res =>{
      this.email = res.email
    })
  }
  downloadPdf(){
    this.fileService.getFile('archivo.pdf', 'https://young-sands-07814.herokuapp.com/api/files/dummy.pdf', 'application/pdf')
    .subscribe()
  }
}
