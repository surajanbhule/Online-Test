package com.onlinetest.app.services.impl;

import com.onlinetest.app.models.User;
import com.onlinetest.app.models.UserRole;
import com.onlinetest.app.repositories.RoleRepository;
import com.onlinetest.app.repositories.UserRepository;
import com.onlinetest.app.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    RoleRepository roleRepository;
    @Override
    public User createUser(User user, Set<UserRole> userRoles) throws Exception {

        User local= this.userRepository.findByUsername(user.getUsername());

        if(local != null){
            System.out.println("User already existed");
            throw new Exception("User already existed in the repository");
        }else{
            for(UserRole ur:userRoles){
                this.roleRepository.save(ur.getRole());
            }

            user.getUserRoles().addAll(userRoles);
            local=this.userRepository.save(user);
        }
        return local;
    }
}
