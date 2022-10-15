package com.onlinetest.app.model.test;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "quiz")
public class Quiz {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long qid;
    private String qtitle;
    private String qdescription;
    private String max_marks;
    private String number_of_questions;
    private boolean avtive=false;

    @ManyToOne(fetch = FetchType.EAGER)
    private Category category;

    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY,mappedBy = "quiz")
    @JsonIgnore
    private Set<Question> questions = new HashSet<>();

    public Quiz() {
    }

    public Long getQid() {
        return qid;
    }

    public void setQid(Long qid) {
        this.qid = qid;
    }

    public String getQtitle() {
        return qtitle;
    }

    public void setQtitle(String qtitle) {
        this.qtitle = qtitle;
    }

    public String getQdescription() {
        return qdescription;
    }

    public void setQdescription(String qdescription) {
        this.qdescription = qdescription;
    }

    public String getMax_marks() {
        return max_marks;
    }

    public void setMax_marks(String max_marks) {
        this.max_marks = max_marks;
    }

    public String getNumber_of_questions() {
        return number_of_questions;
    }

    public void setNumber_of_questions(String number_of_questions) {
        this.number_of_questions = number_of_questions;
    }

    public boolean isAvtive() {
        return avtive;
    }

    public void setAvtive(boolean avtive) {
        this.avtive = avtive;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Set<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(Set<Question> questions) {
        this.questions = questions;
    }

}
