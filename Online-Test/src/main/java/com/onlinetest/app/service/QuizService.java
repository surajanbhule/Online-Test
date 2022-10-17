package com.onlinetest.app.service;

import com.onlinetest.app.model.test.Category;
import com.onlinetest.app.model.test.Quiz;
import org.springframework.http.ResponseEntity;

import java.util.Set;

public interface QuizService {

    public Quiz addQuiz(Quiz quiz);

    public Quiz updateQuiz(Quiz updatedQuiz);

    public Set<Quiz> getQuizzes();

    public Quiz getQuiz(long quiz_id);

    public void deleteQuiz(long quiz_id);

    public Set<Quiz> getQuizzesOfCategory(Category category);

    public Set<Quiz> getActiveQuizzes();

    public Set<Quiz> getActiveQuizzesByCategory(Category category, Boolean isActive);
}
