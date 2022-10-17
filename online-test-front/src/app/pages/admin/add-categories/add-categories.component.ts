import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css'],
})
export class AddCategoriesComponent implements OnInit {
  categories = {
    cat_title: '',
    cat_description: '',
  };

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {}

  formSubmit() {
    if (this.categories.cat_title == '' || this.categories.cat_title == null) {
      Swal.fire('Title Cannot Be Empty');
      return;
    }

    if (
      this.categories.cat_description == '' ||
      this.categories.cat_description == null
    ) {
      Swal.fire('Description Cannot Be Empty');
      return;
    }

    this.categoryService.addCategory(this.categories).subscribe(
      (data) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Category Added Successfully',
          showConfirmButton: false,
          timer: 2500,
        });

        this.categories = {
          cat_title: '',
          cat_description: '',
        };
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      }
    );
  }
}
