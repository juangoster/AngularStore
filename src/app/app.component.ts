import { Component } from '@angular/core';
import { product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  productos: product[] = [
    {
      ID: '001',
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
    },
    {
      ID: '002',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      ID: '003',
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      ID: '004',
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      ID: '005',
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      ID: '006',
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ];

  padre = ''
  image = ''
  alert = ''

  onLoaded(img: string){
    this.alert="esto lo trae al padre"
    console.log(img)
  }

}

