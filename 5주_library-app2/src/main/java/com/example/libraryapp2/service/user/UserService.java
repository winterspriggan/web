package com.example.libraryapp2.service.user;

import com.example.libraryapp2.dto.user.request.UserUpdateRequest;
import com.example.libraryapp2.repository.user.UserRepository;
import org.springframework.jdbc.core.JdbcTemplate;

public class UserService {
    JdbcTemplate jdbcTemplate;
    public UserService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private final UserRepository userRepository = new UserRepository(jdbcTemplate);
    public void userUpdate(UserUpdateRequest request) {
        if(userRepository.isUserNotExist(request.getId())) throw new IllegalArgumentException();
        userRepository.updateUserName(request.getId(), request.getName());
    }
}
