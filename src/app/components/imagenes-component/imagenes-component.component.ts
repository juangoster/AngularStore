import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/models/product.model';

@Component({
  selector: 'app-imagenes-component',
  templateUrl: './imagenes-component.component.html',
  styleUrls: ['./imagenes-component.component.scss']
})
export class ImagenesComponentComponent implements OnInit {

  imagewidth = '100'

  products: product [] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}