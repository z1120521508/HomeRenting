package com.se.HomeRenting.Dao;

import com.se.HomeRenting.Entity.House;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HouseDAO extends JpaRepository<House,Integer> {

    House findByUserphone(String userphone);

    List<House> findAll();

    List<House> findByHouseid(int houseid);

    List<House> findByHouseidAndHousechecked(int houseid, int housechecked);

    List<House> findByHousechecked(Integer housechecked);

}
