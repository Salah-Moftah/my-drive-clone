import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdFolderShared } from "react-icons/md";

const ContentGrid = ({ files }) => {
  return (
    <div className="grid-container">
      {files.map((file) => (
        <div className="file-card" key={file._id}>
          <span className="file-name">
            <div>
              <MdFolderShared className="folder-icon" />
            </div>
            <div>
            <h4>{file.name}</h4>
            <p>In Shared with me</p>
            </div>
            </span>
          <BiDotsVerticalRounded className="file-options" />
        </div>
      ))}
    </div>
  );
};

export default ContentGrid;