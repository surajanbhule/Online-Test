import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  qid:any;
  quiz:any;

  constructor(private route:ActivatedRoute,private quizService:QuizService) { }

  ngOnInit(): void {
    this.qid= this.route.snapshot.params['qid'];

    this.quizService.getQuiz(this.qid).subscribe(
      (data)=>{
        this.quiz=data;
      },
      (error)=>{
        Swal.fire('Server Down','Unable Load Quiz Data','question');
      }
    )
  }

}
