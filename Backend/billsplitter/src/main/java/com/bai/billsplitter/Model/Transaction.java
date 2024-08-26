package com.bai.billsplitter.Model;

public class Transaction {
    private Integer idTransaction;
    private String debtHolder;
    private Number transactionCost;
    private String bankName;

    public Transaction(Integer idTransaction,String debtHolder,Number transactionCost,String bankName){
        this.idTransaction = idTransaction;
        this.debtHolder = debtHolder;
        this.transactionCost = transactionCost;
        this.bankName = bankName;
    }

    public Integer getIdTransaction() {
        return idTransaction;
    }
    public void setIdTransaction(Integer idTransaction) {
        this.idTransaction = idTransaction;
    }
    public String getDebtHolder() {
        return debtHolder;
    }
    public void setDebtHolder(String debtHolder) {
        this.debtHolder = debtHolder;
    }
    public Number getTransactionCost() {
        return transactionCost;
    }
    public void setTransactionCost(Number transactionCost) {
        this.transactionCost = transactionCost;
    }
    public String getBankName() {
        return bankName;
    }
    public void setBankName(String bankName) {
        this.bankName = bankName;
    }
}
