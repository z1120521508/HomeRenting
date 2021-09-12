package com.se.HomeRenting.Service;

import com.se.HomeRenting.Dao.UserDAO;
import com.se.HomeRenting.Entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserDAO userDAO;

    public boolean isExist(String userphone) {
        User user = getByPhone(userphone);
        return null!=user;
    }

    public List<User> getByUserid(int userid){
        return userDAO.findByUserid(userid);
    }

    public User getByPhone(String userphone) {
        return userDAO.findByUserphone(userphone);
    }

    public User getByUserNickname(String usernickname){
        return userDAO.findByUsernickname(usernickname);
    }

    public User get(String userphone, String userpassword) {
        return userDAO.getByUserphoneAndUserpassword(userphone, userpassword);
    }

    @Transactional
    public void add(User user) {
        userDAO.save(user);
    }

    @Transactional
    public void delete(int userid){
        userDAO.deleteByUserid(userid);
    }

    public List<User> findAll(){
        return userDAO.findAll();
    }
}
