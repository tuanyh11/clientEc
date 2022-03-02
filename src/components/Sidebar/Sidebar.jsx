import React, { useRef, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import SidebarItems from '../../assets/jsonData/sidebar_routes.json';
import Logo from '../../assets/images/logo.jpg';
import SidebarItem from './SidebarItem';
import './Sidebar.css';

const Sidebar = (props) => {
  const {pathname} = useLocation();
  const activeItem = SidebarItems.findIndex((item) => item.route === pathname);
  const buttonRef = useRef(null);
  const [sidebarAt, setSidebarAt] = useState(false);
  const hiddenSidebar = () => {
      setSidebarAt(!sidebarAt)
  }
  return (
    <div className={`sidebar ${sidebarAt ? 'active': ''}`}>
      {/* <button ref={buttonRef} onClick={() => hiddenSidebar()} className={`sidebarIcon ${sidebarAt ? 'active': ''}`}>
        <i className='bx bx-x'></i>
      </button> */}
      <div className="sidebarLogo">
          <img src={Logo} alt="" />
      </div>
      {SidebarItems.map((item, id) => (
        <Link to={item.route} key={id}>
            <SidebarItem icon={item.icon} title={item.displayName} active={activeItem === id} items={item.items}/>
        </Link>
      ))}
      <Outlet/>
    </div>
  )
}

export default Sidebar