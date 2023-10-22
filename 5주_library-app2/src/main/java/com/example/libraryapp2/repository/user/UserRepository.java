package com.example.libraryapp2.repository.user;

import org.springframework.jdbc.core.JdbcTemplate;

public class UserRepository {

    JdbcTemplate jdbcTemplate;
    public UserRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public boolean isUserNotExist(long id) {
        String sql = "SELECT * FROM user id =?";
        return jdbcTemplate.query(sql, (rs, rowNum)-> 0, id).isEmpty();
    }

    public void updateUserName(long id, String name) {
        String sql = "UPDATE user SET name = ? WHERE id =?";
        jdbcTemplate.update(sql, name, id);
    }
}
