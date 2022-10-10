package com.onlinetest.app.controller;

import com.onlinetest.app.model.Role;
import com.onlinetest.app.model.User;
import com.onlinetest.app.model.UserRole;
import com.onlinetest.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/")
    public User createUser(@RequestBody User user) throws Exception {

        Set<UserRole> userRoles=new HashSet<>();
        Role role= new Role();
        role.setRoleName("NORMAL");
        UserRole userRole= new UserRole();
        userRole.setUser(user);
        userRole.setRole(role);
        userRoles.add(userRole);

        return this.userService.createUser(user,userRoles);
    }

    @GetMapping("/{username}")
    public User getUser(@PathVariable("username")String username){
        return this.userService.getUser(username);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable("id") Long id){
        this.userService.deleteUser(id);
        System.out.println("User deleted successfully");
    }
}
