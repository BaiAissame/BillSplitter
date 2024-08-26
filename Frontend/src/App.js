import React, { useState,useRef,useEffect } from 'react';
import axios from 'axios';


import Nav from './Nav';

import Friends from './pages/Friends';
import Expenses from './pages/Expenses';
import Transactions from './pages/Transactions';



function App() {
  const [page,setPage] = useState('Friends');
  const [listFriends,setListFriends] = useState([]);
  const [listPayment,setListPayment] = useState([]);
  const [listTransactions,setListTransactions] = useState([]);
  
  const inputRef = useRef(null);


  useEffect(() => {
    axios.get('http://localhost:8080/api/friends')
        .then(response => {
          setListFriends(response.data);
        })
        .catch(error => {
            console.error('There was an error fetching the friends!', error);
        });
  }, []);
  

  const handleDeleteFriend = (friend) => {
    axios.delete(`http://localhost:8080/api/friends/${friend.idFriend}`)
      .then(() => {
        setListFriends(listFriends.filter((f) => f.idFriend !== friend.idFriend));
      })
      .catch(error => {
        console.error('There was an error deleting the friend!', error);
      });
  };

  const addFriend = () => {
    const newFriendName = inputRef.current.value.trim();
    if (newFriendName) {
      const newFriend = {
        nameFriend: newFriendName
      };

      axios.post('http://localhost:8080/api/friends', newFriend)
        .then(response => {
          setListFriends([...listFriends, response.data]);
          inputRef.current.value = ''; 
        })
        .catch(error => {
          console.error('There was an error adding the friend!', error);
        });
    }
  }


  const generateBill = () => {
    let listBill = new Map();
    for (let i = 0; i < listPayment.length; i++) {
        if (listBill.has(listPayment[i].nameFriend)) {
          listBill.set(listPayment[i].nameFriend,+listBill.get(listPayment[i].nameFriend) + +listPayment[i].payment);
        } else {
          listBill.set(listPayment[i].nameFriend,listPayment[i].payment);
        }
      }
    return listBill;
  }

  const repartitionMoney = (listFriends, listPayment) => {
    
    const totalCost = listPayment.reduce((sum, payment) => sum + Number(payment.payment), 0);
    const part = totalCost / listFriends.length;
    let listBill = generateBill();
    let listTransactions = [];
    let debtHolder = new Map();
    let bankFriend = new Map();
  
    for (let [name, cost] of listBill.entries()) {
      if (Number(cost) < part) {
        debtHolder.set(name, part - Number(cost));
      } else {
        bankFriend.set(name, Number(cost) - part);
      }
    }
  
    let sortedDebtHolders = Array.from(debtHolder.entries()).sort((a, b) => b[1] - a[1]);
    let sortedBankFriends = Array.from(bankFriend.entries()).sort((a, b) => b[1] - a[1]);
    for (let i = 0; i < sortedDebtHolders.length; i++) {
      let [debtorName, debtAmount] = sortedDebtHolders[i];
      if (debtAmount === 0) continue;
  
      for (let j = 0; j < sortedBankFriends.length; j++) {
        let [creditor, creditAmount] = sortedBankFriends[j];
        if (creditAmount === 0) continue;
  
        let transaction = { debtHolder: debtorName, bank: creditor };
  
        if (debtAmount > creditAmount) {
          transaction.cost = creditAmount;
          debtAmount -= creditAmount;
          sortedBankFriends[j][1] = 0;
        } else {
          transaction.cost = debtAmount;
          sortedBankFriends[j][1] -= debtAmount;
          debtAmount = 0;
        }
  
        listTransactions.push(transaction);
        sortedDebtHolders[i][1] = debtAmount;
        if (debtAmount === 0) {
          break;
        }
      }
    }
    console.log(listTransactions);
    setListTransactions(listTransactions);
  }

  const handleRoute = (e) => {
    setPage(e.target.value);
  }

  const render = () => {
    switch (page) {
      case 'Friends':
        return <Friends ref={inputRef} addFriend={addFriend} listFriends={listFriends} handleDeleteFriend={handleDeleteFriend}/>;
      case 'Expenses':
        return <Expenses listFriends={listFriends} listPayment={listPayment} setListPayment={setListPayment}/>;
      case 'Transactions':
        return <Transactions listFriends={listFriends} listPayment={listPayment} listTransactions={listTransactions} repartitionMoney={repartitionMoney}/>;
      default:
        return <Friends ref={inputRef} addFriend={addFriend} listFriends={listFriends} handleDeleteFriend={handleDeleteFriend}/>;
    }
    
  }

  return (
    <div className="container">
    <Nav handleRoute={handleRoute} />
    {render()}
    </div>
);
}

export default App;

