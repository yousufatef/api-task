import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="App">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
