import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginData = {
    username: '',
    password: '',
  };
  
  constructor(private loginService: LoginService,private router:Router) {
    
  }

  ngOnInit(): void {}

  formSubmit() {

    if(this.loginData.username==null||this.loginData.username==''){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Username cannot be empty!',
      });
      return;
    }

     if (this.loginData.password == null || this.loginData.password == '') {
       Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: 'Password cannot be empty!',
       });
       return;
     }


    this.loginService.generateToken(this.loginData).subscribe(
      (data: any) => {
        console.log('Success');
        console.log(data);
        console.log('before login...');
        this.loginService.loginUser(data.token);

        this.loginService.getCurrentUser().subscribe(
          (user: any) => {
            console.log('before login...');
            console.log(user);
            this.loginService.setUser(user);
            console.log('User Login Successfully :' + user);

            //redirect to admin panel

            //redirect to normal dashboard
            if (this.loginService.getUserRole() == 'ADMIN') {
              this.router.navigate(['admin']);
              this.loginService.logiStatusSubject.next(true);
            } else if (this.loginService.getUserRole() == 'NORMAL') {
               this.router.navigate(['user-dashboard']);
               this.loginService.logiStatusSubject.next(true);
            } else {
              this.loginService.logout();
              //location.reload();
            }
          },
          (error) => {
            console.log('error');
            console.log(error);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              
            });
          }
        );
      },
      (error) => {
        console.log('error');
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Invalid Details, Try again!',
        });
      }
    );
  }
}
