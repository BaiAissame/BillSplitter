import React from 'react';

function Nav( {handleRoute} ) {
    return (
      <nav className="navbar bg-secondary">
        <div className="container-fluid">
          <button className="nav-link" onClick={handleRoute} value="Friends">Friends</button>
          <button className="nav-link" onClick={handleRoute} value="Expenses">Expenses</button>
          <button className="nav-link" onClick={handleRoute} value="Transactions">Transactions</button>
        </div>
      </nav>

    );
    
}
export default Nav;