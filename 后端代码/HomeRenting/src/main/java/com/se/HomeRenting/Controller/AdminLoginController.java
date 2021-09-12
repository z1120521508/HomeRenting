package com.se.HomeRenting.Controller;

import com.se.HomeRenting.Entity.Admin;
import com.se.HomeRenting.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.HtmlUtils;

@RequestMapping("/api/admin")
@RestController
public class AdminLoginController {

    @Autowired
    AdminService adminService;

    @CrossOrigin
    @PostMapping(value = "/login")
    @ResponseBody
    public String Login(@RequestBody Admin requestAdmin) {

        String adminphone = requestAdmin.getAdminphone();
        adminphone = HtmlUtils.htmlEscape(adminphone);

        Admin admin = adminService.get(adminphone, requestAdmin.getAdminpassword());
        System.out.println(admin);

        if (admin == null) {
            System.out.println("账号或密码错误");
            return "400";
        } else {
            System.out.println("登陆成功");
            return "200";
        }
    }

    @CrossOrigin
    @PostMapping(value = "/register")
    @ResponseBody
    public void register(@RequestBody Admin requestAdmin) {
        adminService.add(requestAdmin);
    }

    @CrossOrigin
    @GetMapping(value = "/logout")
    @ResponseBody
    public void logout(@RequestBody Admin requestAdmin) {
    }

    @CrossOrigin
    @DeleteMapping(value = "/unsubscribe/{aid}")
    public void unsubscribe(@PathVariable("aid") int adminid){
        adminService.delete(adminid);
    }
}
