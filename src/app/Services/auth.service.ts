import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

const AUTH_API = 'http://localhost:9000/user/login/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getAuthorizationToken() {
    const token = window.localStorage.getItem('token');
    if (token) {
      return token;
    }
    return '';
  }
  
  login(user: User): Observable<any>{
    // console.log(AUTH_API + "signin");
    return this.http.post(AUTH_API,user,{
      responseType: 'text'
    })
  }
}
