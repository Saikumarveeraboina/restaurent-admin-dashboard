import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MenuManagement from "./pages/MenuManagement";
import OrdersDashboard from "./pages/OrdersDashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/menu" />} />
        <Route path="/menu" element={<MenuManagement />} />
        <Route path="/orders" element={<OrdersDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
