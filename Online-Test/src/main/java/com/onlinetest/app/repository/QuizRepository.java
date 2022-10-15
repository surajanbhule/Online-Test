package com.onlinetest.app.repository;

import com.onlinetest.app.model.test.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuizRepository extends JpaRepository<Quiz, Long> {
}