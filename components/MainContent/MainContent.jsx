"use client";

import { IoMdArrowDropdown } from "react-icons/io";
import HoverCircleBackground from "../HoverCircleBackground";
import FilterDropdown from "../FilterDropdown";
import { filterList } from "../../constants";
import ContentTable from "./ContentTable";
import ToggleSwitch from "./ToggleSwitch";
import Loader from "../loader";
import { useViewMode } from "@/context/ViewModeContext";
import ContentGrid from "./ContentGrid";
import { useFiles } from "@/context/FileContext"; 

import { useState } from "react";

const MainContent = () => {
  const { files, loading } = useFiles(); 
  const { viewMode } = useViewMode();
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("date");

  const filteredFiles = files.filter((file) =>
    file.name.toLowerCase().includes(search.toLowerCase())
  );

  const sortedFiles = [...filteredFiles].sort((a, b) => {
    if (sortType === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
  });

  return (
    <>
      <div className="content-header">
        <div className="content-head">
          <div className="my-drive-dropdown">
            <span className="my-drive-name">My Drive</span>
            <IoMdArrowDropdown />
          </div>
          <div className="layout">
            <div className="layout-btn">
              <ToggleSwitch />
            </div>
            <HoverCircleBackground>
              <img src="/imgs/info.svg" alt="info" />
            </HoverCircleBackground>
          </div>
        </div>
        <div className="filter-section">
          {filterList.map((n) => (
            <FilterDropdown key={n.id} name={n.name} />
          ))}
        </div>
      </div>

      {loading ? (
        <Loader />
      ) : sortedFiles.length === 0 ? (
        <p>No files uploaded.</p>
      ) : viewMode === "list" ? (
        <ContentTable files={sortedFiles} />
      ) : (
        <ContentGrid files={sortedFiles} />
      )}
    </>
  );
};

export default MainContent;
