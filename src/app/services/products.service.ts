import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { product, createProductDTO, updatePrductDTO } from '../models/product.model';
import {retry} from 'rxjs/operators'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiURL = environment.API_URL

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(limit?: number, offset?: number){
    let params = new HttpParams;
    if (limit && offset){
      params.set('limit', limit);
      params.set('offset', offset);
    }
    return this.http.get<product[]>(this.apiURL, {params})
    .pipe(
      retry(3)
    );
  }

  getProductsByPage(limit: number, offset: number){
    return this.http.get<product[]>(this.apiURL, {
      params: {limit, offset}
    })
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
