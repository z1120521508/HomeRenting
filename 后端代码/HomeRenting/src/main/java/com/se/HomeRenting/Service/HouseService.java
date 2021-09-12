package com.se.HomeRenting.Service;

import com.se.HomeRenting.Dao.HouseDAO;
import com.se.HomeRenting.Entity.House;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HouseService {

    @Autowired
    HouseDAO houseDAO;

    public House getByUserPhone(String userphone){
        return houseDAO.findByUserphone(userphone);
    }

    public List<House> getByHouseid(int houseid){
        return houseDAO.findByHouseid(houseid);
    }

    public List<House> getByHouseidAndHousechecked(int houseid, int housechecked){
        return houseDAO.findByHouseidAndHousechecked(houseid,housechecked);
    }

    public List<House> getByState(Integer state){
        return houseDAO.findByHousechecked(state);
    }

    public void addHouse(House house) {
        houseDAO.save(house);
    }

    public List<House> getAllHouse(){
        return houseDAO.findAll();
    }

    public void updateState(House house){
        houseDAO.save(house);
    }

    public void deleteHouse(int houseid){
        houseDAO.deleteById(houseid);
    }
}
