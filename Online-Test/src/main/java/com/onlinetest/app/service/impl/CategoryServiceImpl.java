package com.onlinetest.app.service.impl;

import com.onlinetest.app.model.test.Category;
import com.onlinetest.app.repository.CategoryRepository;
import com.onlinetest.app.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashSet;
import java.util.Set;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public Category addCategory(Category category) {
        return categoryRepository.save(category);
    }

    @Override
    public Category updateCategory(Category updatedCategory) {
        return categoryRepository.save(updatedCategory);
    }

    @Override
    public Set<Category> getCategories() {
        return new LinkedHashSet<>(categoryRepository.findAll());
    }

    @Override
    public Category getCategory(long category_id) {
        return categoryRepository.findById(category_id).get();
    }

    @Override
    public void deleteCategory(long category_id) {

        categoryRepository.deleteById(category_id);
    }
}
