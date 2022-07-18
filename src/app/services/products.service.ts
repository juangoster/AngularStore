import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { product, createProductDTO, updatePrductDTO } from '../models/product.model';
import {retry, catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiURL = `${environment.API_URL}/api/products`;

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
      retry(3),
      map(products => products.map(item => {
        return{
          ...item,
          taxes: .19 * item.price
        }
      }))
    );
  }

  getProductsByPage(limit: number, offset: number){
    return this.http.get<product[]>(this.apiURL, {
      params: {limit, offset}
    })
  }

  getProduct(id: string){
    return this.http.get<product>(`${this.apiURL}/${id}`)
    .pipe(
      catchError((error: HttpErrorResponse)=>{
        if (error.status === HttpStatusCode.Conflict){
          return throwError('algo está mal en el server')
        }
        if (error.status === HttpStatusCode.NotFound){
          return throwError('el producto no existe')
        }
        if (error.status === HttpStatusCode.Unauthorized){
          return throwError('no estas autorizado')
        }
        return throwError('algo salió mal')
      })
    )
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

