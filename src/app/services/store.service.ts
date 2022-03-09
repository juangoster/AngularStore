import { Injectable } from '@angular/core';
import { product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  totalPrice: number = 0;
  shoppingCart: product[] =[]
  private myCart = new BehaviorSubject<product[]>([]);
  myCart$ = this.myCart.asObservable();

  constructor() { }

  addShoppingCart(product: product){
    this.shoppingCart.push(product);
    //this.totalPrice += product.price;
    this.myCart.next(this.shoppingCart);
    }

  getTotalShopping(){
    return this.totalPrice = this.shoppingCart.reduce((sum, item)=> sum + item.price, 0); //este metodo de los array lo que hace es devolver la sumatoria de los price en el array
  }


}

