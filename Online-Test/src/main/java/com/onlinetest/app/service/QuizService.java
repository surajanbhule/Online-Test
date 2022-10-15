package com.onlinetest.app.service;

import com.onlinetest.app.model.test.Quiz;

import java.util.Set;

public interface QuizService {

    public Quiz addQuiz(Quiz quiz);

    public Quiz updateQuiz(Quiz updatedQuiz);

    public Set<Quiz> getQuizzes();

    public Quiz getQuiz(long quiz_id);

    public void deleteQuiz(long quiz_id);
}
