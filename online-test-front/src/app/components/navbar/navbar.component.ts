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
    this.isUserLoggedIn=loginService.isLoggedIn();
    this.currentUsername=loginService.getUser().username;
  }

  ngOnInit(): void {}

  public logout(){
    this.loginService.logout();
    location.reload();
  }
}
