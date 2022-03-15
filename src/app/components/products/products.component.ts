import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  totalShopping: number = 0;
  today = new Date();
  myShopingCart: product[] = [];
  productos: product[] = [];
  showProductDetail = false;
  oneProductToShow: product = {
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


  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShopingCart = this.storeService.shoppingCart
   }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(data=>{
     this.productos = data;
    })

  }

  addToShopingcart(product: product){
    this.storeService.shoppingCart.push(product);
    this.totalShopping = this.storeService.getTotalShopping();
  }

  toggleProduct(){
   this.showProductDetail=!this.showProductDetail
  }

  onShowDetail(id: string){
    this.productsService.getProduct(id)
    .subscribe(data=>{
      this.toggleProduct();
      this.oneProductToShow = data
    })
  }
}
