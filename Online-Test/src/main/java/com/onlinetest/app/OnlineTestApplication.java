package com.onlinetest.app;

import com.onlinetest.app.models.Role;
import com.onlinetest.app.models.User;
import com.onlinetest.app.models.UserRole;
import com.onlinetest.app.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class OnlineTestApplication implements CommandLineRunner {

	@Autowired
	private UserService userService;
	public static void main(String[] args) {
		SpringApplication.run(OnlineTestApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		User user1=new User();
		user1.setFirst_name("Rahul");
		user1.setLast_name("Anbhule");
		user1.setUsername("rahul143");
		user1.setPassword("rahul@@2595");
		user1.setEmail("rahulanbhule@gmail.com");
		user1.setPhone("7709103185");
		user1.setProfile("profile2.png");

		Role role1= new Role();
		role1.setRoleName("Role1");

		Role role2= new Role();
		role2.setRoleName("Role2");

		Role role3= new Role();
		role3.setRoleName("Role3");

		Set<UserRole> userRoles= new HashSet<>();

		UserRole userRole1=new UserRole();
		userRole1.setRole(role1);
		userRole1.setUser(user1);

		UserRole userRole2=new UserRole();
		userRole2.setRole(role2);
		userRole2.setUser(user1);

		UserRole userRole3=new UserRole();
		userRole3.setRole(role3);
		userRole3.setUser(user1);

		userRoles.add(userRole1);
		userRoles.add(userRole2);
		userRoles.add(userRole3);




		User user=userService.createUser(user1,userRoles);
		System.out.println(user);
	}
}
