package com.se.HomeRenting.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "admin")
@JsonIgnoreProperties({"handler","hibernateLazyInitializer"})
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Admin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int adminid;//管理员编号

    private String adminname;//姓名

    private char adminsex;//性别

    private String adminnickname;//昵称

    private String adminpassword;//密码

    private String adminphone;//电话

    private String adminnumber;//身份证号
}
