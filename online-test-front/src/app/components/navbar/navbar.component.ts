import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'online-test-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public isUserLoggedIn = false;
  public currentUsername='';
  constructor(private loginService:LoginService) {
   
  }

  ngOnInit(): void {
     this.isUserLoggedIn = this.loginService.isLoggedIn();
     this.currentUsername = this.loginService.getUser().username;
     this.loginService.logiStatusSubject.asObservable().subscribe((data)=>{
       this.isUserLoggedIn = this.loginService.isLoggedIn();
       this.currentUsername = this.loginService.getUser().username;
     })

  }

  public logout(){
    this.loginService.logout();
    location.reload();
  }
}
