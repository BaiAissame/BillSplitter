import React from 'react';

function Payment({name,cost,reason,handleDeletePayment,index}) {
    return (
      <li className="list-group-item list-group-item-light">
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0 fs-4">{name} paid {cost} for {reason}</p>
            <button className="btn btn-secondary" onClick={() => handleDeletePayment(index)}>Delete</button>
        </div>
    </li>
    )
  }
function ListPayment({listPayment,handleDeletePayment}) {
  return (
      <>
          {listPayment.map((payment, index)=> {
              return <Payment name={payment.name} cost={payment.cost} reason={payment.reason} key={index}  index={index} handleDeletePayment={handleDeletePayment}/>
          })}
      </>
)};

export default ListPayment;