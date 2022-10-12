import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public generateToken(loginData:any){
      return this.http.post(`${baseUrl}/generate-token`,loginData);

  }
}
