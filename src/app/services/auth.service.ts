import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { auth } from '../models/auth.model';
import { user } from '../models/users.model';
import { TokenService } from './token.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiURL = `${environment.API_URL}/api/auth`;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  login (email: string, password: string){
    return this.http.post<auth>(`${this.apiURL}/login`, {email, password})
    .pipe(
      tap( response => this.tokenService.saveToken(response.access_token)) //guarda la respuesta del login que es el token en el localstorage con el token service
    )
  }

  getProfile(){
    return this.http.get<user>(`${this.apiURL}/profile`, {
   /*   headers: { //así se envian los headers    el bearer debe tener un espacio despues de la palabra bearer
        Authorization: `Bearer ${token}`
      }*/
    })
  }

}
