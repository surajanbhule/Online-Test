import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css'],
})
export class ViewQuizzesComponent implements OnInit {
  quizzes: any = null;
  constructor(private quizServices:QuizService) {}

  ngOnInit(): void {
    this.quizServices.quizzes().subscribe(
      (data:any)=>{
        this.quizzes=data;
      },
      (error)=>{
        Swal.fire("Unable To Load Data");
      }
    )
  }

  deleteQuiz(qid:any){
   
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  }).then((result) => {
    if (result.isConfirmed) {

      //delete code
       this.quizServices.deleteQuiz(qid).subscribe(
         (data) => {
          this.quizzes = this.quizzes.filter((quiz: any) => quiz.qid != qid);
           Swal.fire({
             position: 'top-end',
             icon: 'success',
             title: 'Quiz Deleted Successfully',
             showConfirmButton: false,
             timer: 2500,
           });
           
         },
         (error) => {
           Swal.fire('Unable To Delete Quiz');
         }
       );

    }
  });

   
  }
}
