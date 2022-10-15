import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

  categories:any=null;
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
      this.categoryService.categories().subscribe(
        (data:any)=>{
          this.categories=data;
        },
        (error)=>{
          console.log("data loading error :"+error);
        }
      )
  }

}
