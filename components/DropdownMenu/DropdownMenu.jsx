"use client";
import { useContext, useEffect, useRef, useState } from "react";
import "@/public/css/dropdownMenu.css";
import DropdownItem from "./DropdownItem";
import { dropdownItems } from "@/constants";
import { DropdownContext } from "@/context/DropdownMenuContext";
import { useFiles } from "@/context/FileContext";
import toast from "react-hot-toast";

const DropdownMenu = () => {
  const { isOpen, closeDropdown } = useContext(DropdownContext);
  const { refreshFiles } = useFiles();
  const menuRef = useRef(null);
  const fileInputRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [animationClass, setAnimationClass] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      setTimeout(() => setAnimationClass("open"), 10);
    } else if (visible) {
      setAnimationClass("closing");
      setTimeout(() => setVisible(false), 300);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        closeDropdown();
      }
    };

    if (visible) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [visible, closeDropdown]);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) toast.error("File upload failed");

      await res.json();
      toast.success("File uploaded successfully");
      await refreshFiles();
    } catch (err) {
      console.error(err);
      toast.error("An error occurred during file upload");
    } finally {
      setUploading(false);
      closeDropdown();
    }
  };

  const triggerFileInput = () => {
    if (!uploading && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  if (!visible) return null;

  return (
    <div className={`dropdown-menu ${animationClass}`} ref={menuRef}>
      {dropdownItems.map((item, idx) =>
        item.type === "divider" ? (
          <hr key={idx} />
        ) : (
          <DropdownItem
            key={idx}
            icon={item.icon}
            title={
              uploading && item.id === "file-upload"
                ? "Uploading..."
                : item.title
            }
            shortcut={item.shortcut}
            arrow={item.arrow}
            onClick={
              item.id === "file-upload" ? triggerFileInput : item.onClick
            }
            fileInputRef={item.id === "file-upload" ? fileInputRef : null}
            onFileChange={item.id === "file-upload" ? handleFileChange : null}
          />
        )
      )}
    </div>
  );
};

export default DropdownMenu;
