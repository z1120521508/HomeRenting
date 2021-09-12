package com.se.HomeRenting.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "buyinfo")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Buy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userid;
    //用户编码

    private String username;
    //用户名称

    private String userphone;
    //用户电话

    private String usersex;
    //用户性别

    private Integer houseid;
    //房屋编号

    private Integer buystate;
    //出售状态
}
