import React, { useEffect } from 'react';

function Payment({ payment, handleDeletePayment }) {
  return (
    <li className="list-group-item list-group-item-light">
      <div className="d-flex justify-content-between align-items-center">
        <p className="mb-0 fs-4">{payment.nameFriend} paid {payment.payment} for {payment.reason}</p>
        <button className="btn btn-secondary" onClick={() => handleDeletePayment(payment.idPayment)}>Delete</button>
      </div>
    </li>
  );
}

function ListPayment({ listPayment, handleDeletePayment, listFriends, setListPayment }) {
  useEffect(() => {
    const updatedPayments = listPayment.filter(payment =>
      listFriends.some(friend => friend.nameFriend === payment.nameFriend)
    );
    
    if (updatedPayments.length !== listPayment.length) {
      setListPayment(updatedPayments);
    }
  }, [listFriends, listPayment, setListPayment]);

  if (listPayment.length === 0) {
    return null;
  }
  return (
    <>
      {listPayment.map(payment => (
        <Payment 
          payment={payment} 
          key={payment.idPayment} 
          handleDeletePayment={handleDeletePayment}
        />
      ))}
    </>
  );
}

export default ListPayment;
