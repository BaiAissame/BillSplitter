import React, { forwardRef } from 'react';
import ListFriend from '../component/ListFriends';


const Friends = forwardRef((props, ref) => {
  return (
    <>
      <div className='input-group input-group-lg mt-5' style={{ display: 'flex' }}>
        <input
          type="text"
          className="form-control fs-4"
          ref={ref}
          style={{ flex: 0.9 }} 
        />
        <button
          className="btn btn-secondary btn-lg fs-3"
          style={{ flex: 0.1 }} 
          onClick={props.addFriend}
        >
          +
        </button>
      </div>
      <ul className="list-group mt-3">
        <ListFriend listFriends={props.listFriends} handleDeleteFriend={props.handleDeleteFriend}/>
      </ul>
    </>
  );
});


export default Friends;