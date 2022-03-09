import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { product } from 'src/app/models/product.model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

@Input() product: product = {
  id: '',
  title:  '',
  price: 0,
  category: '',
  description: '',
  image: ''

  }
@Output() addedProduct = new EventEmitter<product>();

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(){
    this.addedProduct.emit(this.product)
  }

}
