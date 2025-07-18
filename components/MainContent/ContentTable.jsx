import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoMdArrowUp, IoMdArrowDown } from "react-icons/io";
import HoverCircleBackground from "../HoverCircleBackground";
import { formatFileSize } from "@/utils/formatFileSize";
import formattedDate from "@/utils/formattedDate";
import { getFileIcon } from "@/utils/getFileIcon";
import { useSortableData } from "@/hooks/useSortableData";
import { useState, useEffect, useRef } from "react";
import { MdSort } from "react-icons/md";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiDownload } from "react-icons/fi";
import { useFiles } from "@/context/FileContext";
import { FaCheck } from "react-icons/fa6";
import toast from "react-hot-toast";


const ContentTable = ({ files }) => {
  const { setFiles } = useFiles();
  const [selectedRowId, setSelectedRowId] = useState(null);
  const {
    items: sortedFiles,
    requestSort,
    sortConfig,
  } = useSortableData(files, {
    key: "name",
    direction: "asc",
  });

  const [showSortMenu, setShowSortMenu] = useState(false);
  const sortOptions = [
    { key: "name", label: "Name" },
    { key: "date", label: "Last Modified" },
    { key: "bytes", label: "File Size" },
  ];

  const [sortMenuVisible, setSortMenuVisible] = useState(false);

  const handleSortOption = (key) => {
    requestSort(key);
    setSortMenuVisible(false);
  };

  const tableRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tableRef.current && !tableRef.current.contains(event.target)) {
        setSelectedRowId(null);
        setSortMenuVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSort = (type) => requestSort(type);

  const getSortIcon = (type) => {
    if (sortConfig.key !== type) return null;
    return sortConfig.direction === "asc" ? <IoMdArrowUp /> : <IoMdArrowDown />;
  };

  const toggleStar = async (id) => {
    const res = await fetch(`/api/toggle-star?id=${id}`, {
      method: "PATCH",
    });

    if (res.ok) {
      const updated = await res.json();
      setFiles((prev) =>
        prev.map((file) =>
          file._id === id ? { ...file, isStarred: updated.isStarred } : file
        )
      );
    }
  };

  const handleDelete = async (id) => {
    const res = await fetch(`/api/delete?id=${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setFiles((prev) => prev.filter((file) => file._id !== id));
      toast.success("The file was deleted successfully.");
    } else {
      toast.error("Failed to delete file");
    }
  };

  return (
    <div className="table-container" ref={tableRef}>
      <table className="drive-table">
        <thead>
          <tr>
            <th className="name-col" onClick={() => handleSort("name")}>
              <span className="header-name">Name</span>
              <HoverCircleBackground>
                {getSortIcon("name")}
              </HoverCircleBackground>
            </th>
            <th className="owner-col hide-on-small">
              <span className="header-name">Owner</span>
            </th>
            <th
              className="date-col hide-on-medium"
              onClick={() => handleSort("date")}
            >
              <span className="header-name">Last Modified</span>
              <HoverCircleBackground>
                {getSortIcon("date")}
              </HoverCircleBackground>
            </th>
            <th className="size-col hide-on-large">
              <span className="header-name">File Size</span>
            </th>
            <th
              className="sort-col hide-on-large"
              style={{ position: "relative" }}
            >
              <div
                className="sorting"
                onClick={() => setSortMenuVisible((prev) => !prev)}
                style={{ cursor: "pointer" }}
              >
                <MdSort />
                <span className="header-name">Sort</span>
              </div>

              {sortMenuVisible && (
                <div
                  className="sort-dropdown"
                  ref={tableRef}
                  
                >
                  {sortOptions.map((option) => (
                    <div
                      key={option.key}
                      className="sort-option"
                      onClick={() => handleSortOption(option.key)}
                    >
                      {sortConfig.key === option.key ? (
                        <span>
                          <FaCheck size={23} />
                        </span>
                      ) : (
                        <span
                          style={{ width: "16px", marginRight: "8px" }}
                        ></span>
                      )}
                      <span style={{padding: '5px 0'}}>{option.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedFiles.map((file) => (
            <tr
              key={file._id}
              className={`row-hover-actions ${
                selectedRowId === file._id ? "selected-row" : ""
              }`}
              onClick={() =>
                setSelectedRowId((prev) =>
                  prev === file._id ? null : file._id
                )
              }
            >
              <td className="name-col">
                <img
                  src={getFileIcon(file.name)}
                  alt="file icon"
                  className="file-icon"
                />
                <span>
                  {file.name}
                  {file.isStarred && (
                    <MdOutlineStar
                      size={14}
                      style={{ marginLeft: "10px", opacity: "0.8" }}
                    />
                  )}
                </span>
              </td>
              <td className="owner-col hide-on-small">
                <div className="owner-box">
                  <img
                    className="owner-img"
                    src="/imgs/avatar.png"
                    alt="avatar"
                  />
                  <span>me</span>
                </div>
              </td>
              <td className="date-col hide-on-medium">
                {formattedDate(file, true)}
              </td>
              <td className="size-col hide-on-large">
                {formatFileSize(file.bytes || 0)}
              </td>
              <td className="dots-col hide-on-large">
                <div className="more-actions">
                  <div className="download">
                    <HoverCircleBackground>
                      <FiDownload size={18} />
                    </HoverCircleBackground>
                  </div>
                  <div
                    className="star"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleStar(file._id);
                    }}
                  >
                    <HoverCircleBackground>
                      {file.isStarred ? (
                        <MdOutlineStar size={18} />
                      ) : (
                        <MdOutlineStarBorder size={18} />
                      )}
                    </HoverCircleBackground>
                  </div>
                  <div
                    className="delete"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(file._id);
                    }}
                  >
                    <HoverCircleBackground color="red">
                      <RiDeleteBin6Line size={18} />
                    </HoverCircleBackground>
                  </div>
                </div>
                <div className="dots">
                  <HoverCircleBackground>
                    <BiDotsVerticalRounded size={18} />
                  </HoverCircleBackground>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContentTable;
