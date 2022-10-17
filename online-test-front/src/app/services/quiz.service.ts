import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

  public quizzes() {
    return this.http.get(`${baseUrl}/quiz/`);
  }

  public quizzesByCategory(cat_id: any) {
    return this.http.get(`${baseUrl}/quiz/category/${cat_id}`);
  }

  public addQuiz(quiz: any) {
    return this.http.post(`${baseUrl}/quiz/`, quiz);
  }

  public deleteQuiz(qid: any) {
    return this.http.delete(`${baseUrl}/quiz/${qid}`);
  }

  public getQuiz(qid: any) {
    return this.http.get(`${baseUrl}/quiz/${qid}`);
  }

  public updateQuiz(quiz: any) {
    return this.http.put(`${baseUrl}/quiz/`, quiz);
  }

  public activeQuizzes() {
    return this.http.get(`${baseUrl}/quiz/active`);
  }

  public activeQuizzesByCategory(cat_id:any){
     return this.http.get(`${baseUrl}/quiz/category/active/${cat_id}`);
  }
}
