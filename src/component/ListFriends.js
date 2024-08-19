import React from 'react';


function Friend({ name, handleDeleteFriend, index }) {
    return (
    <li className="list-group-item list-group-item-light">
        <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0 fs-4">{name}</p>
            <button className="btn btn-secondary" onClick={() => handleDeleteFriend(index)}>
            Delete
            </button>
        </div>
    </li>
    );
  }

function ListFriend({listFriends,handleDeleteFriend}) {
    return (
        <>
            {listFriends.map((name, index)=> {
                return <Friend name={name} key={index} index={index} handleDeleteFriend={handleDeleteFriend}/>
            })}
        </>

)};


export default ListFriend;