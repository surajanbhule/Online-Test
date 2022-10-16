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

  deleteQuestion(question_id:any){

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
        
        this.questinService.deleteQuestion(question_id).subscribe(
          (data)=>{
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Question Deleted Successfully!',
              showConfirmButton: false,
              timer: 2500,
            });
            this.questions=this.questions.filter((question:any)=> question.que_id!=question_id);
          },
          (error)=>{
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Unable to delete question this time',
              showConfirmButton: false,
              timer: 2500,
            });
          }
        )


      }
    });

  }

}
