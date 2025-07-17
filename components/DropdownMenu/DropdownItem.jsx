const DropdownItem = ({ icon, title, shortcut, arrow, onClick, fileInputRef, onFileChange }) => {
  return (
    <div className="dropdown-item" onClick={onClick} style={{ cursor: "pointer" }}>
      <div className="content-box">
        {icon}
        <span className="title">{title}</span>
        {fileInputRef && (
          <input type="file" ref={fileInputRef} style={{ display: "none" }} onChange={onFileChange} />
        )}
      </div>
      {shortcut && <span className="shortcut">{shortcut}</span>}
      {arrow && <span className="right-arrow">{arrow}</span>}
    </div>
  );
};

export default DropdownItem;
