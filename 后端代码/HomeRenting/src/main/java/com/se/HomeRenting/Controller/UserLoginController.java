package com.se.HomeRenting.Controller;

import com.se.HomeRenting.Entity.User;
import com.se.HomeRenting.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.HtmlUtils;

@RequestMapping(value = "/api/user")
@RestController
public class UserLoginController {

    @Autowired
    UserService userService;

    @CrossOrigin
    @PostMapping(value = "/login")
    @ResponseBody
    public String Login(@RequestBody User requestUser) {

        String userphone = requestUser.getUserphone();
        userphone = HtmlUtils.htmlEscape(userphone);
        User user = userService.get(userphone, requestUser.getUserpassword());
        System.out.println(user);

        if (user == null) {
            return "-1";
        } else {
            return ("1 " + user.getUsernickname());
        }
    }

    @CrossOrigin
    @PostMapping(value = "/register")
    @ResponseBody
    public void register(@RequestBody User requestUser) {
        userService.add(requestUser);
    }

    @CrossOrigin
    @RequestMapping(value = "/logout",method = RequestMethod.GET)
    @ResponseBody
    public void logout(@RequestBody User user) {
    }

    @CrossOrigin
    @DeleteMapping(value = "/unsubscribe/{uid}")
    public void unsubscribe(@PathVariable("uid") int userid){
        userService.delete(userid);
    }
}
