package com.se.HomeRenting.Service;

import com.se.HomeRenting.Dao.PostDAO;
import com.se.HomeRenting.Entity.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PostService {

    @Autowired
    PostDAO postDAO;

    public List<Post> getALL(){
        return postDAO.findAll();
    }

    @Transactional
    public void putPost(Post post){
        postDAO.save(post);
    }
}
