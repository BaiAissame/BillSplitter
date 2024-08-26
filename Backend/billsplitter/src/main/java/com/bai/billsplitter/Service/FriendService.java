package com.bai.billsplitter.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bai.billsplitter.Model.Friend;
import com.bai.billsplitter.Repository.FriendRepository;

@Service
public class FriendService {

    @Autowired
    private FriendRepository friendRepository;

    public List<Friend> findAllFriends() {
        return friendRepository.findAll();
    }

    public Friend findFriendById(Integer id) {
        return friendRepository.findById(id).orElse(null);
    }

    public Friend addFriend(Friend friend) {
        return friendRepository.save(friend);
    }

    public void deleteFriend(Integer id) {
        friendRepository.deleteById(id);
    }
}
