package com.se.HomeRenting.Service;

import com.se.HomeRenting.Dao.BuyDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BuyService {
    @Autowired
    BuyDAO buyDAO;
}
