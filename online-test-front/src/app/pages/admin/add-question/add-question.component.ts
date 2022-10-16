import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css'],
})
export class AddQuestionComponent implements OnInit {
  qid: any;
  qtitle:any;
  question: any = {
    quiz: {
    
    },
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
    image: 'default.png',
  };

  constructor(private route: ActivatedRoute,private questionService:QuestionService) {}

  ngOnInit(): void {
    this.qid = this.route.snapshot.params['qid'];
    this.qtitle = this.route.snapshot.params['qtitle'];
    this.question.quiz['qid']= this.qid;
    
  }

  addQuestion(){
    if(this.question.content==''){
      Swal.fire('Content cannot be empty','OOPs!','error');
      return;
    }

     if (this.question.option1 == '') {
       Swal.fire('Option1 cannot be empty', 'OOPs!', 'error');
       return;
     }

      if (this.question.option2 == '') {
        Swal.fire('Option3 cannot be empty', 'OOPs!', 'error');
        return;
      }

       if (this.question.option3 == '') {
         Swal.fire('Option3 cannot be empty', 'OOPs!', 'error');
         return;
       }

        if (this.question.option4 == '') {
          Swal.fire('Option4 cannot be empty', 'OOPs!', 'error');
          return;
        }

         if (this.question.answer == '' || this.question.answer == null) {
           Swal.fire('You must select answer', 'OOPs!', 'error');
           return;
         }

         this.questionService.addQuestion(this.question).subscribe(
          (data)=>{
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Question Added Successfully',
              showConfirmButton: false,
              timer: 2500,
            });

            this.question = {
              quiz: {},
              content: '',
              option1: '',
              option2: '',
              option3: '',
              option4: '',
              answer: '',
              image: 'default.png',
            };
          },
          (error)=>{
            Swal.fire('Server Down!', 'Unable To Load Data', 'info');
          }
         )
  }
}
