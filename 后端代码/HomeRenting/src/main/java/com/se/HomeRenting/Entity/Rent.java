package com.se.HomeRenting.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "rentinfo")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Rent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userid;
    //用户编号

    private String username;
    //用户真实姓名

    private String usersex;
    //用户性别

    private String userphone;
    //用户电话号码

    private Integer houseid;
    //房屋编号

    private Integer joinrent;
    //是否合租

    private Integer rentstate;
    //租房状态

}
