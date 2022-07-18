import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { createUserDTO, user } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  private apiURL = `${environment.API_URL}/api/users`;

  constructor(
    private http: HttpClient
  ) { }

  create (dto: createUserDTO){
    return this.http.post<user>(this.apiURL, dto);
  }

  getAll(){
    return this.http.get<user>(this.apiURL);
  }


}
