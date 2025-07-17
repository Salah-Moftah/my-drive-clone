"use client";

import { FiPlus } from "react-icons/fi";
import { sidePanelIcons } from "@/constants";
import HoverCircleBackground from "@/components/HoverCircleBackground";
import { useSidebar } from "@/context/SidebarContext";

const SidePanel = () => {
  const { activePanel, setActivePanel } = useSidebar();

  return (
    <div className="icons-area">
      {sidePanelIcons.map((icon) => (
        <div
          onClick={() => {
            if (activePanel?.id === icon.id) {
              setActivePanel(null);
            } else {
              setActivePanel(icon);
            }
          }}
          key={icon.id}
          className="icon"
        >
          <HoverCircleBackground
            color={icon.colorBackground}
            isActive={activePanel?.id === icon.id}
          >
            <img src={icon.icon} alt={icon.name} />
          </HoverCircleBackground>
        </div>
      ))}
      <div className="line" />
      <HoverCircleBackground>
        <FiPlus size={20} />
      </HoverCircleBackground>
    </div>
  );
};

export default SidePanel;
