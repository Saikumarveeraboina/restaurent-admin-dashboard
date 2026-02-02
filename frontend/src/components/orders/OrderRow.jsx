import StatusBadge from "./StatusBadge";
import OrderStatusDropdown from "./OrderStatusDropdown";
import "./OrderRow.css";

const OrderRow = ({ order, onSelect, onStatusChange }) => {
  return (
    <div className="order-row" onClick={() => onSelect(order)}>
      <div>
        <h4>{order.orderNumber}</h4>
        <p>Table {order.tableNumber}</p>
      </div>

      <StatusBadge status={order.status} />

      <OrderStatusDropdown
        value={order.status}
        onChange={(status) => onStatusChange(order._id, status)}
      />

      <span className="amount">₹{order.totalAmount}</span>
    </div>
  );
};

export default OrderRow;
