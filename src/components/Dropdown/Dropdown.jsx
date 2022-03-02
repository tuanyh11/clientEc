import React, { useRef, useEffect } from 'react';
import './Dropdown.css'

const Dropdown = props => { 
  const dropdownToggleEl = useRef(null);
  const dropdownContentEl = useRef(null);
  const clickOutsideOfRef = (contentRef, toggleRef) => {
        document.addEventListener( 'mousedown', e => {
            if(contentRef.current && toggleRef.current.contains(e.target)) {
                contentRef.current.classList.toggle('active');
            } else {
                if(contentRef.current && !toggleRef.current.contains(e.target)) {
                    contentRef.current.classList.remove('active');
                }
            }
        }) 
  }
  clickOutsideOfRef(dropdownContentEl, dropdownToggleEl);
  useEffect(() => {
      return () => {
          document.removeEventListener('mousedown');
      }
  }, [])
  return (
    <div className='dropdown'>
        <button ref={dropdownToggleEl} className="dropdownToggle">
               {
                   props.icon ?  <i className={props.icon}></i> : ''
                   
               }
               {
                    props.badge ? <span className='dropdownToggleBadge'>{props.badge}</span> : ''
               }
               {
                   props.renderUserInfo ? props.renderUserInfo() : ''
               }
        </button>
        <div ref={dropdownContentEl} className="dropdownConten">
                {
                    props.contentData && props.renderItems ? props.contentData.map((item, index) => props.renderItems(item, index)) : ''
                }
                {
                    props.renderFooter ? (
                        <div className="dropdownFooter">
                            {props.renderFooter()}
                        </div>
                    ) : ''
                }
        </div>
    </div>
  )
}

export default Dropdown