import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { Products } from '../model/Products.model';

const AUTH_API = 'http://localhost:9000/foods/';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  public findAll(page: number,keyWord:string): Observable<any> {
    console.log(AUTH_API + "?page="+page+"&keyWord="+keyWord);
    return this.http.get<any>(AUTH_API + "?page="+page+"&keyWord="+keyWord )
  }
  public getAllProduct(): Observable<any>{
    // console.log(AUTH_API);
    return this.http.get<any>(AUTH_API)
  }
  public getProductById(id: string): Observable<any> {
    console.log(AUTH_API + id);
    return this.http.get<any>(AUTH_API + id);
  }
}


