import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/models/product.model';

@Component({
  selector: 'app-imagenes-component',
  templateUrl: './imagenes-component.component.html',
  styleUrls: ['./imagenes-component.component.scss']
})
export class ImagenesComponentComponent implements OnInit {

  imagewidth = '100'

  products: product [] = []


  constructor() { }

  ngOnInit(): void {
  }

}
