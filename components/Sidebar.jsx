"use client";

import { useContext, useState } from "react";
import { sidebarList } from "@/constants";
import {
  FiHome,
  FiCpu,
  FiShare,
  FiClock,
  FiStar,
  FiAlertCircle,
  FiTrash,
  FiDatabase,
  FiPlus,
} from "react-icons/fi";
import { MdDriveFileMoveOutline } from "react-icons/md";
import { DropdownContext } from "@/context/DropdownMenuContext";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(2);

  const { toggleDropdown } = useContext(DropdownContext);

  const getIconByName = (iconName) => {
    switch (iconName) {
      case "home":
        return <FiHome size={23} />;
      case "folder":
        return <MdDriveFileMoveOutline size={23} />;
      case "cpu":
        return <FiCpu size={23} />;
      case "share":
        return <FiShare size={23} />;
      case "clock":
        return <FiClock size={23} />;
      case "star":
        return <FiStar size={23} />;
      case "alert-circle":
        return <FiAlertCircle size={23} />;
      case "trash":
        return <FiTrash size={23} />;
      case "database":
        return <FiDatabase size={23} />;
      default:
        return null;
    }
  };

  return (
    <>
      <a className="new-button" onClick={toggleDropdown}>
        <FiPlus size={23} />
        <span>New</span>
      </a>

      <ul className="sidebar-items-container">
        <ul className="sidebar-items">
          {sidebarList.map((item) => (
            <li key={item.id}>
              <a
                href={item.path}
                className={activeItem === item.id ? "active" : ""}
                onClick={() => setActiveItem(item.id)}
              >
                {getIconByName(item.iconName)}
                <span>{item.name}</span>
              </a>
            </li>
          ))}
          <div className="storage">
            <div className="progress" />
            <p>3.73 GB of 15 GB used</p>
            <button className="storage-btn">Get more storage</button>
          </div>
        </ul>
      </ul>
    </>
  );
};

export default Sidebar;
