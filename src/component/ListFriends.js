import React from 'react';


function Friend({ friend, handleDeleteFriend }) {
    return (
    <li className="list-group-item list-group-item-light">
        <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0 fs-4">{friend.nameFriend}</p>
            <button className="btn btn-secondary" onClick={() => handleDeleteFriend(friend)}>
            Delete
            </button>
        </div>
    </li>
    );
  }

function ListFriend({listFriends,handleDeleteFriend}) {
    return (
        <>
            {listFriends.map((friend)=> {
                return <Friend friend={friend} key={friend.idFriend}  handleDeleteFriend={handleDeleteFriend}/>
            })}
        </>

)};


export default ListFriend;