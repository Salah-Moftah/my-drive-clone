'use client';

import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineTune } from "react-icons/md";
import HoverCircleBackground from "./HoverCircleBackground";
import { useFiles } from "@/context/FileContext";
import { formatFileSize } from "@/utils/formatFileSize";
import formattedDate from "@/utils/formattedDate";
import { getFileIcon } from "@/utils/getFileIcon";

const Search = () => {
  const { files, loading } = useFiles();
  const [isFocused, setIsFocused] = useState(false);
  const [search, setSearch] = useState("");

  const filteredFiles = files.filter((file) =>
    file.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="search-wrapper">
      <div className={`search-bar ${isFocused && search.trim() !== "" ? "focused open" : isFocused ? "focused" : ""}`}>
        <div className="search-bar-input">
          <HoverCircleBackground color="gray">
            <IoIosSearch size={23} />
          </HoverCircleBackground>
          <input
            type="search"
            className="search-input"
            placeholder="Search in Drive"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          />
        </div>
        <HoverCircleBackground color="gray">
          <MdOutlineTune size={23} />
        </HoverCircleBackground>
      </div>

      {isFocused && search.trim() !== "" && (
        <div className="search-dropdown">
          {filteredFiles.length > 0 ? (
            <ul>
              {filteredFiles.map((file) => {
                
                return (
                  <li key={file._id}>
                    <a href={file.url} target="_blank" rel="noopener noreferrer">
                      <div>
                        <img className="file-icon" src={getFileIcon(file.name)} alt={file.name} />
                      </div>
                      <span className="file-name">{file.name}</span>
                    </a>
                    <div className="meta">
                      <span>{formattedDate(file)}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="no-results">No results found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
