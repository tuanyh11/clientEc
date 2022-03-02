import React from 'react';
import './Topnav.css';
import Dropdown from '../Dropdown/Dropdown';
import NotificationsData from '../../assets/jsonData/notifications.json';
import { Link } from 'react-router-dom';
import avartar from '../../assets/images/logo.jpg';
import userMenus from '../../assets/jsonData/userMenus.json';

const Topnav = () => {
    const renderNotificationItem = (item, index) => (
        <div className="notificationItem" key={index}>
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    );
    
    const renderUserCurrent = user => (
        <div className="topnavRightUser">
            <div className="topnavRightUserImage">
                <img src={user.avartar} alt="avartar" />
            </div>
            <div className="topnavRightUserName">
                {user.displayName}
            </div>
        </div>
    )

    const currentUser = {
        displayName: "Tuan leo",
        avartar
    }

    const renderUserMenu = (item, index) => (
        <Link to="/" ke={index}>
            <div className="notificationItem">
                <i className={item.icon}></i>
                <span>{item.content}</span>
            </div>
        </Link>
    )

  return (
    <div className='topnav'>
        <form action="" className="topnavSearch">
            <input type="text" name="" id="" placeholder='Search here...' />
            <i className='bx bx-search'></i>
        </form>
        <div className="topnavRight">
            <div className="topnavRightItem">
                <Dropdown
                    renderUserInfo={() => renderUserCurrent(currentUser)}
                    contentData={userMenus}
                    renderItems={(item, index) => renderUserMenu(item, index)}
                />
            </div>
            <div className="topnavRightItem">
                <Dropdown
                    icon="bx bx-bell"
                    badge={NotificationsData.length}
                    contentData={NotificationsData}
                    renderItems={(item, index) => renderNotificationItem(item, index)}
                    renderFooter={() => <Link to="/" >View All</Link>}
                />
            </div>
            <div className="topnavRightItem">
                <Dropdown/>
            </div>
        </div>
    </div>
  )
}

export default Topnav