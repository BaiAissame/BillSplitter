import React, { useRef, useState } from 'react';
import domtoimage from 'dom-to-image';

function Transactions({ listFriends, listPayment, listTransactions, repartitionMoney }) {
  const [isGenerated,setIsGenerated]=useState(false);
  const ulRef = useRef(null);

  const handleCapture = () => {
    domtoimage.toPng(ulRef.current)
      .then(dataUrl => {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'facture-screenshot.png';
        link.click();
      })
      .catch(error => {
        console.error('Erreur lors de la capture de l\'image :', error);
      });
  };

  return (
    <>
      <div className='mt-5 container'>
        <button className='col-4 btn btn-primary' onClick={() =>{
          setIsGenerated(true)
          repartitionMoney(listFriends, listPayment)}}>
          Generate Invoice
        </button>
      </div>
      { isGenerated &&
      <div>
      <div className="card" ref={ulRef}>
        <div className="card-body">
          <h5 className="card-title">Facture</h5>
          <p className="card-text">Voici le détail du partage des dépenses.</p>
        </div>
        <ul className="list-group mt-3" >
          {listTransactions.map((transaction, index) => {
            return (
              <li className="list-group-item list-group-item-light" key={index}>
                {transaction.debtHolder} doit {transaction.cost.toFixed(2)}€ à {transaction.bank}
              </li>
            );
          })}
        </ul>
      </div>
          <button className='col-4 btn btn-secondary ml-2' onClick={handleCapture}>
            Capturer les Transactions
          </button> 
      </div>
      }
      
    </>
  );
}

export default Transactions;
