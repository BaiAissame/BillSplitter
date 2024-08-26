package com.bai.billsplitter.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bai.billsplitter.Model.Payment;
import com.bai.billsplitter.Repository.PaymentRepository;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    public List<Payment> findAllPayments() {
        return paymentRepository.findAll();
    }

    public Payment findPaymentById(Integer id) {
        return paymentRepository.findById(id).orElse(null);
    }

    public Payment addPayment(Payment Payment) {
        return paymentRepository.save(Payment);
    }

    public void deletePayment(Integer id) {
        paymentRepository.deleteById(id);
    }
}
