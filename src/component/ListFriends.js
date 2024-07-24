import React from 'react';


function Friend({friend,handleDeleteFriend,index}){
    return(
        <>
            <p>{friend}</p>
            <button onClick={()=>handleDeleteFriend(index)}>Delete</button>
        </>
)};

function ListFriend({listFriends,handleDeleteFriend}) {
    return (
        <>
            {listFriends.map((friend, index)=> {
                return <Friend friend={friend} key={index} index={index} handleDeleteFriend={handleDeleteFriend}/>
            })}
        </>

)};


export default ListFriend;