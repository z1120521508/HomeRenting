package com.se.HomeRenting.Controller;

import com.se.HomeRenting.Entity.House;
import com.se.HomeRenting.Service.HouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping(value = "/api/house")
@RestController
public class HouseController {

    @Autowired
    HouseService houseService;

    @GetMapping("/resources/list/{state}")
    public List<House> listHouses(@PathVariable("state") int state){
        return houseService.getByState(state);
    }

    @GetMapping("/resources/{hid}/{state}")
    public List<House> getHouse(@PathVariable("hid") int hid,
                                @PathVariable("state") int state){
        return houseService.getByHouseidAndHousechecked(hid,state);
    }

    @PostMapping("/resource")
    public String putHouse(@RequestBody House house){
        houseService.addHouse(house);
        return "发布成功";
    }

    @PutMapping("/resources/{hid}")
    public String checkHouse(@PathVariable("hid") int hid){
        List<House> list = houseService.getByHouseid(hid);
        House newhouse = null;
        for (House h : list){
            newhouse = h;
        }
        newhouse.setHousechecked(1);
        houseService.updateState(newhouse);
        return "已审核";
    }

    @DeleteMapping("/resources/{hid}")
    public void deleteHouse(@PathVariable("hid") int hid){
        houseService.deleteHouse(hid);
    }
}
