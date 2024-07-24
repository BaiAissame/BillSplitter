import React from 'react';

function repartitionMoney(listFriends,listPayment){
  const totalCost = listPayment.reduce((sum,payment)=>sum+=Number(payment.cost),0);
  const part = Math.round(totalCost/listFriends.length);
  const listPaymentTotal = listPayment.map((payment)=>{
    
  });
  const listDebt = listPayment.map((payment)=>({
    
  }));
}

function Transactions({listFriends,listPayment}) {
    return (
      <div className='mt-5 container'>
        <button className='col-4 btn btn-primary' onClick={() => repartitionMoney(listFriends,listPayment)}>Generate Invoice</button>
      </div>
    )
  }

export default Transactions;