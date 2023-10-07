import { Link } from "react-router-dom";
import "../App.css";

const Sidebar = () => {
  return (
    <div>
      <Link to="pdf">PDF Viewer</Link>
      <Link to="power-point">PP Viewer</Link>
      <Link to="excel">Excel Viewer</Link>
    </div>
  );
};

export default Sidebar;
