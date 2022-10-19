import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start-test',
  templateUrl: './start-test.component.html',
  styleUrls: ['./start-test.component.css']
})
export class StartTestComponent implements OnInit {

  quiz:any;
  questions:any;
  qid:any;
  marksGot=0;
  attemted=0;
  correctAnswers=0;
  marksEach=0;
  isSubmit=false;
  timer:any;
  constructor(private locationSt:LocationStrategy, 
              private route:ActivatedRoute,
              private questionService:QuestionService,
              private quizService:QuizService) { }

  ngOnInit(): void {
    this.preventBackButton();

    this.qid= this.route.snapshot.params['qid'];

    this.questionService.getQuestionsByQuiz(this.qid).subscribe(
      (data)=>{
        this.questions = data;
        this.timer=this.questions.length * 30;
        this.questions.forEach((q:any) => {
          q['givenAnswers']='';
          console.log(this.questions);
          this.startTimer();
        });
      },
      (error)=>{
        Swal.fire('Server Down','Unable to load questions data','question');
      }
    );

    this.quizService.getQuiz(this.qid).subscribe(
      (data)=>{
        this.quiz=data;
        this.marksEach = this.quiz.max_marks / this.quiz.number_of_questions;
      },
      (error)=>{
         Swal.fire('Server Down', 'Unable to load quiz data', 'question');
      }
    )
  }

  preventBackButton(){
    history.pushState(null, '' ,location.href)
    this.locationSt.onPopState(
      ()=>{
        history.pushState(null,'',location.href);
      }
    );
  }

  submitQuiz(){
    

          
    
    Swal.fire({
      title: 'Do you want to submit quiz?',
      
      showCancelButton: true,
      confirmButtonText: 'Submit',
      
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        
       this.isSubmit = true;
       this.timer= -1
         this.questions.forEach((q: any) => {
           if (q.givenAnswer == q.answer) {
             this.correctAnswers++;
             this.marksGot += this.marksEach;
           }

           if (q.givenAnswer.trim() != '') {
             this.attemted++;
           }
         });
          

      }

      console.log("Correct Answers:"+this.correctAnswers);
      console.log('Marks Got:' + this.marksGot);
      console.log('Attemted:' + this.attemted);
    });

    

  }

  startTimer(){
  let t =  window.setInterval(()=>{

      if(this.timer==0){
        this.submitQuiz();
        clearInterval(t);
      }else{
        this.timer=this.timer-1;
      }
    },1000)
  }

  getFormattedTime(){
    let mm= Math.floor(this.timer/60);
    let ss = this.timer - mm * 60;
    return `${mm} minutes : ${ss} seconds`
  }

}
