import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = (props) => {
    const activeOne = props.active ? 'active': '';
    const [activeTwo, setActiveTwo] = useState(false);
    return (
      <div className={`sidebarItem ${activeTwo ? 'activeTwo': ''}`} onClick={() => setActiveTwo(!activeTwo)} >
        <div className={`sidebarItemInner ${activeOne}`}>
            <i className={props.icon}></i>
            <span>
                {props.title}
            </span>
        </div>
        <div className="sidebarItemContent">
            {props.items ? (
                props.items.map((item, index) => (
                  <Link to={item.route} key={index}>
                      <button>{item.displayName}</button>
                  </Link>
                ))
            ): ''}
        </div>
      </div>
    )
  }

export default SidebarItem