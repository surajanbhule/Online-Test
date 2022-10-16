import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  public getQuestion(qid:any){
    return this.http.get(`${baseUrl}/question/`);
  }

  public addQuestion(question:any){
    return this.http.post(`${baseUrl}/question/`,question)
  }
}
