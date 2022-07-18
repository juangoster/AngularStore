import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { auth } from '../models/auth.model';
import { user } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiURL = `${environment.API_URL}/api/auth`;

  constructor(
    private http: HttpClient
  ) { }

  login (email: string, password: string){
    return this.http.post<auth>(`${this.apiURL}/login`, {email, password});
  }

  getProfile(token: string){
    return this.http.get<user>(`${this.apiURL}/profile`, {
      headers: { //así se envian los headers    el bearer debe tener un espacio despues de la palabra bearer
        Authorization: `Bearer ${token}`
      }
    })
  }

}
