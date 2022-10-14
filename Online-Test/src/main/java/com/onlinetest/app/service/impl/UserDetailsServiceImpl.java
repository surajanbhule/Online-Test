package com.onlinetest.app.service.impl;

import com.onlinetest.app.model.User;
import com.onlinetest.app.repository.UserRepository;
import org.omg.CORBA.UserException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;
    @Override
    public UserDetails loadUserByUsername(String username) {
        User user = userRepository.findByUsername(username);
        if(user==null){
            System.out.println("User Not Found");
            try {
                throw new UserFoundException("User Already Exist");
            } catch (UserFoundException e) {
                throw new RuntimeException(e);
            }
        }
        return (UserDetails) user;
    }

    private class UserFoundException extends Throwable {
        public UserFoundException(String user_not_found) {
        }
    }
}
