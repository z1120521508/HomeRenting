package com.se.HomeRenting.Dao;

import com.se.HomeRenting.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserDAO extends JpaRepository<User,Integer> {


    List<User> findAll();

    User findByUserphone(String userphone);

    User findByUsernickname(String usernickname);

    User getByUserphoneAndUserpassword(String userphone,String password);

    List<User> findByUserid(Integer userid);

    void deleteByUserid(int userid);
}
