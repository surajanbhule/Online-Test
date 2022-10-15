package com.onlinetest.app.service;

import com.onlinetest.app.model.test.Category;

import java.util.Set;

public interface CategoryService {

    public Category addCategory(Category category);

    public Category updateCategory(Category updatedCategory);

    public Set<Category> getCategories();

    public Category getCategory(long category_id);

    public void deleteCategory(long category_id);
}
