import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css'],
})
export class AddQuizComponent implements OnInit {
  categories: any = null;
  quizData = {
    qid: '',
    qtitle: '',
    qdescription: '',
    max_marks: '',
    number_of_questions:'',
    active:false,
    category:{
      cat_id:null,
      cat_title:"",
      cat_description:''
    }
  };
  constructor(private categoryService: CategoryService,private quizService:QuizService) {}

  ngOnInit(): void {
    this.categoryService.categories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        Swal.fire('Unable to load data from server');
      }
    );
  }

  addQuiz(){
    if (this.quizData.qtitle == '' || this.quizData.qtitle == null) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Title cannot be empty!',
      });
      return;
    }

    if (
      this.quizData.qdescription == '' ||
      this.quizData.qdescription == null
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Description cannot be empty!',
      });
      return;
    }

    if (this.quizData.max_marks == '' || this.quizData.max_marks == null) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Maximum Marks cannot be empty!',
      });
      return;
    }
    if (
      this.quizData.number_of_questions == '' ||
      this.quizData.number_of_questions == null
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Number Of Questions cannot be empty!',
      });
      return;
    }
    if (this.quizData.category == null) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You Must Select Category!',
      });
      return;
    }

 this.quizService.addQuiz(this.quizData).subscribe(
      (data)=>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Quiz Added Successfully!',
          showConfirmButton: false,
          timer: 2500,
        });  

          this.quizData = {
            qid: '',
            qtitle: '',
            qdescription: '',
            max_marks: '',
            number_of_questions: '',
            active: false,
            category: {
              cat_id: null,
              cat_title: '',
              cat_description: '',
            },
          };
        console.log(data);
      },
      (error)=>{
        Swal.fire("Unable To Add Quiz");
        console.log(error);
      }
      )
    
  }

}
