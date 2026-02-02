import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import OrderRow from "../components/orders/OrderRow";
import OrderDetails from "../components/orders/OrderDetails";
import api from "../api/axios";
import "./OrdersDashboard.css";

const OrdersDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    api.get("/api/orders").then((res) => setOrders(res.data));
  }, []);

  const updateStatus = async (id, status) => {
    // Optimistic UI
    setOrders((prev) =>
      prev.map((o) => (o._id === id ? { ...o, status } : o))
    );

    try {
      await api.patch(`/api/orders/${id}/status`, { status });
    } catch {
      alert("Failed to update order status");
    }
  };

  return (
    <Layout title="Orders Dashboard">
      <div className="orders-container">
        <div className="orders-list">
          {orders.map((order) => (
            <OrderRow
              key={order._id}
              order={order}
              onSelect={setSelected}
              onStatusChange={updateStatus}
            />
          ))}
        </div>

        <OrderDetails order={selected} />
      </div>
    </Layout>
  );
};

export default OrdersDashboard;
