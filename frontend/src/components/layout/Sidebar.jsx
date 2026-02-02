import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="logo">🍽 Eatoes</h2>

      <nav className="nav">
        <NavLink to="/menu" className={({ isActive }) => (isActive ? "active" : "")}>
          Menu
        </NavLink>

        <NavLink to="/orders" className={({ isActive }) => (isActive ? "active" : "")}>
          Orders
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
