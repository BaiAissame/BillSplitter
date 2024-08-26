package com.bai.billsplitter.Controller;

import com.bai.billsplitter.Model.Friend;
import com.bai.billsplitter.Service.FriendService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/friends")
public class FriendController {

    @Autowired
    private FriendService friendService;

    @GetMapping
    public List<Friend> getAllFriends() {
        return friendService.findAllFriends();
    }

    @PostMapping
    public Friend addFriend(@RequestBody Friend friend) {
        return friendService.addFriend(friend);
    }
    
    @DeleteMapping("/{id}")
    public void deleteFriend(@PathVariable("id") Integer id) {
        friendService.deleteFriend(id);
    }
}
