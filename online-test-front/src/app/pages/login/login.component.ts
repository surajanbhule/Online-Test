import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData={
    username:'',
    password:''
  }
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  formSubmit(){
    this.loginService.generateToken(this.loginData).subscribe(
      (data)=>{
        console.log("Success");
        console.log(data);
      },
      (error)=>{
        console.log("error");
        console.log(error);
      }
    )
  }

  public loginUser(token:string){
    localStorage.setItem('userToken',token);
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
    return localStorage.getItem('userToken');
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
