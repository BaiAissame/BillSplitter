import React from 'react';

function Transactions({ listFriends, listPayment, listTransactions, repartitionMoney }) {
  return (
    <>
      <div className='mt-5 container'>
        <button className='col-4 btn btn-primary' onClick={() => repartitionMoney(listFriends, listPayment)}>
          Generate Invoice
        </button>
      </div>
      <ul className="list-group mt-3">
        {listTransactions.map((transaction, index) => {
          return (
            <li className="list-group-item list-group-item-light" key={index}>
              {transaction.debtHolder} doit {transaction.cost}€ à {transaction.bank}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Transactions;
