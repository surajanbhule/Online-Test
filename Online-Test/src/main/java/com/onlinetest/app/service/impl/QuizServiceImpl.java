package com.onlinetest.app.service.impl;

import com.onlinetest.app.model.test.Category;
import com.onlinetest.app.model.test.Quiz;
import com.onlinetest.app.repository.QuizRepository;
import com.onlinetest.app.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.LinkedHashSet;
import java.util.Set;
@Service
public class QuizServiceImpl implements QuizService {

    @Autowired
    private QuizRepository quizRepository;

    @Override
    public Quiz addQuiz(Quiz quiz) {
        return quizRepository.save(quiz);
    }

    @Override
    public Quiz updateQuiz(Quiz updatedQuiz) {
        return quizRepository.save(updatedQuiz);
    }

    @Override
    public Set<Quiz> getQuizzes() {
        return new LinkedHashSet<>(quizRepository.findAll());
    }

    @Override
    public Quiz getQuiz(long quiz_id) {
        return quizRepository.findById(quiz_id).get();
    }

    @Override
    public void deleteQuiz(long quiz_id) {
        quizRepository.deleteById(quiz_id);
    }

    @Override
    public Set<Quiz> getQuizzesOfCategory(Category category) {
        return quizRepository.findByCategory(category);
    }

    @Override
    public Set<Quiz> getActiveQuizzes() {
        return quizRepository.findByActive(true);
    }

    @Override
    public Set<Quiz> getActiveQuizzesByCategory(Category category, Boolean isActive) {
        return quizRepository.findByCategoryAndActive(category,true);
    }


}
