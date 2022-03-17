import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product, createProductDTO, updatePrductDTO } from '../models/product.model';


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

  createProduct(){
    const prd: createProductDTO = {
      title:  'este es un prod nuevo',
      price: 500000,
      description: 'algo totalmente nuuevo',
      categoryId: '2',
      images: [`https://placeimg.com/640/480/any?random=${Math.random()}`]
    }
    return this.http.post<product>(this.apiURL, prd)
  }

  updateProduct(id: string){
    const modif: updatePrductDTO = {
      title: 'nuevo titulo cargado con put'
    }
    return this.http.put<product>(`${this.apiURL}/${id}`, modif)

  }

  delete(id: string){
    return this.http.delete<boolean>(`${this.apiURL}/${id}`)
  }

}
