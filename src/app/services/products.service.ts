import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiURL = 'https://young-sands-07814.herokuapp.com/api/products'

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(){
    return this.http.get<product[]>(this.apiURL)
  }

  getProduct(id: string){
    return this.http.get<product>(`${this.apiURL}/${id}`)
  }

}
