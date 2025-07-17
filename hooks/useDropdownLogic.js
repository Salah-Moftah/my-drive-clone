import { useState } from 'react';

const useDropdownLogic = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const closeDropdown = () => setIsOpen(false);

  return {
    isOpen,
    toggleDropdown,
    closeDropdown,
  };
};

export default useDropdownLogic;
