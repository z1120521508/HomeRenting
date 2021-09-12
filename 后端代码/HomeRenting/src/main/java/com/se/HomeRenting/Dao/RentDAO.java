package com.se.HomeRenting.Dao;

import com.se.HomeRenting.Entity.Rent;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RentDAO extends JpaRepository<Rent,Integer> {

    Rent findByHouseid(int houserid);

    List<Rent> findAll();
}
