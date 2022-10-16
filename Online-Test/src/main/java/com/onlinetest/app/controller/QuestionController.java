package com.onlinetest.app.controller;

import com.onlinetest.app.model.test.Question;
import com.onlinetest.app.model.test.Quiz;
import com.onlinetest.app.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/question")
@CrossOrigin("*")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @PostMapping("/")
    public ResponseEntity<Question> addQuestion(@RequestBody Question question){
        return ResponseEntity.ok(questionService.addQuestion(question));
    }

    @PutMapping("/")
    public ResponseEntity<Question> updateQuestion(@RequestBody Question question){
        return ResponseEntity.ok(questionService.updateQuestion(question));
    }

    @GetMapping("/{question_id}")
    public ResponseEntity<Question> getQuestion(@PathVariable("question_id")long question_id){
        return ResponseEntity.ok(questionService.getQuestion(question_id));
    }

    @GetMapping("/")
    public ResponseEntity<?> getQuestions(){
        return ResponseEntity.ok(questionService.getQuestions());
    }

    @GetMapping("/all/{qid}")
    public ResponseEntity<?> getAllQuestions(){
        return ResponseEntity.ok(questionService.getQuestions());
    }

    //may this method change
    @GetMapping("/quiz/{qid}")
    public ResponseEntity<?> getQuestionOfQuiz(@PathVariable("qid") long qid){

        Quiz quiz = new Quiz();
        quiz.setQid(qid);
        return ResponseEntity.ok(questionService.getQuestionByQuiz(quiz));
    }

    @DeleteMapping("/{question_id}")
    public void deleteQuestion(@PathVariable("question_id") long question_id){
        questionService.deleteQuestion(question_id);
    }
}
