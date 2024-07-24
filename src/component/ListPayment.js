import React from 'react';

function Payment({friend,cost,reason,handleDeletePayment,index}) {
    return (
      <>
        <p>{friend} paid {cost} for {reason}</p>
        <button onClick={() => handleDeletePayment(index)}>Delete</button>
      </>
    )
  }
function ListPayment({listPayment,handleDeletePayment}) {
  return (
      <>
          {listPayment.map((payment, index)=> {
              return <Payment friend={payment.friend} cost={payment.cost} reason={payment.reason} key={index}  index={index} handleDeletePayment={handleDeletePayment}/>
          })}
      </>
)};



export default ListPayment;