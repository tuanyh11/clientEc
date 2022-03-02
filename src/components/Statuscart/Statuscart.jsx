import React from 'react';
import './Statuscart.css';

const Statuscart = (pops) => {
  return (
    <div className='statuscart'>
        <div className="statuscartIcon">
            <i className={pops.icon}></i>
        </div>
        <div className="statuscartInfo">
            <h4>{pops.count}</h4>
            <span>{pops.title}</span>
        </div>
    </div>
  )
}

export default Statuscart