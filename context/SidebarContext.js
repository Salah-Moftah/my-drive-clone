'use client';

import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [activePanel, setActivePanel] = useState(null);
  
  return (
    <SidebarContext.Provider value={{ activePanel, setActivePanel }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);