import React,{useEffect} from 'react';
import ListPayment from '../component/ListPayment';
import axios from 'axios';

function Expenses( {listFriends,listPayment,setListPayment} ) {



  useEffect(() => {
    axios.get('http://localhost:8080/api/payments')
        .then(response => {
          setListPayment(response.data);
        })
        .catch(error => {
            console.error('There was an error fetching the friends!', error);
        });
  }, []);// eslint-disable-line react-hooks/exhaustive-deps


  const handleDeletePayment = (idPayment) => {
    axios.delete(`http://localhost:8080/api/payments/${idPayment}`)
      .then(() => {
        setListPayment(listPayment.filter(payment => payment.idPayment !== idPayment));
      })
      .catch(error => {
        console.error('There was an error deleting the payment!', error);
      });
  };

  const addPayment = (e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const paymentData = Object.fromEntries(formData);
    paymentData.payment=Number(paymentData.payment);
    axios.post('http://localhost:8080/api/payments', paymentData)
    .then(response => {
      setListPayment([...listPayment,response.data]);
      e.target.reset();
      console.log(listPayment);
    })
    .catch(error => {
      console.error('There was an error adding the friend!', error);
    });
  };



  return (
    <div className='container'>

      <form onSubmit={addPayment}>
        <div className='row mt-5'>

          <div className='col-8'>
            <select className="form-select" aria-label="Default select example" name="nameFriend">
              <option defaultValue="Open this select menu"></option>
              {listFriends.map((friend)=>{
                return <option key={friend.idFriend} value={friend.nameFriend}>{friend.nameFriend}</option>
              })}
            </select>
          </div>

          <div className='col-4'>
            <input className="form-control" name="payment" type="number" placeholder="cost" />
          </div>

        </div>

        <div className='row mt-5'>

          <div className='col-8'>
              <input className="form-control" name="reason" type="text" placeholder='Reason'/>
          </div>

          <button className='col-4 btn btn-primary' type="submit">Ajouter</button>
        </div>
      </form>
      <ul className="list-group mt-3">
        <ListPayment 
            handleDeletePayment={handleDeletePayment} 
            listPayment={listPayment} 
            listFriends={listFriends} 
            setListPayment={setListPayment}
          />
      </ul>
    </div>
  )
}

export default Expenses;