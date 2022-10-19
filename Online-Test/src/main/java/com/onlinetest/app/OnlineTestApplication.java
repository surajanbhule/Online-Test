package com.onlinetest.app;

import com.onlinetest.app.model.Role;
import com.onlinetest.app.model.User;
import com.onlinetest.app.model.UserRole;
import com.onlinetest.app.repository.UserRepository;
import com.onlinetest.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class OnlineTestApplication implements CommandLineRunner {
	@Autowired
	private UserService userService;
	public static void main(String[] args) {
		SpringApplication.run(OnlineTestApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

	}
}
