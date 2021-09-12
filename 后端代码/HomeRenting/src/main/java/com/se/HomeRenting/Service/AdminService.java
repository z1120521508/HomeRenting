package com.se.HomeRenting.Service;

import com.se.HomeRenting.Dao.AdminDAO;
import com.se.HomeRenting.Entity.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class AdminService {

    @Autowired
    AdminDAO adminDAO;

    public boolean isExist(String adminName) {
        Admin admin = getByName(adminName);
        return null!=admin;
    }

    public Admin getByName(String adminName) {
        return adminDAO.findByAdminname(adminName);
    }

    public List<Admin> getByAdminid(int adminid) {
        return adminDAO.findByAdminid(adminid);
    }

    public Admin get(String adminphone, String adminPassword){
        return adminDAO.getByAdminphoneAndAdminpassword(adminphone, adminPassword);
    }

    public Admin getByPhone(String adminPhone){
        return adminDAO.findByAdminphone(adminPhone);
    }

    @Transactional
    public void add(Admin admin) {
        adminDAO.save(admin);
    }

    public List<Admin> findAll(){
        return adminDAO.findAll();
    }

    @Transactional
    public void delete(int adminid){
        adminDAO.deleteByAdminid(adminid);
    }
}
