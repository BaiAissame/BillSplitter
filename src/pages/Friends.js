import React, { forwardRef } from 'react';
import ListFriend from '../component/ListFriends';


const Friends = forwardRef((props, ref) => {
  return (
  
    <div className='mt-5'>
      <input type="text" ref={ref} />
      <button onClick={props.addFriend}>+</button>
      <ListFriend listFriends={props.listFriends} handleDeleteFriend={props.handleDeleteFriend}/>
    </div>
  );
});

export default Friends;