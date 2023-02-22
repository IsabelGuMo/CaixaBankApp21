import React from 'react';
import './iconComponent.css';

const IconComponent = () => {
  return (
    <div className='container'>
     <div className='col'>
     <h1>holas</h1>
       <div className='row-12'>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
             <form className="d-flex" role="search">
             <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"
            autoFocus="on"
            onChange=""
             />
            <button className="btn btn-outline-danger rounded-end-circle" type="submit">Search</button>
             </form>
             <img className='imgDetail' src="./imgPool.png" alt=" "></img>
    </div> 
    </nav>
        </div>
        <div className='row-6'></div>
        <div className='row-3'></div>
        </div>

    </div>
  )
}

export default IconComponent