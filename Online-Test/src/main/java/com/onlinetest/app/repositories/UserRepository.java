package com.onlinetest.app.repositories;

import com.onlinetest.app.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    public User findByUsername(String username);
}