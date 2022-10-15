package com.onlinetest.app.service.impl;

import com.onlinetest.app.model.test.Question;
import com.onlinetest.app.model.test.Quiz;
import com.onlinetest.app.repository.QuestionRepository;
import com.onlinetest.app.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashSet;
import java.util.Set;
@Service
public class QuestionServiceImpl implements QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    @Override
    public Question addQuestion(Question question) {
        return questionRepository.save(question);
    }

    @Override
    public Question updateQuestion(Question updatedQuestion) {
        return questionRepository.save(updatedQuestion);
    }

    @Override
    public Set<Question> getQuestions() {
        return new LinkedHashSet<>(questionRepository.findAll());
    }

    @Override
    public Question getQuestion(long question_id) {
        return questionRepository.findById(question_id).get();
    }

    @Override
    public Set<Question> getQuestionByQuiz(Quiz quiz) {
        return questionRepository.findByQuiz(quiz);
    }

    @Override
    public void deleteQuestion(long question_id) {
        questionRepository.deleteById(question_id);
    }
}
