import React from 'react';

function Nav( {handleRoute} ) {
    return (
      <nav class="navbar bg-secondary">
        <div class="container-fluid">
          <button class="nav-link" onClick={handleRoute} value="Friends">Friends</button>
          <button class="nav-link" onClick={handleRoute} value="Expenses">Expenses</button>
          <button class="nav-link" onClick={handleRoute} value="Transactions">Transactions</button>
        </div>
      </nav>

    );
    
}
export default Nav;