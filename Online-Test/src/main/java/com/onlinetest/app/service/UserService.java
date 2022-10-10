package com.onlinetest.app.service;

import com.onlinetest.app.model.User;
import com.onlinetest.app.model.UserRole;


import java.util.Set;


public interface UserService {

    public User createUser(User user, Set<UserRole> userRoles) throws Exception;

    public User getUser(String username);

    public void deleteUser(Long id);
}
