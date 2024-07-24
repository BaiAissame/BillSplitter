import React from 'react';

function Nav( {handleRoute} ) {
    return (
    <>
      <button onClick={handleRoute} value="Friends">Friends</button>
      <button onClick={handleRoute} value="Expenses">Expenses</button>
      <button onClick={handleRoute} value="Transactions">Transactions</button>
    </>
    );
    
}
export default Nav;