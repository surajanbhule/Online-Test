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
}
