package com.se.HomeRenting.Service;

import com.se.HomeRenting.Dao.RentDAO;
import com.se.HomeRenting.Entity.Rent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RentService {

    @Autowired
    RentDAO rentDAO;

    public List<Rent> findAll(){
        return rentDAO.findAll();
    }

    public Rent getByHouseid(Integer houseid){
        return rentDAO.findByHouseid(houseid);
    }
}
