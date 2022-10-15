package com.onlinetest.app.controller;

import com.onlinetest.app.model.test.Category;
import com.onlinetest.app.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/category")
@CrossOrigin("*")
public class CategoryController {

    @Autowired
    private  CategoryService categoryService;

    @PostMapping("/")
    public ResponseEntity<?> addCategory(@RequestBody Category category){
        Category category1 = this.categoryService.addCategory(category);
        return  ResponseEntity.ok(category1);
    }

    @GetMapping("/{category_id}")
    public Category getCategory(@PathVariable("category_id") long category_id){
        return this.categoryService.getCategory(category_id);
    }

    @GetMapping("/")
    public ResponseEntity<?> getCategories(){
        return ResponseEntity.ok(categoryService.getCategories());
    }

    @PutMapping("/")
    public Category updateCategory(@RequestBody Category category){
        return categoryService.updateCategory(category);
    }

    @DeleteMapping("/{category_id}")
    public void deleteCategory(@PathVariable("category_id") long category_id){
        categoryService.deleteCategory(category_id);
    }
}
