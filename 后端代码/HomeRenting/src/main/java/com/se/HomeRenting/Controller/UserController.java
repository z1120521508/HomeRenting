package com.se.HomeRenting.Controller;

import com.se.HomeRenting.Entity.User;
import com.se.HomeRenting.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path="/api/user")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping(value = "/resources")
    public List<User> listUsers(){
        return userService.findAll();
    }

    @GetMapping("/resources/{uid}")
    public List<User> getUser(@PathVariable("uid") int uid){
        return userService.getByUserid(uid);
    }
}
