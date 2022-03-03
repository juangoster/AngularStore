import { Component } from '@angular/core';
import { product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  padre = ''
  image = ''
  alert = ''

  onLoaded(img: string){
    this.alert="esto lo trae al padre"
    console.log(img)
  }

}

