package com.se.HomeRenting.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import javax.persistence.*;

@Data
@Entity
@Table(name = "post")
@JsonIgnoreProperties({"handler","hibernateLazyInitializer"})
public class Post {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Integer textid;
    //用户编号

    private String userphone;
    //用户手机

    private String usernickname;
    //用户昵称

    private String text;
    //文本

}
