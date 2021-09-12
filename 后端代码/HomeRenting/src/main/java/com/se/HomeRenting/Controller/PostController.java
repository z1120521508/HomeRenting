package com.se.HomeRenting.Controller;

import com.se.HomeRenting.Entity.Post;
import com.se.HomeRenting.Service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="/api/message")
public class PostController {
    @Autowired
    PostService postService;

    @GetMapping("/list")
    public List<Post> getPost(){
        return postService.getALL();
    }

    @PostMapping("/resource")
    public String putPost(@RequestBody Post post){
        postService.putPost(post);
        return "发贴成功";
    }
}
