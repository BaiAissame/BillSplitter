package com.bai.billsplitter.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Friend {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_friend") 
    private Integer idFriend;
    
    @Column(name = "name_friend") 
    private String nameFriend;


    public Friend() {}

    public Friend(Integer idFriend, String nameFriend) {
        this.idFriend = idFriend;
        this.nameFriend = nameFriend;
    }

    public Integer getIdFriend() {
        return idFriend;
    }

    public void setIdFriend(Integer idFriend) {
        this.idFriend = idFriend;
    }

    public String getNameFriend() {
        return nameFriend;
    }

    public void setNameFriend(String nameFriend) {
        this.nameFriend = nameFriend;
    }
}
