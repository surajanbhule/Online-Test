package com.onlinetest.app.services;

import com.onlinetest.app.models.User;
import com.onlinetest.app.models.UserRole;


import java.util.Set;


public interface UserService {

    public User createUser(User user, Set<UserRole> userRoles) throws Exception;
}
