package com.se.HomeRenting.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "user")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userid;//管理员编号

    private String username;//姓名

    private String userphone;//电话

    private char usersex;//性别

    private String usernickname;//昵称

    private String useraddress;//管理员住址

    private String userpassword;//密码

    private String usernumber;//身份证号
}
