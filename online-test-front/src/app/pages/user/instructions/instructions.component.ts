import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private route:ActivatedRoute,private quizService:QuizService,private router:Router) { }

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

  startQuiz(){
    Swal.fire({
      title: 'Do you want to start quiz ?',
      showCancelButton: true,
      confirmButtonText: 'Start',
      
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        
        this.router.navigate(['/start/'+this.qid])
      } 
    });
  }

}
