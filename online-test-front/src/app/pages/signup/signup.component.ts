import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {

  constructor(private userService:UserService){}

  public user={
    username:'',
    password:'',
    first_name:'',
    last_name:'',
    phone:'',
    email:'',
  }

registerUser(){

  if(this.user.username===null|| this.user.password===null){

    Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Username Or Password Cant Be Open!',
  
})

  }else{

    this.userService.addUser(this.user).subscribe(
    (data)=>{
      Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'User Registration Succeed !',
  showConfirmButton: false,
  timer: 1500
})
    },
    (error)=>{
      Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Something went wrong!',
  
})
    }
    );

  }
  
}

}
