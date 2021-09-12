package com.se.HomeRenting.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "houseinfo")
@JsonIgnoreProperties({"handler","hibernateLazyInitializer"})
@NoArgsConstructor
@AllArgsConstructor
@Data
public class House {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int houseid;//房屋编号

    private String userphone;//房主电话

    private String username;//房主姓名

    private String houseaddress;//房屋地址

    private String rentnotice;//租房须知

    private int houseelevator;//是否有电梯

    private int rentstate;//出租状态

    private int sellstate;//出售状态

    private String housepicture;//房屋照片

    private double houserent;//租金

    private double houseprice;//房价

    private String housetype;//户型

    private String houseorientation;//房屋朝向

    private int houseage;//房龄

    private double housearea;//面积

    private int housechecked;//是否已通过审核

    private int housejoinrent;//是否可以合租

    private String houseproperty;//房屋产权
}
