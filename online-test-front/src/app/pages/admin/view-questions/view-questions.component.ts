import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent implements OnInit {

  qid:any;
  qtitle:any;
  questions:any=null;

  constructor(
    private route:ActivatedRoute,
    private questinService:QuestionService
    ) { }

  ngOnInit(): void {
    this.qid= this.route.snapshot.params['qid'];
    this.qtitle = this.route.snapshot.params['qtitle'];

    this.questinService.getQuestion(this.qid).subscribe(
      (data)=>{
        this.questions=data;
      },
      (error)=>{
        Swal.fire('Server Down?', 'Questions unable to load?', 'question');
      }
    )
  }

}
