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
  category: {
    id: '',
    name: '',
    typeImg: ''
  },
  description: '',
  images: []
  };

@Output() addedProduct = new EventEmitter<product>();
@Output() showProduct = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(){
    this.addedProduct.emit(this.product)
  }

  showProductDetail(){
    this.showProduct.emit(this.product.id)
  }

}
