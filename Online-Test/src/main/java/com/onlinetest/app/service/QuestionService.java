package com.onlinetest.app.service;

import com.onlinetest.app.model.test.Question;
import com.onlinetest.app.model.test.Quiz;

import java.util.Set;

public interface QuestionService {

    public Question addQuestion(Question question);

    public Question updateQuestion(Question updatedQuestion);

    public Set<Question> getQuestions();

    public Question getQuestion(long question_id);

    public Set<Question> getQuestionByQuiz(Quiz quiz);

    public void deleteQuestion(long question_id);
}
