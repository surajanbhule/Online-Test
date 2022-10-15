import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  qid:any=null;
  quizData:any=null
  categories:any;
  constructor(private route:ActivatedRoute,
    private quizService:QuizService,
    private categoryService:CategoryService,
    private router:Router) { }

  ngOnInit(): void {
    this.qid=this.route.snapshot.params['qid'];
    this.categoryService.categories().subscribe((data)=>this.categories=data);
    this.quizService.getQuiz(this.qid).subscribe(
      (data)=>{
        this.quizData=data;
      },
      (error)=>{
        alert("something went wrong");
      }
    )
  }

  updateQuiz(){
    this.quizService.updateQuiz(this.quizData).subscribe(
      (data)=>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Quiz updated successfully',
          showConfirmButton: false,
          timer: 2500,
        });
        this.router.navigate(['/admin/quizzes']);
      },
      (arror)=>{
           Swal.fire({
             position: 'top-end',
             icon: 'error',
             title: 'Unable to  update quiz',
             showConfirmButton: false,
             timer: 2500,
           });
           
      }
    )
  }
}
