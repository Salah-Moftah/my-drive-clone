'use client';

import { createContext, useState, useCallback } from 'react';

export const MoreActionsContext = createContext();

export const MoreActionsProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = useCallback(() => setIsOpen(prev => !prev), []);
  const closeDropdown = useCallback(() => setIsOpen(false), []);

  return (
    <MoreActionsContext.Provider value={{ isOpen, toggleDropdown, closeDropdown }}>
      {children}
    </MoreActionsContext.Provider>
  );
};
