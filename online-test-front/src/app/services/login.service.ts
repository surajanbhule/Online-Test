import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public getCurrentUser(){
    return this.http.get(`${baseUrl}/current-user`);
  }

  public generateToken(loginData:any){
      return this.http.post(`${baseUrl}/generate-token`,loginData);

  }

  public loginUser(token:string){
    localStorage.setItem('userToken',token);
    console.log("Inside loginuser : "+token);
    return true;
  }

  public isLoggedIn(){
    let tokenStr=localStorage.getItem('userToken');
    if(tokenStr==undefined || tokenStr=='' || tokenStr==null){
      return false;
    }else{
      return true;
    }
    
  }

  public logout(){
    localStorage.removeItem('userToken');
    localStorage.removeItem('user');
    return true;
  }

  public getToken(){
    const tokenStr=localStorage.getItem('userToken');
    console.log("token :"+tokenStr);
    return tokenStr;

  }

  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));

  }

  public getUser(){
    let userStr=localStorage.getItem('user');
    if(userStr!=null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return false;
    }
  }

  public getUserRole(){
    let user= this.getUser();
    return user.authorities[0].authority;
  }
}
