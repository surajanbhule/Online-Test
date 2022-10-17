package com.onlinetest.app.repository;

import com.onlinetest.app.model.test.Category;
import com.onlinetest.app.model.test.Quiz;
import javafx.scene.effect.SepiaTone;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface QuizRepository extends JpaRepository<Quiz, Long> {
    public Set<Quiz> findByCategory(Category category);
}