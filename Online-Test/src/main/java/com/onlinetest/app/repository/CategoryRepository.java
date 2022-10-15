package com.onlinetest.app.repository;

import com.onlinetest.app.model.test.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface CategoryRepository extends JpaRepository<Category, Long> {
}