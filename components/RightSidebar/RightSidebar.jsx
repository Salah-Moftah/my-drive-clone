"use client";

import '@/public/css/rightSidebar.css';
import { RxOpenInNewWindow } from "react-icons/rx";
import { IoIosSearch } from 'react-icons/io';
import { IoClose } from "react-icons/io5";
import { useSidebar } from '@/context/SidebarContext';

const RightSidebar = () => {
  const { activePanel, setActivePanel } = useSidebar();
  
  if (!activePanel) return null;

  return (
    <div className="right-sidebar">
      <div className="header">
        <div className="title">
          <p>{activePanel.h4}</p>
          <h4>{activePanel.h2}</h4>
        </div>
        <ul className='icon-list'>
          <li><IoIosSearch size={23} /></li>
          <li><RxOpenInNewWindow size={23} /></li>
          <li onClick={() => setActivePanel(null)}>
            <IoClose size={23} style={{ cursor: "pointer" }} />
          </li>
        </ul>
      </div>
      <hr />
    </div>
  )
}

export default RightSidebar;
