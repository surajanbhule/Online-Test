package com.onlinetest.app.service.impl;

import com.onlinetest.app.model.User;
import com.onlinetest.app.model.UserRole;
import com.onlinetest.app.repository.RoleRepository;
import com.onlinetest.app.repository.UserRepository;
import com.onlinetest.app.service.UserService;
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

    @Override
    public User getUser(String username) {
        return this.userRepository.findByUsername(username);
    }

    @Override
    public void deleteUser(Long id) {
        this.userRepository.deleteById(id);
    }
}
