package com.onlinetest.app.controller;

import com.onlinetest.app.model.test.Quiz;
import com.onlinetest.app.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/quiz")
@CrossOrigin("*")
public class QuizController {

    @Autowired
    private QuizService quizService;

    @PostMapping("/")
    public ResponseEntity<?> addQuiz(@RequestBody  Quiz quiz){
        return ResponseEntity.ok(quizService.addQuiz(quiz));
    }

    @GetMapping("/{quiz_id}")
    public Quiz getQuiz(@PathVariable("quiz_id") long quiz_id){
        return quizService.getQuiz(quiz_id);
    }

    @GetMapping("/")
    public ResponseEntity<?> getQuizzes(){
        return ResponseEntity.ok(quizService.getQuizzes());
    }

    @PutMapping("/")
    public Quiz updateQuiz(@RequestBody Quiz quiz ){
        return quizService.updateQuiz(quiz);
    }

    @DeleteMapping("/{quiz_id}")
    public void deleteQuiz(@PathVariable("quiz_id") long quiz_id){
        quizService.deleteQuiz(quiz_id);
    }
}
