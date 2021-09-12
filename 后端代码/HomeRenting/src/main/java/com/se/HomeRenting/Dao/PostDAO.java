package com.se.HomeRenting.Dao;

import com.se.HomeRenting.Entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostDAO extends JpaRepository<Post,Integer> {

    List<Post> findAll();

    List<Post> findByTextid(int tid);

    void deleteByTextid(int tid);
}
