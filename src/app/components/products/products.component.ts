import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';
import { switchMap } from 'rxjs';
import { zip } from 'rxjs';



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

  limit = 10;
  offset = 0;
  statusDetail: 'Loading' | 'success' | 'error' | 'init' = 'init';


  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShopingCart = this.storeService.shoppingCart
   }

  ngOnInit(): void {
    this.productsService.getAllProducts(this.limit, this.offset)
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
    this.statusDetail='Loading'
    this.productsService.getProduct(id)
    .subscribe(data=>{
      this.toggleProduct();
      this.oneProductToShow = data;
      this.statusDetail='success'
    }, alertError=>{
      window.alert(alertError);
      this.statusDetail='error'
    })
  }

  createNewProduct(){
    this.productsService.createProduct()
    .subscribe(data=>{
      this.productos.unshift(data);
    })
  }

  updateCurrentProduct(){
    this.productsService.updateProduct(this.oneProductToShow.id)
    .subscribe(data=>{

      const productIndex = this.productos.findIndex(item => item.id === this.oneProductToShow.id)
      this.productos[productIndex] = data;
    })
  }

  deleteCurrentProduct(){
    this.productsService.delete(this.oneProductToShow.id)
    .subscribe(()=>{
      const productIndex = this.productos.findIndex(item => item.id === this.oneProductToShow.id)
      this.productos.splice(productIndex, 1)
      this.toggleProduct()
    })
  }


  loadNext(){
    this.offset += this.limit;
    this.productsService.getAllProducts(this.limit, this.offset)
    .subscribe(data=>{
      this.productos = data;

    })
  }

  LoadPrevious(){
    if (this.offset != 0){
      this.offset -= this.limit;
      this.productsService.getProductsByPage(this.limit, this.offset)
      .subscribe(data=>{
       this.productos = data;
      })
   }
  }

  getRandomInt = (min: number, max: number) => {
    const array_number: any = new Uint32Array(1);
    window.crypto.getRandomValues(array_number);
    const randomDecimal = array_number[0] / (0xffffffff + 1);
    let random_number = Math.floor(randomDecimal * (max - min + 1)) + min;
    if (random_number < 0) {
        random_number *= -1;
    }
    return random_number;
  };

  //para evitar el callback hell
  readAndUpdate(id: string){
    //se puede hacer que una cosa dependa de la otra o las 2 a la vez
    //con dependencia y en orden se usa switchmap
    this.productsService.getProduct(id)
    .pipe(
      switchMap((product) => this.productsService.updateProduct(product.id))
    )
    .subscribe(data => {
      console.log(data)
    });
    //cuando se necesitan las dos respuestas al mismo tiempo se usa zip
    zip(
      this.productsService.getProduct(id),
      this.productsService.updateProduct(id)
    )
    .subscribe(response => {
      const read = response[0]
      const update = response[1]
    })
  }

}
