package com.onlinetest.app.repository;

import com.onlinetest.app.model.test.Question;
import com.onlinetest.app.model.test.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface QuestionRepository extends JpaRepository<Question, Long> {

    public Set<Question> findByQuiz(Quiz quiz);
}