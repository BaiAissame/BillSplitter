import React, { useState,useRef } from 'react';


import Nav from './Nav';

import Friends from './pages/Friends';
import Expenses from './pages/Expenses';
import Transactions from './pages/Transactions';



function App() {
  const [page,setPage] = useState('Friends');
  const [listFriends,setListFriends] = useState([]);
  const [listPayment,setListPayment] = useState([]);
  const [listPaymentTotal,setListPaymentTotal] = useState([]);
  

  const inputRef = useRef(null);

  const handleDeleteFriend = (index) => {
    setListFriends(listFriends.filter((friend,i) => i !== index));
  }
  
  const handleDeletePayment = (index) => {
    setListPayment(listPayment.filter((payment,i) => i !== index));
  }

  const addPayment = (paymentData) => {
    setListPayment([...listPayment,paymentData]);
  }

  const addFriend = () => {
    const newFriendName = inputRef.current.value.trim();
    if (newFriendName) {
      setListFriends([...listFriends, newFriendName]);
      inputRef.current.value = '';
    }
  }
  const generateBill = () => {
    let listBill = listPayment;
    for (let i = 0; i < listBill.length; i++) {
      for (let j = 1; j < listBill.length; j++) {
        if (listBill[i].friend===listBill[j].friend && i<j  ) {
          listBill[i].cost += listBill[j].cost;
        }
      }
    }
  }

  const handleRoute = (e) => {
    setPage(e.target.value);
  }

  const render = () => {
    switch (page) {
      case 'Friends':
        return <Friends ref={inputRef} addFriend={addFriend} listFriends={listFriends} handleDeleteFriend={handleDeleteFriend}/>;
      case 'Expenses':
        return <Expenses listFriends={listFriends} listPayment={listPayment} addPayment={addPayment} handleDeletePayment={handleDeletePayment}/>;
      case 'Transactions':
        return <Transactions listFriends={listFriends} listPayment={listPayment}/>;
      default:
        return <Friends ref={inputRef} addFriend={addFriend} listFriends={listFriends} handleDeleteFriend={handleDeleteFriend}/>;
    }
    
  }

  return (
    <>
    <Nav handleRoute={handleRoute} />
    {render()}
    </>
);
}

export default App;

