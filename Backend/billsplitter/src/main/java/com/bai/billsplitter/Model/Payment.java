package com.bai.billsplitter.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_payment")
    private Integer idPayment;
    @Column(name = "name_friend") 
    private String nameFriend;
    @Column(name = "payment") 
    private Double payment;
    @Column(name = "reason") 
    private String reason;
    
    public Payment(){}

    public Payment(Integer idPayment,String nameFriend,Double payment,String reason){
        this.idPayment = idPayment;
        this.nameFriend = nameFriend;
        this.payment = payment;
        this.reason = reason;
    }

    public Integer getidPayment() {
        return idPayment;
    }
    public void setidPayment(Integer idPayment) {
        this.idPayment = idPayment;
    }
    public String getNameFriend() {
        return nameFriend;
    }
    public void setNameFriend(String nameFriend) {
        this.nameFriend = nameFriend;
    }
    public Number getPayment() {
        return payment;
    }
    public void setPayment(Double payment) {
        this.payment = payment;
    }
    public String getReason() {
        return reason;
    }
    public void setReason(String reason) {
        this.reason = reason;
    }

}
