package com.bai.billsplitter.Repository;

import com.bai.billsplitter.Model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface PaymentRepository extends JpaRepository<Payment, Integer> {
    List<Payment> findByNameFriend(String nameFriend);
}
