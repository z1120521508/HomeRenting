package com.se.HomeRenting.Dao;

import com.se.HomeRenting.Entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface AdminDAO extends JpaRepository<Admin,Integer> {

    List<Admin> findByAdminid(int adminid);

    Admin findByAdminname(String adminname);

    Admin findByAdminphone(String adminphone);

    Admin getByAdminphoneAndAdminpassword(String adminname,String adminpassword);

    @Transactional
    void deleteByAdminid(int adminid);

    List<Admin> findAll();
}
