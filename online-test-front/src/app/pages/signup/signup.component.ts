import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

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

  this.userService.addUser(this.user).subscribe(
    (data)=>{
      alert('Data Registered');
    },
    (error)=>{
      alert('Data Not Registered');
    }
    );
}

}
