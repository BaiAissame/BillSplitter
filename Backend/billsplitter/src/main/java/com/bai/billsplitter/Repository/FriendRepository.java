package com.bai.billsplitter.Repository;

import com.bai.billsplitter.Model.Friend;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface FriendRepository extends JpaRepository<Friend, Integer> {
    List<Friend> findByNameFriend(String nameFriend);
}
