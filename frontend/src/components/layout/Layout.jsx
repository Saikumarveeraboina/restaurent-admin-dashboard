import Sidebar from "./Sidebar";
import Header from "./Header";
import "./Layout.css";

const Layout = ({ children, title }) => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <Header title={title} />
        {children}
      </main>
    </div>
  );
};

export default Layout;
