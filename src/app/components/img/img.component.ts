import { Component, Input, OnInit } from '@angular/core';
import { product } from 'src/app/models/product.model';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() imagen: product ={
    id: '',
    title:  '',
    price: 0,
    category: '',
    description: '',
    image: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
