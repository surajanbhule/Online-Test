package com.onlinetest.app.controller;

import com.onlinetest.app.model.test.Category;
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

    @GetMapping("/category/{cat_id}")
    public ResponseEntity<?> getQuizzesOfCategory(@PathVariable("cat_id") long cat_id){
        Category category= new Category();
        category.setCat_id(cat_id);
        return ResponseEntity.ok(quizService.getQuizzesOfCategory(category));
    }

    @GetMapping("/active")
    public ResponseEntity<?> getActiveQuizzes(){
        return ResponseEntity.ok(quizService.getActiveQuizzes());
    }

    @GetMapping("/category/active/{cat_id}")
    public ResponseEntity<?> getActiveQuizzesOfCategory(@PathVariable("cat_id") long cat_id){
        Category category= new Category();
        category.setCat_id(cat_id);
        return ResponseEntity.ok(quizService.getActiveQuizzesByCategory(category,true));
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
