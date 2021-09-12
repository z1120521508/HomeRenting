package com.se.HomeRenting.Controller;

import com.se.HomeRenting.Entity.Rent;
import com.se.HomeRenting.Service.RentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="/api/house")
public class RentController {

    @Autowired
    RentService rentService;

    @GetMapping("/resources/tenement/{hid}")
    public Rent getInfo(@PathVariable("hid") int hid){
        return rentService.getByHouseid(hid);
    }

    @GetMapping("/resources/tenement/{hid}/state")
    public Rent getState(@PathVariable("hid") int hid){
        return rentService.getByHouseid(hid);
    }
}
