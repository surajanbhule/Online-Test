import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'user-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categories:any;
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {

    this.categoryService.categories().subscribe(
      (data)=>{
        this.categories=data;
      },
      (error)=>{
        Swal.fire("Server Down",error,'error');
      }
    )
  }

}
