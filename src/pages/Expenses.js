import React from 'react';
import ListPayment from '../component/ListPayment';

function Expenses( {listFriends,addPayment,listPayment,handleDeletePayment} ) {
  const handleSubmit = (e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const paymentData = Object.fromEntries(formData);
    paymentData.friend = listFriends[paymentData.friend] || '';
    addPayment(paymentData); 
  };
  return (
    <div className='container'>

      <form onSubmit={handleSubmit}>
        <div className='row mt-5'>

          <div className='col-8'>
            <select className="form-select" aria-label="Default select example" name="friend">
              <option defaultValue="Open this select menu"></option>
              {listFriends.map((friend,index)=>{
                return <option key={index} value={index}>{friend}</option>
              })}
            </select>
          </div>

          <div className='col-4'>
            <input className="form-control" name="cost" type="number" />
          </div>

        </div>

        <div className='row mt-5'>

          <div className='col-8'>
              <input className="form-control" name="reason" type="text" placeholder='Reason'/>
          </div>

          <button className='col-4 btn btn-primary' type="submit">Ajouter</button>
        </div>
      </form>
      <ListPayment handleDeletePayment={handleDeletePayment} listPayment={listPayment}/>
    </div>
  )
}

export default Expenses;