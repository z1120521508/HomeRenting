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
    public List<Post> getAllPost(){
        return postService.getALL();
    }

    @GetMapping("/list/{tid}")
    public List<Post> getPost(@PathVariable("tid") int tid){
        return postService.getPost(tid);
    }

    @PostMapping("/resource")
    public String putPost(@RequestBody Post post){
        postService.putPost(post);
        return "发贴成功";
    }

    @DeleteMapping("/resource/{tid}")
    public void deleteText(@PathVariable("tid") int tid){
        postService.deletePost(tid);
    }
}
