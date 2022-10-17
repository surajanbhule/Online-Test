import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {

  cat_id:any;
  quizzes:any;
  constructor(private route:ActivatedRoute,private quizService:QuizService) { }

  ngOnInit(): void {
    

    this.route.params.subscribe(
      (params)=>{
        this.cat_id = params['cat_id'];
        console.log("current value"+this.cat_id);

        if (this.cat_id == 0) {
          this.quizService.quizzes().subscribe(
            (data) => {
              this.quizzes = data;
            },
            (error) => {
              Swal.fire('Server Down', 'Unable To Load Data', 'question');
            }
          );
        }
        else {
          this.quizService.quizzesByCategory(this.cat_id).subscribe(
            (data)=>{
              this.quizzes=data;
            },
            (error)=>{
              Swal.fire('Server Down', 'Unable To Load Data', 'question');
            }
          )
        }
      }
    )
  }

}
