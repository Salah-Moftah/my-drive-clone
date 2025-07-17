import Sidebar from "@/components/Sidebar";
import "@/public/css/sidebar.css";
import "@/public/css/mainContent.css";
import "@/public/css/sidePanel.css";
import "@/public/css/navbar.css";
import { MdArrowForwardIos } from "react-icons/md";
import NavBar from "@/components/NavBar";
import MainContent from "@/components/MainContent/MainContent";
import DropdownMenu from "@/components/DropdownMenu/DropdownMenu";
import RightSidebar from "@/components/RightSidebar/RightSidebar";
import SidePanel from "@/components/RightSidebar/SidePanel";

function App() {
  return (
    <main className="home-page">
      <header>
        <NavBar />
      </header>
      <div className="sections-area">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main-content">
          <MainContent />
        </div>
        
        <RightSidebar />

        <div className="side-panel">
          <SidePanel />
        </div>
        <div className="show-side-panel">
          <MdArrowForwardIos className="arrow" size={15} />
        </div>
      </div>

      <DropdownMenu />
    </main>
  );
}

export default App;
